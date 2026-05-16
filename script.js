const linkInput = document.getElementById('linkInput');
const generateBtn = document.getElementById('generateBtn');
const qrcodeContainer = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');
const errorMsg = document.getElementById('errorMsg');

let currentQR = null;

function isValidURL(str) {
    try {
        const url = new URL(str);
        return url.hostname.includes('.');
    } catch {
        return false;
    }
}

function generateQR(text) {
    qrcodeContainer.innerHTML = '';

    if (!text) return;

    currentQR = new QRCode(qrcodeContainer, {
        text,
        width: 220,
        height: 220,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
    });

    setTimeout(() => {
        const canvas = qrcodeContainer.querySelector('canvas');
        if (canvas) {
            downloadBtn.href = canvas.toDataURL('image/png');
            downloadBtn.style.display = 'inline-block';
        }
    }, 200);
}

function handleGenerate() {
    let url = linkInput.value.trim();
    errorMsg.textContent = '';
    linkInput.style.borderColor = 'rgba(255, 255, 255, 0.15)';

    if (!url) {
        errorMsg.textContent = 'Veuillez entrer un lien.';
        linkInput.style.borderColor = '#ff5252';
        return;
    }

    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    if (!isValidURL(url)) {
        errorMsg.textContent = 'Veuillez entrer une URL valide (ex: https://exemple.com).';
        linkInput.style.borderColor = '#ff5252';
        return;
    }

    generateQR(url);
}

generateBtn.addEventListener('click', handleGenerate);

linkInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleGenerate();
});

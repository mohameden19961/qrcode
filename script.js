const linkInput = document.getElementById('linkInput');
const generateBtn = document.getElementById('generateBtn');
const qrcodeContainer = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

let currentQR = null;

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

    if (!url) return;

    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    generateQR(url);
}

generateBtn.addEventListener('click', handleGenerate);

linkInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleGenerate();
});

# QR Code Generator

A lightweight web application that generates QR codes from any URL or text input.

![Preview](qrcode.png)

## Features

- Instant QR code generation from any link
- Auto-adds `https://` if protocol is missing
- URL validation with error messages
- Download QR code as PNG image
- Responsive and modern UI

## Security

- **Mozilla Observatory**: 120/100 (A+)
- Content-Security-Policy enforced
- Permissions-Policy restricts unused APIs
- Referrer-Policy: `strict-origin-when-cross-origin`
- Subresource Integrity on CDN scripts

## Usage

1. Visit the site
2. Paste or type a URL into the input field
3. Click **Generate** or press **Enter**
4. Download the QR code as a PNG image

## Technologies

- HTML5 / CSS3 / Vanilla JavaScript
- [QRCode.js](https://github.com/davidshimjs/qrcodejs)

## Deployment

Static site deployed on **Netlify** with custom security headers.

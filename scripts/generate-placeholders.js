/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Create simple SVG placeholders
const createPlaceholder = (width, height, text, filename) => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#3498db" opacity="0.3"/>
      <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="none" stroke="#2c3e50" stroke-width="2" stroke-dasharray="5,5"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.06}" fill="#2c3e50">
        ${text}
      </text>
    </svg>
  `;
  
  fs.writeFileSync(path.join(__dirname, '../public/images', filename), svg);
};

// Generate placeholder images
const placeholders = [
  { width: 1920, height: 1080, text: 'Hero Beach View', filename: 'hero-beach.jpg' },
  { width: 600, height: 400, text: 'About Resort', filename: 'about-resort.jpg' },
  { width: 400, height: 250, text: 'Beachfront House', filename: 'beachfront-house.jpg' },
  { width: 400, height: 250, text: 'Seaview Jungle', filename: 'seaview-jungle.jpg' },
  { width: 400, height: 250, text: 'Seaview 2 Bed', filename: 'seaview-2bed.jpg' },
  { width: 400, height: 250, text: '2 Bed 2 Bath', filename: '2bed-2bath.jpg' },
  { width: 400, height: 250, text: 'A3 Bungalow', filename: 'a3-bungalow.jpg' }
];

placeholders.forEach(placeholder => {
  createPlaceholder(placeholder.width, placeholder.height, placeholder.text, placeholder.filename);
});

console.log('Placeholder images generated successfully!');

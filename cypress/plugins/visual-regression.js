/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

module.exports = (options) => {
  return new Promise((resolve, reject) => {
    const { baseImage, newImage, diffImage, threshold = 0.02 } = options;

    try {
      const baseImagePath = path.resolve(baseImage);
      const newImagePath = path.resolve(newImage);
      const diffImagePath = path.resolve(diffImage);

      // Check if base image exists
      if (!fs.existsSync(baseImagePath)) {
        // If base image doesn't exist, copy the new image as the base
        fs.copyFileSync(newImagePath, baseImagePath);
        resolve({
          mismatchedPixels: 0,
          isSameDimensions: true,
          diffRatio: 0,
          isEqual: true,
        });
        return;
      }

      const baseImageData = PNG.sync.read(fs.readFileSync(baseImagePath));
      const newImageData = PNG.sync.read(fs.readFileSync(newImagePath));

      const { width, height } = baseImageData;
      const diff = new PNG({ width, height });

      // Check if dimensions match
      if (
        baseImageData.width !== newImageData.width ||
        baseImageData.height !== newImageData.height
      ) {
        resolve({
          mismatchedPixels: -1,
          isSameDimensions: false,
          diffRatio: 1,
          isEqual: false,
        });
        return;
      }

      const mismatchedPixels = pixelmatch(
        baseImageData.data,
        newImageData.data,
        diff.data,
        width,
        height,
        {
          threshold: 0.1,
          diffColor: [255, 0, 0],
          diffColorAlt: [255, 255, 0],
        }
      );

      // Save diff image
      fs.writeFileSync(diffImagePath, PNG.sync.write(diff));

      const totalPixels = width * height;
      const diffRatio = mismatchedPixels / totalPixels;

      resolve({
        mismatchedPixels,
        isSameDimensions: true,
        diffRatio,
        isEqual: diffRatio <= threshold,
      });
    } catch (error) {
      reject(error);
    }
  });
};

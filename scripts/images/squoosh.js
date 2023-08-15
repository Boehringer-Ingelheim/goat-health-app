const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const ora = require('ora');
const os = require('os');
const path = require('path');
const sharp = require('sharp');

const resizeConfig = {
  width: null,
  fit: sharp.fit.contain,
  kernel: sharp.kernel.lanczos3,
  withoutEnlargement: true,
};

const webpConfig = {
  quality: 75,
  lossless: false,
  nearLossless: false,
  alphaQuality: 100,
  reductionEffort: 4,
  force: true,
};

const processImage = async (inputPath, outputPath, resizeOptions, webpOptions) => {
  let image = sharp(inputPath);

  if (resizeOptions.width) {
    image = image.resize(resizeOptions);
  }

  await image.webp(webpOptions).toFile(outputPath);
};

(async () => {
  const directory = path.join(process.cwd(), 'resources/images');
  const outputDir = 'public/assets/img';
  const filenames = fs
    .readdirSync(directory)
    .filter((filename) => filename.endsWith('jpg') || filename.endsWith('png'));

  for (const filename of filenames) {
    const inputPath = path.join(directory, filename);
    const baseOutputPath = path.join(outputDir, filename.split('.')[0]);

    await processImage(inputPath, `${baseOutputPath}.webp`, {}, webpConfig);
    await processImage(inputPath, `${baseOutputPath}_800.webp`, { ...resizeConfig, width: 800 }, webpConfig);
    await processImage(inputPath, `${baseOutputPath}_400.webp`, { ...resizeConfig, width: 400 }, webpConfig);
    await processImage(inputPath, `${baseOutputPath}_200.webp`, { ...resizeConfig, width: 200 }, webpConfig);
  }

  process.exit();
})();

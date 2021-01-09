const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const ora = require('ora');
const os = require('os');
const path = require('path');

const resizeConfig = {
  enabled: true,
  method: 'lanczos3',
  fitMethod: 'stretch',
  premultiply: true,
  linearRGB: true,
};

const webpConfig = {
  quality: 75,
  target_size: 0,
  target_PSNR: 0,
  method: 4,
  sns_strength: 50,
  filter_strength: 60,
  filter_sharpness: 0,
  filter_type: 1,
  partitions: 0,
  segments: 4,
  pass: 1,
  show_compressed: 0,
  preprocessing: 0,
  autofilter: 0,
  partition_limit: 0,
  alpha_compression: 1,
  alpha_filtering: 1,
  alpha_quality: 100,
  lossless: 0,
  exact: 0,
  image_hint: 0,
  emulate_jpeg_size: 0,
  thread_level: 0,
  low_memory: 0,
  near_lossless: 100,
  use_delta_palette: 0,
  use_sharp_yuv: 0,
};

// Note: Current workaround until squoosh-cli can handle more files
const useSquoosh = async (statusText, cmd = '') => {
  const spinner = ora(statusText).start();
  const directory = cmd.split(' ').slice(-1)[0];

  // Get all jpg and png filenames from directory
  const filenames = fs
    .readdirSync(directory)
    // .filter((filename) => filename.endsWith('jpg'));
    .filter((filename) => filename.endsWith('jpg') || filename.endsWith('png'));

  let processOutput = '';
  const numOfCpus = os.cpus().length || 8;

  for (let i = 0; i < filenames.length; i = i + numOfCpus) {
    const files = filenames
      .slice(i, i + numOfCpus)
      .map((filename) => `${directory}/${filename}`);
    const { stderr } = await exec(
      `${cmd.split(' ').slice(0, -1).join(' ')} ${files.join(' ')}`,
    );
    processOutput = processOutput + stderr;
  }

  spinner.succeed();
  process.stdout(processOutput);
};

// const useSquoosh = async (statusText, cmd = '') => {
//   const spinner = ora(statusText).start();
//   const { stderr } = await exec(cmd);
//   spinner.succeed();
//   console.log(stderr);
// };

(async () => {
  const directory = path.join(process.cwd(), 'resources/images');

  await useSquoosh(
    'Generate optimized images',
    `squoosh-cli --output-dir public/assets/img --webp '${JSON.stringify(
      webpConfig,
    )}' ${directory}`,
  );

  await useSquoosh(
    'Generate optimized drawing thumbnails large',
    `squoosh-cli --output-dir public/assets/img --suffix _800 --resize '${JSON.stringify(
      {
        ...resizeConfig,
        width: 800,
      },
    )}' --webp '${JSON.stringify({
      ...webpConfig,
      quality: 75,
    })}' ${directory}`,
  );

  await useSquoosh(
    'Generate optimized drawing thumbnails medium',
    `squoosh-cli --output-dir public/assets/img --suffix _400 --resize '${JSON.stringify(
      {
        ...resizeConfig,
        width: 400,
      },
    )}' --webp '${JSON.stringify({
      ...webpConfig,
      quality: 75,
    })}' ${directory}`,
  );

  await useSquoosh(
    'Generate optimized drawing thumbnails small',
    `squoosh-cli --output-dir public/assets/img --suffix _200 --resize '${JSON.stringify(
      {
        ...resizeConfig,
        width: 200,
      },
    )}' --webp '${JSON.stringify({
      ...webpConfig,
      quality: 75,
    })}' ${directory}`,
  );
  process.exit();
})();

import Compressor from 'compressorjs';

export const getCompessedImage = (file, callback) =>
  new Compressor(file, {
    quality: 0.7,
    success(result) {
      callback(result);
    },
  });

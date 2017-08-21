const fs = require('fs');
const sharp = require('sharp');
const sizeOf = require('image-size');

fs.readdir(__dirname + '/public/img/photos/', (err, inputs) => {

  const items = inputs.filter(img => img.indexOf('.jpg') > 0 || img.indexOf('.JPG') > 0);

  console.log(items.length + ' pictures:');

  fs.writeFileSync('src/photos.json', JSON.stringify(items));

  function resize(i) {
    const img = items[i];

    if (!img) {
      console.log('done');
      return;
    }


    const outputThumb = __dirname + '/public/img/photos/thumb/' + img;
    const outputNormal = __dirname + '/public/img/photos/normal/' + img;
    const input = __dirname + '/public/img/photos/' + img;

    sharp(input).resize(200).toFile(outputThumb, () => {
      const info = sizeOf(input);
      const toNormalResize = sharp(input);
      if (info && info.width > 1800) {
        toNormalResize.resize(1800);
      }
      toNormalResize.toFile(outputNormal, () => {
        console.log(img);
        resize(i + 1);
      });
    });
  }

  resize(0);


});

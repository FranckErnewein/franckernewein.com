const fs = require('fs');
const sharp = require('sharp');

fs.readdir(__dirname + '/public/img/photos/', (err, inputs) => {

  const items = inputs.filter(img => img.indexOf('.jpg') > 0 || img.indexOf('.JPG') > 0);

  fs.writeFileSync('src/photos.json', JSON.stringify(items));
  items.forEach(img => {
    const output = __dirname + '/public/img/photos/thumb/' + img;
    const input = __dirname + '/public/img/photos/' + img;
    sharp(input).resize(300).toFile(output, () => {
      console.log(output);
    });
  });
});

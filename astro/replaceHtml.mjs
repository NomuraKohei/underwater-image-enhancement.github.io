import { readFile, writeFile } from 'fs';
import glob from 'glob';

glob('dist/**/*.html', function (er, files) {
  files.forEach(function (file) {
    readFile(file, 'utf8', function (err, data) {
      if (err) throw err;
      const relativePath = file.replace(/[^/]/g, '').replace(/\//g, '.');
      const result = data
        .replace(/\/~partytown\//g, `./~partytown/`)
        .replace(/href=\//g, `href=${relativePath}/`)
        .replace(/src=\//g, `src=${relativePath}/`)
        .replace(/(<a.*?href.*?\/)(?=\s>)/g, '$1index.html');
      writeFile(file, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  });
});

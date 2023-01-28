import { writeFileSync, readFileSync } from 'fs';
import glob from 'glob';

const replaceInHtmlFiles = () => {
  try {
    const files = glob.sync('dist/**/*.html');
    for (const file of files) {
      // htmlファイルの読み込み
      const data = readFileSync(file, 'utf8');
      // htmlの置かれているパスから相対(., ..)を算出
      const relativePath = file.replace(/[^/]/g, '').replace(/\//g, '.');
      // href, srcに指定されている絶対パスを置換
      const result = data
        .replace(/\/~partytown\//g, `./~partytown/`)
        .replace(/href=\//g, `href=${relativePath}/`)
        .replace(/src=\//g, `src=${relativePath}/`)
        .replace(/(<a.*?href.*?\/)(?=\s>)/g, '$1index.html');
      writeFileSync(file, result, 'utf8');
    }
  } catch (error) {
    console.log(error);
  }
};

replaceInHtmlFiles();

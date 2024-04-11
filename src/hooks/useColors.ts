import pinyin from 'pinyin';
import convert from 'color-convert';

import colors from '@/assets/colors.json';


const Colors = colors.map((set) => {
  set.RGB = convert.hex.rgb(set.hex);
  set.colors = set.colors.map((c) => {
    let heteronymIdx = c.name.indexOf('藏') > -1 ? 1 : 0;
    return {
      ...c,
      RGB: convert.hex.rgb(c.hex),
      CMYK: convert.hex.cmyk(c.hex),
      pinyin: pinyin(c.name, {
        heteronym: true, // 启用多音字模式
        segment: true, // 启用分词，以解决多音字问题。
      })
        .map((item) => {
          return item.length > 1 ? item[heteronymIdx] : item;
        })
        .join(' '),
    };
  });
  return set;
});

// console.log(Colors)
// let names = ""
// Colors.forEach(color => {
//   color.colors.forEach(colorAttr => {
//     names += colorAttr.name
//   })
// })
// console.log(names)

export {Colors};


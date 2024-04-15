// import pinyin from 'pinyin';
import convert from 'color-convert';
import { message } from 'antd';

import colors from '@/assets/colors.json';


const copyx = (str: string) => {
  navigator.clipboard.writeText(str)
  message.success({
    type: 'success',
    content: '颜色编码已复制',
    className: 'copyTip',
    duration: 0.9,
  });
}

const getContrastTextColor = (rgb: number[]) => {
  const [r, g, b] = rgb
  const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
}

const Colors = colors.map((set) => {
  set.RGB = convert.hex.rgb(set.hex);
  set.colors = set.colors.map((c) => {
    // let heteronymIdx = c.name.indexOf('藏') > -1 ? 1 : 0;
    return {
      ...c,
      RGB: convert.hex.rgb(c.hex),
      CMYK: convert.hex.cmyk(c.hex),
      // pinyin: pinyin(c.name, {
      //   heteronym: true, // 启用多音字模式
      //   segment: true, // 启用分词，以解决多音字问题。
      // })
      //   .map((item) => {
      //     return item.length > 1 ? item[heteronymIdx] : item;
      //   })
      //   .join(' '),
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

export {Colors, getContrastTextColor, copyx};


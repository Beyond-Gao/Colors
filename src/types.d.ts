// type ColorAttr = {
//   id: string,
//   hex: string,
//   name: string,
//   intro: string,
//   figure?: string,
//   RGB: number[],
//   CMYK: number[],
// }


type ColorJsonType = ColorGroup[]

type ColorGroupType = {
  RGB: number[],
  hex: string,
  id: number,
  name: string,
  colors: Color[]
}

type ColorType = {
  CMYK: number[],
  RGB: number[],
  figure: string,
  hex: string,
  id: number,
  intro: string,
  name: string,
  pinyin: string,
  img?: ImgType,
}

type ImgType = {
  path: string,
  host: string,
}

export {ColorType, ColorGroupType};
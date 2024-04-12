import React, { useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

import './css/ColorSelect.css'
import { ColorType } from '@/types'
import ColorCircle from './ColorCircle';
import { useColor } from '@/contexts/ColorContext';
import {getContrastTextColor} from '@/hooks/useColors'


interface Props {
  color: ColorType,
}

const ColorItem: React.FC<Props> = ({ color }) => {

  const colorEle = useRef(null);
  const { currColor, updateCurrColor } = useColor()

  useEffect(() => {

    setTimeout(() => {
      if (color.id === currColor.id) {
        scrollIntoView(colorEle.current!, {
          behavior: 'smooth',
          block: 'center',
          scrollMode: 'if-needed'
        });
      }
    },)

  }, [currColor])

  return (

    <div ref={colorEle} className={`colorItem ${color.id === currColor.id ? 'active' : ''}`} onClick={() => updateCurrColor(color.id.toString())} >
      {/* <div className="header" style={{backgroundColor: color.hex }}>

      </div> */}
      <div className="show" style={{ backgroundColor: color.hex }}>

        <div className="cmyk">
          <ColorCircle width={35} strokeWidth={12} color='#0d5661' percent={color.CMYK[0]} />
          <ColorCircle width={35} strokeWidth={12} color='#cb1b45' percent={color.CMYK[1]} />
          <ColorCircle width={35} strokeWidth={12} color='#ffc408' percent={color.CMYK[2]} />
          <ColorCircle width={35} strokeWidth={12} color='#1c1c1c' percent={color.CMYK[3]} />

          {/* <ColorCircle color='#1c1c1c' percent={currColor.CMYK[3]}  space={true} /> */}


        </div>

        <div className="desc"  style={{ color: getContrastTextColor(color.RGB) }}>{color.name}</div>

        {color.figure && <img className="figure" src={`/figure/${color.figure}`} alt="figure" />}
        {/* {color.figure && <img className="figure" src={require(`../assets/figure/${color.figure}`)} alt="figure" />} */}

      </div>
    </div>
  );
};

export default ColorItem;
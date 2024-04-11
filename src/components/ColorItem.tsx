import React, { useEffect, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';

import './css/ColorSelect.css'
import { ColorType } from '@/types'
import ColorCircle from './ColorCircle';
import { useColor } from '@/contexts/ColorContext';


interface Props {
  color: ColorType,
}

const ColorItem: React.FC<Props> = ({ color }) => {

  const colorEle = useRef(null);
  const { currColor, updateCurrColor } = useColor()

  useEffect(() => {

    if (color.id === currColor.id) {
      scrollIntoView(colorEle.current!, {
        behavior: 'smooth',
        block: 'center',
        scrollMode: 'if-needed'
      });
    }

  }, [currColor])

  return (

    <div ref={colorEle} className={`colorItem ${color.id === currColor.id ? 'active' : ''}`} onClick={() => updateCurrColor(color.id.toString())} >
      {/* <div className="header" style={{backgroundColor: color.hex }}>

      </div> */}
      <div className="show" style={{ backgroundColor: color.hex }}>

        <div className="cmyk">
          <ColorCircle color='#0d5661' process={color.CMYK[0]} />
          <ColorCircle color='#cb1b45' process={color.CMYK[1]} />
          <ColorCircle color='#ffc408' process={color.CMYK[2]} />
          <ColorCircle color='#1c1c1c' process={color.CMYK[3]} />
        </div>

        <div className="desc">{color.name}</div>

        {color.figure && <img className="figure" src={`/figure/${color.figure}`} alt="figure" />}
        {/* {color.figure && <img className="figure" src={require(`../assets/figure/${color.figure}`)} alt="figure" />} */}

      </div>
    </div>
  );
};

export default ColorItem;
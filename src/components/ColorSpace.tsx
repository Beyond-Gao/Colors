import { useColor } from "@/contexts/ColorContext";
import ColorCircle from "./ColorCircle";

import { Tooltip, message } from 'antd';

import './css/ColorSpace.css'
import { useEffect, useState } from "react";
import ICP from "@/components/ICP";

const ColorSpace = () => {

  // const [messageApi, contextHolder] = message.useMessage();

  const { currColor } = useColor()
  const [colorAttr, setColorAttr] = useState({
    cmyk: "cmyk(0,0,0,0)",
    rgb: "rgb(0,0,0)",
    hex: "#FFFFFF"
  })

  const copy = (str: string) => {
    navigator.clipboard.writeText(str)
    message.success({
      type: 'success',
      content: '颜色编码已复制',
      className: 'copyTip',
      duration: 0.9,
    });
  }

  useEffect(() => {
    // console.log(currColor)
    setColorAttr({
      cmyk: `cmyk(${currColor.CMYK[0]},${currColor.CMYK[1]},${currColor.CMYK[2]},${currColor.CMYK[3]})`,
      rgb: `rgb(${currColor.RGB[0]},${currColor.RGB[1]},${currColor.RGB[2]})`,
      hex: currColor.hex,
    })

  }, [currColor])
  // console.log(currColor)

  return (
    <div className="colorSpace">

      <div className="app">


        <div className="shadow">
          <div className="cmyk">

            <div className="item">
              <p>C</p>
              <ColorCircle color='#0d5661' process={currColor.CMYK[0]} width={70} r={30} space={true} />
            </div>
            <div className="item">
              <p>M</p>
              <ColorCircle color='#cb1b45' process={currColor.CMYK[1]} width={70} r={30} space={true} />
            </div>
            <div className="item">
              <p>Y</p>
              <ColorCircle color='#ffc408' process={currColor.CMYK[2]} width={70} r={30} space={true} />
            </div>
            <div className="item">
              <p>K</p>
              <ColorCircle color='#1c1c1c' process={currColor.CMYK[3]} width={70} r={30} space={true} />
            </div>

          </div>

          <div className="rgb">
            <div className="item">
              <p>R</p>
              <div className="numerical">
                {currColor.RGB[0]}
              </div>
            </div>
            <div className="item">
              <p>G</p>
              <div className="numerical">
                {currColor.RGB[1]}

              </div>
            </div>
            <div className="item">
              <p>B</p>
              <div className="numerical">
                {currColor.RGB[2]}
              </div>
            </div>
          </div>
        </div>


        <div className="hex">

          <Tooltip placement="bottom" title={colorAttr.cmyk}>
            <svg className="icon icon-cmyk" aria-hidden="true" onClick={() => copy(colorAttr.cmyk)}>
              <use xlinkHref="#icon-cmykmoshi"></use>
            </svg>
          </Tooltip>

          <Tooltip placement="bottom" title={colorAttr.rgb}>
            <svg className="icon icon-rgb" aria-hidden="true" onClick={() => copy(colorAttr.rgb)}>
              <use xlinkHref="#icon-a-yansesecai"></use>
            </svg>
          </Tooltip>

          <Tooltip placement="bottom" title={colorAttr.hex}>
            <svg className="icon icon-hex" aria-hidden="true" onClick={() => copy(colorAttr.hex)}>
              <use xlinkHref="#icon-ic_yansekapian"></use>
            </svg>
          </Tooltip>

        </div>

        <div className="icpContainer">
          <ICP />
        </div>
        
        
      </div>
    </div>
  );
};

export default ColorSpace;
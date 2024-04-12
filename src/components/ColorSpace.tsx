import { Tooltip } from 'antd';
import { useSpring, animated } from '@react-spring/web'

import './css/ColorSpace.css'
import { useMemo } from "react";
import ICP from "@/components/ICP";
import ColorCircle from "./ColorCircle";
import { copyx } from '@/hooks/useColors'
import useScreenWidth from '@/hooks/useScreen'
import { useColor } from "@/contexts/ColorContext";

const ColorSpace = () => {

  const { currColor, textColor } = useColor()

  const { r } = useSpring({
    from: { r: 0 },
    r: currColor.RGB[0],
    config: { duration: 1370, tension: 280, friction: 60 },
  });

  const { g } = useSpring({
    from: { g: 0 },
    g: currColor.RGB[1],
    config: { duration: 1370 },
  });

  const { b } = useSpring({
    from: { b: 0 },
    b: currColor.RGB[2],
    config: { duration: 1370 },
  });

  const colorAttr = useMemo(() => ({
    cmyk: `cmyk(${currColor.CMYK[0]},${currColor.CMYK[1]},${currColor.CMYK[2]},${currColor.CMYK[3]})`,
    rgb: `rgb(${currColor.RGB[0]},${currColor.RGB[1]},${currColor.RGB[2]})`,
    hex: currColor.hex,
  }), [currColor]);

  const { spaceWidth } = useScreenWidth()

  return (
    <div className="colorSpace">

      <div className="app">


        <div className="shadow">
          <div className="cmyk" style={{ color: textColor }}>

            {/* <div className="item"> */}
            <div className="item">
              <p>C</p>
              <ColorCircle color='#0d5661' bgc={currColor.RGB} width={spaceWidth} strokeWidth={6} percent={currColor.CMYK[0]} space={true} />
            </div>
            <div className="item">
              <p>M</p>
              <ColorCircle color='#cb1b45' bgc={currColor.RGB} width={spaceWidth} strokeWidth={6} percent={currColor.CMYK[1]} space={true} />
            </div>
            <div className="item">
              <p>Y</p>
              <ColorCircle color='#ffc408' bgc={currColor.RGB} width={spaceWidth} strokeWidth={6} percent={currColor.CMYK[2]} space={true} />
            </div>
            <div className="item">
              <p>K</p>
              <ColorCircle color='#1c1c1c' bgc={currColor.RGB} width={spaceWidth} strokeWidth={6} percent={currColor.CMYK[3]} space={true} />
            </div>

          </div>

          <div className="rgb" style={{ color: textColor }}>
            <div className="item">
              <p>R</p>
              <div className="numerical">
                {/* {currColor.RGB[0]} */}
                <animated.span>
                  {r.to(x => (x).toFixed(0))}
                </animated.span>

              </div>
            </div>
            <div className="item">
              <p>G</p>
              <div className="numerical">
                {/* {currColor.RGB[1]} */}
                <animated.span>
                  {g.to(x => (x).toFixed(0))}
                </animated.span>
              </div>
            </div>
            <div className="item">
              <p>B</p>
              <div className="numerical">
                {/* {currColor.RGB[2]} */}
                <animated.span>
                  {b.to(x => (x).toFixed(0))}
                </animated.span>
              </div>
            </div>
          </div>
        </div>


        <div className="hex">

          <Tooltip placement="bottom" title={colorAttr.cmyk}>
            <svg className="icon icon-cmyk" aria-hidden="true" onClick={() => copyx(colorAttr.cmyk)}>
              <use xlinkHref="#icon-cmykmoshi"></use>
            </svg>
          </Tooltip>

          <Tooltip placement="bottom" title={colorAttr.rgb}>
            <svg className="icon icon-rgb" aria-hidden="true" onClick={() => copyx(colorAttr.rgb)}>
              <use xlinkHref="#icon-a-yansesecai"></use>
            </svg>
          </Tooltip>

          <Tooltip placement="bottom" title={colorAttr.hex}>
            <svg className="icon icon-hex" aria-hidden="true" onClick={() => copyx(colorAttr.hex)}>
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
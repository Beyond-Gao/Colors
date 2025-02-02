import React from "react";
import { Progress } from 'antd';
// import { ConfigProvider } from 'antd';

// import { useColor } from '@/contexts/ColorContext';

interface Props {
  color: string,
  percent: number,
  width: number,
  strokeWidth: number,
  space?: boolean,
  // bgc?: number[],
}

const ColorCircle: React.FC<Props> = ({ color, percent, width, strokeWidth, space = false }) => {

  // const { textColor } = useColor()

  return (
    // <>
    //   {space ?
    //     <ConfigProvider
    //       theme={{
    //         components: {
    //           Progress: {
    //             circleTextColor: bgc ? textColor : "white",
    //             circleTextFontSize: "1.19rem",
    //           },
    //         },
    //       }}
    //     >
    //       <Progress showInfo={true} strokeWidth={strokeWidth} className="progressCircle" type="circle" percent={percent} format={(percent) => space ? percent : ''} strokeColor={color} success={{ strokeColor: "white", percent: 0 }} size={width} trailColor="#eee" />

    //     </ConfigProvider>
    //     :
    //     <Progress showInfo={false} strokeWidth={strokeWidth} className="progressCircle" type="circle" percent={percent} format={(percent) => space ? percent : ''} strokeColor={color} success={{ strokeColor: "white", percent: 0 }} size={width} trailColor="#eee" />
    //   }
    // </>
    <>
      {space ?
        <Progress showInfo={true} strokeWidth={strokeWidth} className="progressCircle" type="circle" percent={percent} format={(percent) => space ? percent : ''} strokeColor={color} success={{ strokeColor: "white", percent: 0 }} size={width} trailColor="#eee" />
        :
        <Progress showInfo={false} strokeWidth={strokeWidth} className="progressCircle" type="circle" percent={percent} format={(percent) => space ? percent : ''} strokeColor={color} success={{ strokeColor: "white", percent: 0 }} size={width} trailColor="#eee" />
      }
    </>

  );
};





export default ColorCircle;
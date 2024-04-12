import React from "react";

interface Props {
  color: string,
  process: number,
  space?:boolean,
  width?:number,
  r?:number
}

const ColorCircle: React.FC<Props> = ({ color, process, width=36, r=15, space=false }) => {

  const radius = width / 2

  const progress = process; // 进度为50%
  const circumference = 2 * Math.PI * radius; // 圆的周长
  const dashLength = (progress / 100) * circumference; // 实线的长度
  const gapLength = circumference - dashLength; // 间隙的长度


  return (
    <div className="peityContainer">

      <svg className="peity" height={width} width={width}>

      {/* 在SVG中，cx和cy属性是用来定义圆心位置的。具体来说：
      cx属性定义了圆心的水平位置，即圆心相对于SVG视口框左上角的水平偏移量。
      cy属性定义了圆心的垂直位置，即圆心相对于SVG视口框左上角的垂直偏移量。 */}

        <circle cx={radius} cy={radius} r={r} fill="none" stroke="#eee" strokeWidth="4"></circle>
        <circle cx={radius} cy={radius} r={r} fill="none" stroke={color} strokeWidth="4" strokeDasharray={`${dashLength} ${gapLength}`} transform={`rotate(-90 ${radius} ${radius})`}></circle>

        {space && (
        // <text x={radius} y={radius} style={{ fill: color }} className="percentage">
        <text x={radius} y={radius} className="percentage">
            {process}
        </text>
        )}
        
      </svg>
      {/* <p>12</p> */}
    </div>

  );
};

export default ColorCircle;
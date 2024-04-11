
import './css/ColorGroupSelect.css'
import { Colors } from '@/hooks/useColors'
import { useColor } from '@/contexts/ColorContext';

const ColorGroupSelect = () => {

  const { updateColorGroup } = useColor()

  return (
    <div className="colorGroupSelect">
      <div className="app">

        <div className="item">

          <div className="shadow">
            {Colors.map((color, i) => (
              <svg key={i} className="icon icon-color-group" aria-hidden="true" onClick={() => updateColorGroup(i.toString())}>
                <use xlinkHref="#icon-jiedianguanli" fill={color.hex}></use>
              </svg>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ColorGroupSelect;
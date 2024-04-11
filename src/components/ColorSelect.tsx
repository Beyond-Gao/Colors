import './css/ColorSelect.css'
import ColorItem from '@/components/ColorItem'
import { useColor } from '@/contexts/ColorContext';


const ColorSelect = () => {

  const { currColorGroup } = useColor()

  // useEffect(() => {
  //   console.log(currColorGroup)
  // }, [])

  return (
    <div className="colorSelect">
      <div className="app">
        <nav>
          {currColorGroup.colors.map((color) => (
            <ColorItem key={color.id} color={color} />
          ))}
        </nav>
      </div>

    </div>
  );
};

export default ColorSelect;
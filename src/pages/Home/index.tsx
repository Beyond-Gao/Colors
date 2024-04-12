import Bookmark from "@/components/Bookmark";
import ColorSelect from "@/components/ColorSelect";
import ColorSpace from "@/components/ColorSpace";

import './index.css'
import { useColor } from "@/contexts/ColorContext";
import ColorGroupSelect from "@/components/ColorGroupSelect";

const Home = () => {


  const { currColor } = useColor()

  return (
    <div className="home" style={{ backgroundColor: currColor.hex }}>
      <ColorSelect />
      <ColorSpace />
      <Bookmark />
      <ColorGroupSelect />

    </div>
  );
};

export default Home;
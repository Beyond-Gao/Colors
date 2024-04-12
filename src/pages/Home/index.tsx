import Bookmark from "@/components/Bookmark";
import ColorSelect from "@/components/ColorSelect";
import ColorSpace from "@/components/ColorSpace";

import './index.css'
import { useEffect, useRef } from "react";
import Loading from "@/components/Loading";
import ColorGroupSelect from "@/components/ColorGroupSelect";

const Home = () => {

  const loading: any = useRef(null)

  useEffect(() => {
    if (loading.current) {
      const timer = setTimeout(() => {
        loading.current.classList.add('loaded');
      }, 1700);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div className="home">
      {/* <div className="loading" ref={loading}><Spin /></div> */}
      <div className="loading" ref={loading}>
        <Loading />
      </div>

      <ColorSelect />
      <ColorSpace />
      <Bookmark />
      <ColorGroupSelect />

    </div>
  );
};

export default Home;
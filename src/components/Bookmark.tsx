import scrollIntoView from 'scroll-into-view-if-needed';
import { load } from 'jinrishici';

import { useColor } from "@/contexts/ColorContext";

import './css/Bookmark.css'
import { useEffect, useState } from 'react';

const Bookmark = () => {

  const { currColor } = useColor()
  // const [poetry, setPoetry] = useState({
  //   content: ["日出江花红胜火", "春来江水绿如蓝"],
  //   author: "白居易",
  //   title: "忆江南",
  // });
  const [poetry, setPoetry] = useState({
    content: ["", ""],
    author: "",
    title: "",
  });

  const resetView = () => {
    const ele = document.querySelector(".colorItem.active")
    if (ele) {
      scrollIntoView(ele, {
        behavior: 'smooth',
        block: 'center',
        scrollMode: 'if-needed'
      });
    }

  }

  useEffect(() => {

    let obj: any = null

    load((result: any) => {

      obj = {
        content: result.data.content,
        author: result.data.origin.author,
        title: result.data.origin.title,
      };

      obj.content = obj.content
        .replace(/[，|。|！|？|、]/g, ' ')
        .trim()
        .split(' ');

      setPoetry(obj)

    })

    setTimeout(()=>{
      if (!obj && !poetry.title) {
        setPoetry({
          content: ["日出江花红胜火", "春来江水绿如蓝"],
          author: "白居易",
          title: "忆江南",
        })
      }
    }, 799)

    

  }, [currColor])

  return (
    <div className="bookMark">
      <div className="app">


        <div className="name" onClick={resetView}>
          {currColor.name}
        </div>

        <div className="poem">

          <div className="verse">
            {poetry.content.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <div className="poemTitle">
            <div>{poetry.author} {poetry.title}</div>
            {/* <div>{poetry.title}</div> */}
          </div>

        </div>


      </div>
    </div>
  );
};

export default Bookmark;
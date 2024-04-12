
import { useMediaQuery } from 'react-responsive';

const useScreenWidth = () => {

  // 屏幕是否横向   portrait是竖向
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' })

  let device = null

  if (
    navigator.userAgent.match(/Mobi/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    device = 'mobile'
  } else{
    device = 'pc'
  }


  const maxWidth1200 = useMediaQuery({ maxWidth: 1200 });
  const maxWidth992 = useMediaQuery({ maxWidth: 992 });
  const maxWidth768 = useMediaQuery({ maxWidth: 768 });
  const maxWidth633 = useMediaQuery({ maxWidth: 633 });
  const maxWidth576 = useMediaQuery({ maxWidth: 576 });
  const maxWidth480 = useMediaQuery({ maxWidth: 480 });
  const maxWidth320 = useMediaQuery({ maxWidth: 320 });

  // 根据不同的屏幕宽度返回对应的值
  const calcSelect = () => {

    // if(isLandscape) {
    //   return 10
    // }

    let width = 35

    if (maxWidth320) {
      width = 7;
    } else if (maxWidth480) {
      width = 10;
    } else if (maxWidth576) {
      width = 15;
    } else if (maxWidth633) {
      width = 20;
    } else if (maxWidth768) {
      width = 25;
    } else if (maxWidth992) {
      width = 30;
    } else if (maxWidth1200) {
      width = 35;
    }

    if(isLandscape && device==="mobile" && width > 0){
      width = 17
    }

    return width; // 宽度大于1200时的默认值
  };

  const calcSpace = () => {
    if (maxWidth320) {
      return 20;
    } else if (maxWidth480) {
      return 27;
    } else if (maxWidth576) {
      return 33;
    } else if (maxWidth633) {
      return 40;
    } else if (maxWidth768) {
      return 47;
    } else if (maxWidth992) {
      return 55;
    } else if (maxWidth1200) {
      return 60;
    }
    return 60; // 宽度大于1200时的默认值
  };

  return { "selectWidth": calcSelect(), "spaceWidth": calcSpace() };
};

export default useScreenWidth;
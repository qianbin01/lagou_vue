export const getStyle = (element, attr, NumberMode = 'int') => {
  let target;
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop;
  } else if (element.currentStyle) {
    target = element.currentStyle[attr];
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr];
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode === 'float' ? parseFloat(target) : parseInt(target);
};
//判断是否为手机
export const isPhone = () => {
  return (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent));
};
const commonMethods = {
  getStyle: getStyle,
  isPhone: isPhone,
};
export default commonMethods;

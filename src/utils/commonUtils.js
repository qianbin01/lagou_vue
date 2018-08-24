// 存储localStorage
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
};
// 读取localStorage
const getStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
};
//删除localStorage
const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
};
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
  setStore: setStore,
  getStore: getStore,
  removeStore: removeStore,
};
export default commonMethods;

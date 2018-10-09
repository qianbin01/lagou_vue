import html2canvas from "html2canvas";
import JsPDF from 'jspdf'
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

export const generateResume = (el, name) => {
  html2canvas(el).then((canvas) => {
    let contentWidth = canvas.width;
    let contentHeight = canvas.height;
    //一页pdf显示html页面生成的canvas高度;
    let pageHeight = contentWidth / 592.28 * 841.89;
    //未生成pdf的html页面高度
    let leftHeight = contentHeight;
    //页面偏移
    let position = 0;
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    let imgWidth = 595.28;
    let imgHeight = 592.28 / contentWidth * contentHeight;
    let pageData = canvas.toDataURL('image/jpeg', 1.0);
    let pdf = new JsPDF('', 'pt', 'a4');
    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
    //当内容未超过pdf一页显示的范围，无需分页
    if (leftHeight < pageHeight) {
      pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        //arg3-->距离左边距;arg4-->距离上边距;arg5-->宽度;arg6-->高度
        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        //避免添加空白页
        if (leftHeight > 0) {
          //添加新页
          pdf.addPage();
        }
      }
    }
    pdf.save(`${name}.pdf`);
  });
};

const commonMethods = {
  getStyle: getStyle,
  isPhone: isPhone,
  setStore: setStore,
  getStore: getStore,
  removeStore: removeStore,
  generateResume: generateResume,
};
export default commonMethods;

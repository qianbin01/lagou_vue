import config from '../config'
import axios from 'axios'

axios.defaults.baseURL = config.BASE_API_HOST;//设置base_url
axios.defaults.headers['Accept'] = 'application/json, text/plain, */*';
axios.defaults.timeout = 2000;
axios.defaults.withCredentials = true;//允许携带cookies

/* 对象序列化
*
* @param {param} 对象数据
* @return 序列化后数据
*/
const changeParam = (param) => {
  if (param) {
    return JSON.stringify(param).replace(/:/g, '=').replace(/,/g, '&').replace(/{/g, '?').replace(/}/g, '').replace(/"/g, '');
  }
  else {
    return '';
  }
};

export default {
  /* get异步封装
  *
  * @param {url} 路径可包含请求数据，包含时,data传''
  * @param {res} 执行成功回调函数
  * @param {data} 对象化数据，如http://www.baidu.com?data=abc，可直接传{data:'abc'}
  * @return 无返回值
  */
  get: function (url, res, data = '') {
    axios.get(`${url}${changeParam(data)}`).then(res).catch(error => {
      console.log(error);
    })
  },
  /* post异步封装
  *
  * @param {url} 请求路径
  * @param {data} 对象化数据
  * @param {res} 执行成功回调函数
  * @return 无返回值
  */
  post: function (url, data, res) {
    axios.post(url, data).then(res).catch(error => {
      console.log(error)
    });
  }
}

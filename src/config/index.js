//配置文件
import cties from './cityData'

let config = {
    MOCK_ENABLE: true,
    BASE_API_HOST: '',
    FIRST_ENTER: localStorage.getItem('firstEnter'),
    GUESS_LIKE: [
      'web', 'java后端', '前端实习', 'html5前端', 'java实习', 'html5', '机器学习'
    ],
    HOT_COMPANY: [
      '字节跳动', '腾讯', '美团点评', '网易', '京东集团', '百度', '爱奇艺', '阿里巴巴'
    ],
    HOT_CITIES: cties.HOT_CITIES,
    ALL_CITIES: cties.ALL_CITIES,
  }
;
export default config

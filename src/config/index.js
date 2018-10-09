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
    TAGS: ['不限', '免费体检', '五险一金', '六险一金', '试用期上社保', '地铁周边', '免费下午茶', '加班补贴', '免费班车', '年底双薪', '定期团建', '前景好', '股票期权', 'mac办公'],
    HOT_CITIES: cties.HOT_CITIES,
    ALL_CITIES: cties.ALL_CITIES,
  }
;
export default config



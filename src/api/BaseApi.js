import recruit from './recruit'
import company from './company'
import topic from './topic'
import article from './article'
import news from './news'

//汇总各分类api，统一暴露方法出去
export default {
  recruit: recruit,
  company: company,
  topic: topic,
  article: article,
  location: location,
  news: news
}

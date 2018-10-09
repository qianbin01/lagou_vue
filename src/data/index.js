import Mock from 'mockjs';
import data from './mockData';

//mock数据加载
Mock.mock('/api/company/list', data.company);
Mock.mock('/api/topic/list', data.topic);
Mock.mock('/api/article/list', data.article);
Mock.mock('/api/recruit/list', data.recruit);
Mock.mock('/api/location/get', data.location);
Mock.mock('/api/news/list', data.news);
Mock.mock('/api/news/single?nid=1', data.newsSingle);


import Mock from 'mockjs';
import data from './mockData';

//mock数据加载
Mock.mock('/api/company', data.company);
Mock.mock('/api/topic', data.topic);
Mock.mock('/api/article', data.article);
Mock.mock('/api/recruit', data.recruit);

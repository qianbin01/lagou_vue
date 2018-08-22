import Mock from 'mockjs';
import data from './mockData';

//mock数据加载
Mock.mock('/api/company', data.company);

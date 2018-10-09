import http from './index'
//公司类api

export default {
  getCompanies: (res) => {
    http.get('/api/company/list', res);
  },
  getSingleCompany: (res, cid) => {
    http.get('/api/company/single', res, {cid: cid});
  },
}

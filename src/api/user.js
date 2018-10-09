import http from './index'

export default {
  register: (data, res) => {
    http.post('/api/user/register', data, res);
  },
  login: (data, res) => {
    http.post('/api/user/login', data, res);
  },
}

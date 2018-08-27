import http from './index'

const register = (data) => {
  http.post('/api/user/register', data, res => {
    console.log(res.data);
  });
};
const login = (data) => {
  http.post('/api/user/login', data, res => {
    console.log(res.data)
  })
};

export default {
  register: register,
  login: login,
}

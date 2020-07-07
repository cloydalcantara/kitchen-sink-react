import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000/api/v1';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).withCredentials().then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).withCredentials().then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).withCredentials().then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).withCredentials().then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const searchString = (count, search) => `page=${count}&searchString=${search}`

const Users = {
  all: page =>
    requests.get(`/user`),
  del: slug =>
    requests.del(`/user/${slug}`),
  get: (page, search) =>
    requests.get(`/user/${searchString(page, search)}`),
  update: article =>
    requests.put(`/user`, {  }),
  create: article =>
    requests.post('/user', { article })
};

export default {
  Users,
  Auth,
  setToken: _token => { token = _token; }
};

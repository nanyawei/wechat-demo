import { fetch } from './fetch.js';

// const AppKey = '3cface9cc873b6d0316b0495bb37875d';
const api = 'https://dev-api.quantibio.com';

export const getItem = (title = "") => {
  return fetch(api, 'oa/home', {
    page: 1,
    limit: 20
  }).then(res => console.log(res));
};

module.export = { getItem }

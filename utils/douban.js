import { fetch } from './fetch.js';

// const AppKey = '3cface9cc873b6d0316b0495bb37875d';
const api = 'https://douban-api.uieee.com/v2';


const getOnline = (method, params = {
  page: 1,
  limit: 20
  }) => {
  return fetch(api, 'onlines', method, {
    ...params
  }).then(res => console.log(res));
};

export const onlineService = {
  getOnline
};

const tops = (params = {start: 1, count: 250}) => {
  return fetch(api, 'movie/top250', "Get", params);
}

export const movieService = {
  tops
}





import axios from 'axios';
import { API } from '../configs/constants';

const performSearch = (params) => {
  return axios(API.BASE, {
    params: {
      api_key: API.KEY,
      s: params.query,
      weirdness: params.weirdness,
      rating: params.rating || 'pg',
      limit: params.limit || 1,
    }
  })
    .then(resp => resp.data)
    .catch(e => console.log(e));
};

export default performSearch;
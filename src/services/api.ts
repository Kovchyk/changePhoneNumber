import axios from 'axios';

const API_KEY = '51a153ec495b1c0e7cbaac171a82fa26';

axios.defaults.baseURL = 'https://api.countrylayer.com/v2';

export function getCountries() {
  return axios(`/all?access_key=${API_KEY}`).then((result: any) => result.data);
}

export default { getCountries };

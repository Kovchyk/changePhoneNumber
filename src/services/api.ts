import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export function getCountries() {
  return axios('/alpha/?fields=name,flags,idd,ccn3&codes=pol,blr,ukr');
}

export default { getCountries };

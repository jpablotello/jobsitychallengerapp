import axios from 'axios';
import Config from 'react-native-config';

const axiosDefaultConfig = axios.create({
  baseURL: Config.REACT_APP_API_URL,
  headers: {'Content-Type': 'application/json; charset=UTF-8'},
});

export default axiosDefaultConfig;

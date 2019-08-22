import axios from 'axios';

const port = 8888;
const host = 'localhost';

export const axiosInstance = axios.create({
  baseURL: `http://${host}:${port}`,
  headers: {
    'Content-Type': 'application/json',
    xsrfHeaderName: 'X-CRSF-Token'
  },
  responseType: 'json'
});

import axios from 'axios';

const axiosDefault = axios.create({
  baseURL: '/'
});

function getBaseUrl() {
  const getUrl = window.location;
  const baseUrl = getUrl.protocol + '//' + getUrl.host;
  return baseUrl;
}

export function setDbInfo(backend, dbInfo) {
  if (dbInfo.path !== undefined) {
    backend.defaults.baseURL = getBaseUrl() + '/' + dbInfo.path;
  }
}

export default axiosDefault;

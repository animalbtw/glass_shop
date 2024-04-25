import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});

instance.defaults.headers.post['Content-Type'] = 'application/application/json;charset=utf-8';

instance.interceptors.response.use(
  config => config,
  error => {
    const originalRequest = error.config
    if (error?.response?.data?.code === 11 && !originalRequest?._isRetry) {
      try {
        originalRequest._isRetry = true
      } catch (e) {
        return Promise.reject(e)
      }
    }
    return Promise.reject(error)
  }
)

export default instance;
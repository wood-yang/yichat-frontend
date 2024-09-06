import axios, {AxiosInstance} from "axios";
import router from "../../src/main"

const isDev = process.env.NODE_ENV === 'development';
const myAxios: AxiosInstance = axios.create({
    baseURL: isDev ? 'http://localhost:8080/api' : 'http://yichat.backend.wood-yang.cn/api',
});

myAxios.defaults.withCredentials = true; // 配置为true

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求啦', config)
    config.headers['token'] = localStorage.getItem("token");
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦', response)
    if (response?.data?.data?.token !== undefined) {
        let token = response?.data?.data?.token;
        localStorage.setItem("token", token);
    }
    // 未登录则跳转到登录页
    if (response?.data?.code === 40100) {
        const redirectUrl = window.location.href;
        router?.push(`/user/login`);
    }
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;

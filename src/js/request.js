import axios from 'axios';
import vue from 'vue';

// 创建 axios 实例
const service = axios.create({
    baseURL: '/api', // 请求的基础 URL
    timeout: 5000, // 请求超时时间，单位为毫秒
    headers: {
        'Content-Type': 'application/json'
    }
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // 例如，添加请求头
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers['Authorization'] = `Bearer ${token}`;
        // }
        // const newToken = response.headers.get('Authorization');
        // if (newToken) {
        //     localStorage.setItem('token', newToken.replace('Bearer ', ''));
        // }
        return response.json();
         return config;
    },
    error => {
        // 对请求错误做些什么
        console.error('请求出错:', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const res = response.data;
        // 假设接口返回的成功状态码为 200
        // if (res.code!== 200) {
        //     console.error('请求失败:', res.message);
        //     return Promise.reject(new Error(res.message || '请求失败'));
        // }
        if(res.code!=0){
            vue.prototype.$message.error(res.msg)
            return Promise.reject(res.msg || '请求失败');
        }
        return res;
    },
    error => {
        // 对响应错误做点什么
        console.error('响应出错:', error);
        // 可以根据不同的错误状态码进行不同的处理
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error('未授权，请重新登录');
                    // 可以在这里进行跳转到登录页面等操作
                    break;
                case 404:
                    console.error('请求的资源不存在');
                    break;
                case 500:
                    console.error('服务器内部错误');
                    break;
                default:
                    console.error('未知错误');
            }
        }
        return Promise.reject(error);
    }
);

export default service;
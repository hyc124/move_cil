import axios from "axios";
// import qs from 'qs';
import { Toast } from "vant";
import vue from "vue";
import RESTFUL_ERROR_CODE_MAP from './restful_error_code'

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://lotus.mgtx-tech-dev.mgtx.com.cn"
        : window.location.protocol + "//" + window.location.host;
vue.prototype.$axios = axios;
console.log(process.env)
const service = axios.create({
    baseURL: baseURL,
    timeout: 300000,
    headers: {
        // token: sessionStorage.getItem("token"),
        token:'VUdES2JtRnRaVDNvZzZIbmg1WG1tS1Y4ZFhObGNtbGtQVEUxTnpjMU5qVXdOakl5Zkd4dloyOTFkRjkwYVcxbFBURTJNRFUxT0RJNU16Y1VHREs',
        'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'
    },
    // baseURL: "http://192.168.8.27", //韩杰
});
// 请求拦截器
service.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token
        // token && (config.headers.Authorization = token)
        // return config
        config.data =JSON.stringify(config.data); //数据转化,也可以使用qs转换
        return config
    },
    error => {
        console.log('huhu')
        return Promise.error(error)
    })

// 响应拦截器
service.interceptors.response.use(
    response => {
        const code = response.data.code
        const msg = RESTFUL_ERROR_CODE_MAP[code];
        if (msg) {
            Toast(response.data.message || msg)
            return Promise.reject(new Error(response.data.message || msg))
        } else {
            return response
        }
    },
    // 服务器状态码不是200的情况
    error => {
        let code = error.message.replace(/[^0-9]/ig, "");
        // window.location.href = "/structure/Login/wxwork_login_href";
        Toast(RESTFUL_ERROR_CODE_MAP[code])
        setTimeout(() => {
            Toast.clear()
        }, 1000)
        return Promise.reject(error)
    }
)
//4.导入文件
export default service
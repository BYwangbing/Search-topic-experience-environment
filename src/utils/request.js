import axios from 'axios'

async function post(options) {
    let url = options.url
    let data = options.data
    return axios({
        method: 'post',
        url: url,
        // 利用 transformRequest 进行转换配置
        transformRequest: [
            function(oldData) {
                // console.log(oldData)
                let newStr = ''
                for (let item in oldData) {
                    newStr += item + '=' + JSON.stringify(oldData[item]) + '&'
                }
                newStr = newStr.slice(0, -1)
                return newStr
            },
        ],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data,
    })
}

async function uploadFile(options) {
    let url = options.url
    let data = options.data
    return axios({
        method: 'post',
        url: url,
        // 利用 transformRequest 进行转换配置
        transformRequest: [
            function(data) {
                return data
            },
        ],
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data,
    })
}

async function get(options) {
    let url = options.url
    let data = options.data
    return axios.get(url, {
        params: data,
    })
}

// 添加请求拦截器
axios.interceptors.request.use(
    function(config) {
        // 在发送请求之前做些什么
        return config
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    },
)

// 添加响应拦截器
axios.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        // eslint-disable-next-line no-unused-vars
        const { data } = response
        /*if (data.status !== 10000) {
            alert('接口错误')
        }*/
        return response.data
    },
    function(error) {
        // 对响应错误做点什么
        return Promise.reject(error)
    },
)

export default {
    post,
    uploadFile,
    get,
}

import axios from '../axios'

/* 
 * 系统注册模块
 */

// 注册
export const register = data => {
    return axios({
        url: 'register',
        method: 'post',
        data
    })
}
// 获取所有单位
export const deptAll = () => {
    return axios({
        url: 'dept/all',
        method: 'get'
    })
}
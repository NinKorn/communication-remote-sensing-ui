import axios from '../axios'

/* 
 * 系统登录模块
 */

// 登录
export const login = data => {
    return axios({
        url: 'login',
        method: 'post',
        data
    })
}
// 获取验证码
export const captcha = () => {
    return axios({
        url: 'captcha.jpg',
        method: 'get',
        responseType: 'arraybuffer'
    })
}

// 登出
// export const logout = () => {
//     return axios({
//         url: 'logout',
//         method: 'get'
//     })
// }

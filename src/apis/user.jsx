// 用户 相关的所有请求
import { request } from "../utils"

// 1.登录请求
export  function LoginApi(formdata){
  return request({
    url:'/authorizations',
    method:'POST',
    data:formdata
  })
}

// 2.y用户信息获取请求
export function UserinfoApi(){
  return request({
    url:'/user/profile',
    method:'GET',
  })
}
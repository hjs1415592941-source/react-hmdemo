// 用户 相关的所有请求
import { request } from "../utils"

// 1.获取频道列表
export function getChannelApi(){
  return request({
    url:'/channels',
    method:'GET',
  })
} 


// 2.提交文章表单


export function createAreticleApi(data){
  return request({
    url: '/mp/articles?draft=false',
    method: 'POST',
    data
  })
} 

// 获取文章列表

export function getAreticleApi(){
  return request({
    url: '/mp/articles',
    method: 'get',
  })
} 


// 删除文章列表

export function deleteAreticleApi(id){
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE',
  })
} 

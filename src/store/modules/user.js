// 和用户相关的状态管理

import { createSlice } from "@reduxjs/toolkit"
import { removeToken, request } from "../../utils"
import { getToken ,setToken as _setToken } from "../../utils"

const UserStore=createSlice({
  name:'user',
  // 数据状态
  initialState:{
    token:getToken() ||'',
    // 用户信息
    userinfo:{}
  },
  // 同步修改方法
  reducers:{
    setToken(state,action){
      state.token=action.payload
      _setToken(action.payload)
    },
    setUserinfo(state,action){
      state.userinfo=action.payload
    },
    removeUsers(state){
        state.token=''
        state.userinfo={}
        removeToken()
    }
  }
})

const {setToken,setUserinfo,removeUsers}=UserStore.actions
const Userreducers=UserStore.reducer

// 异步获取token
const fetchLogin=(loginform)=>{
  return async(dispatch)=>{
    const res= await request.post('/authorizations',loginform)
    
    
    // 存入store
    dispatch(setToken(res.data.token))
  }
}

// 异步获取用户信息
const fetchUserinfo=()=>{
  return async(dispatch)=>{
    const res= await request.get('/user/profile')
    // console.log(res.data)
    
    // 存入store
    dispatch(setUserinfo(res.data))
  }
}


export {setToken,fetchLogin,fetchUserinfo,removeUsers}
export default Userreducers
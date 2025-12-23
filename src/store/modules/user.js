// 和用户相关的状态管理

import { createSlice } from "@reduxjs/toolkit"
import { request } from "../../utils"

const UserStore=createSlice({
  name:'user',
  // 数据状态
  initialState:{
    token:localStorage.getItem('token_key') ||''
  },
  // 同步修改方法
  reducers:{
    setToken(state,action){
      state.token=action.payload
      localStorage.setItem('token_key',action.payload)
    }
  }
})

const {setToken}=UserStore.actions
const Userreducers=UserStore.reducer

// 异步获取token
const fetchLogin=(loginform)=>{
  return async(dispatch)=>{
    const res= await request.post('/authorizations',loginform)
    console.log(res.data)
    
    // 存入store
    dispatch(setToken(res.data.token))
  }
}


export {setToken,fetchLogin}
export default Userreducers
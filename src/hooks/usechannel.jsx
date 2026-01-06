// 封装获取频道列表的逻辑
import { useState,useEffect } from "react"
import {getChannelApi} from '../apis/article'
function useChannel(){
  const [channelList,setChannelList]=useState([])
    // 获取频道列表
    useEffect(()=>{
      const getChannnelList= async()=>{
        const res=await getChannelApi()
        setChannelList(res.data.channels)
      }
      getChannnelList()
    },[])
    return channelList
}

export {useChannel}
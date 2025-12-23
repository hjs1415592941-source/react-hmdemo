// 组合redux子模块 导出store

import { configureStore } from "@reduxjs/toolkit"
import Userreducers from "./modules/user"

const store= configureStore({
  reducer:Userreducers
})

export default store
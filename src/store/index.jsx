// 组合redux子模块 导出store

import { configureStore } from "@reduxjs/toolkit"
import Userreducers from "./modules/user.js"

const store= configureStore({
  reducer: {
    user: Userreducers,   // 关键：根 state 里会有 state.user
  },
})

export default store
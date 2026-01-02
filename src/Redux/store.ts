import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../Redux/userSlice"

export default configureStore({
  reducer: {
    userData: userSlice
  },
})
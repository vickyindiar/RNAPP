import {configureStore} from '@reduxjs/toolkit'
import layoutSlice from './slice/layoutSlice'
import userSlice from './slice/userSlice'

export const store = configureStore({
    reducer:{
        layout: layoutSlice,
        user: userSlice
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
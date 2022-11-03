import { configureStore } from '@reduxjs/toolkit'
import favlistReducer from './feature/favList/favlistSlice'

const store = configureStore({
  reducer: {
    favList: favlistReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
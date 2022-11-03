import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

import IMovieData from '@/types/movie'

interface ListState {
  values: IMovieData[]
}

const initialState: ListState = {
  values: []
}


export const favListSlice = createSlice({
  initialState,
  name: 'favlist',
  reducers: {
    addMovie: (state, action: PayloadAction<IMovieData>) => {
      // check if value has exist before add it
      if(!!state.values.filter(s => s.id == action.payload.id).length) {
        return;
      }
      state.values.push(action.payload)
    },
  }
})

export const { addMovie } = favListSlice.actions
export const selectMovieList = (state: RootState) => state.favList.values
export default favListSlice.reducer
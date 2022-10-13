import { createSlice } from "@reduxjs/toolkit"
import { sourcesData } from "../../assets/data"

const initialState: string[] = sourcesData

export const sourcesSlice = createSlice({
  initialState,
  name: 'sources',
  reducers: {
    
  }
})

export const sourcesReducer = sourcesSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import { citiesData } from "../../assets/data"

export type CitiesData = {
  id: string
  name: string
}

const initialState: CitiesData[] = citiesData

export const citiesSlice = createSlice({
  initialState,
  name: 'cities',
  reducers: {

  }
})

export const citiesReducer = citiesSlice.reducer
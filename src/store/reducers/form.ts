import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Option } from "../../components/Dropdown"
import { CitiesData } from "./cities"

type FormState = {
  isLoading: boolean
  isSuccess: boolean
  data: & FormData
}

export type FormData = {
  name?: string
  telephone?: string
  email?: string
  profileLink?: string
  city?: Option
  organization?: string
  fullName?: string
  source?: Option
}

export type FormReq = Omit<FormData, 'city' | 'source'> & {
  source: string
  city: CitiesData
}

const initialState: FormState = {
  isLoading: false,
  isSuccess: false,
  data: {
    telephone: '',
    name: '',
    email: '',
    profileLink: '',
    organization: '',
    fullName: ''
  }
}

type FetchSubmitPayload = {
  data: FormData
  callback: () => void
}

export const formFetchSubmit = createAsyncThunk(
  'form/submit',
  async (payload: FetchSubmitPayload) => {
    const res = new Promise<FormReq>((res) => {
      setTimeout(() => {
        res({
          ...payload.data,
          city: {
            id: payload.data.city?.value || '',
            name: payload.data.city?.label || '',
          },
          source: payload.data.source?.value || '',
        })
      }, 2000)
    })
    const data = await res
    payload.callback()
    return data
  }
)

export const formSlice = createSlice({
  initialState,
  name: 'form',
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(formFetchSubmit.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(formFetchSubmit.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        console.log(JSON.stringify(action.payload))
      })
  }
})

export const formReducer = formSlice.reducer
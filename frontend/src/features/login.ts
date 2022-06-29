import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
    id: undefined | string
}

const initialState: LoginState = {
    id: undefined
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }
})

export const { setLoginId } = loginSlice.actions
export default loginSlice.reducer
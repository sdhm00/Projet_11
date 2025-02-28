import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loged: false,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    signIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loged = true
    },
    signOut: (state) => {
      state.loged = false
    },
    userProfile: (state, action) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut, userProfile } = userSlice.actions

export default userSlice.reducer
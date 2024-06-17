import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const userData = action.payload
			localStorage.setItem('user', JSON.stringify(userData))
			return action.payload
		},
		getUserFromStorage: () => {
			const userData = localStorage.getItem('user')
			if (!userData) {
				return initialState
			}
			return JSON.parse(userData)
		},
		resetUser: () => {
			localStorage.removeItem('user')
			return initialState
		},
	},
})

export const { setUser, getUserFromStorage, resetUser } = userSlice.actions

export default userSlice.reducer
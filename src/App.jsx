import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import NavBar from './components/NavBar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUserFromStorage } from './redux/user/userSlice'

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		
		dispatch(getUserFromStorage())
	}, [])

	return (
		<>
			<NavBar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
			</Routes>
		</>
	)
}

export default App

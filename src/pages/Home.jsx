import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()
	// Get user data from Redux store
	const userData = useSelector((state) => state.user)
	

	useEffect(() => {
		
		if (!userData.token) {
			navigate('/auth')
			return
		}
	}, [])

	return <div className='user-data'>Welcome to my test app</div>
}

export default Home

import { Suspense, lazy, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const OTPLess = lazy(() => import('../components/OTPLess'))

const Auth = () => {
	const navigate = useNavigate()
	const userData = useSelector((state) => state.user)

	useEffect(() => {
		
		if (userData.token) {
			navigate('/')
			return
		}
	}, [userData])
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<OTPLess />
		</Suspense>
	)
}

export default Auth
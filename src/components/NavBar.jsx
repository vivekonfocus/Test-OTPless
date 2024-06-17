import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { resetUser } from '../redux/user/userSlice'

const NavBar = () => {
	const userData = useSelector((state) => state.user)
	const dispatch = useDispatch()
	return (
		<div className='nav-container'>
			<nav>
				<NavLink to='/'>Home</NavLink>
				{userData.token ? (
					<NavLink
						to='/auth'
						onClick={() => {
							dispatch(resetUser())
						}}>
						Logout
					</NavLink>
				) : (
					<NavLink to='/auth'>Signin/Signup</NavLink>
				)}
			</nav>
		</div>
	)
}

export default NavBar
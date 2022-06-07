import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx'

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from '../../../contexts/user.context'
import { CartContext } from '../../../contexts/cart.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../cart-icon/cart-icon.component'
import CartDropdown from '../../cart-dropdown/cart-dropdown.component'

const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>
                    {currentUser ?
                        (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (<NavLink to='/auth'>SIGN IN</NavLink>)}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}
export default Navigation

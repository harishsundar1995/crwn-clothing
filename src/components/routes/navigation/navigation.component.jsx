import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Navigation

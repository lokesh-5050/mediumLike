import React from 'react'
import { useDispatch } from 'react-redux'
import medium_logo from '../../assets/logo_medium.png'
import { handleGettingStarted } from '../../store/GetStartedSlice/GetStartedSlice'
import module from '../Navbar/Navbar.module.css'
const Navbar = () => {
    const Dispatch = useDispatch()
    const getStarted = () => {
        Dispatch(handleGettingStarted())
    }
    return (
        <>
            <nav className={module.nav}>
                <div className={`${module.left} ${module.nav}`}>
                    <img src={medium_logo} alt="logo" />
                    <h2>Medium</h2>
                </div>
                <div className={`${module.right} ${module.nav} `}>
                    <h5>Our Story</h5>
                    <h5>Membership</h5>
                    <h5>Write</h5>
                    <h5>Sign In</h5>
                    <div onClick={getStarted} style={{cursor:'pointer'}} className={`${module.curvy_box}`}>
                        <h5>Get Started</h5>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
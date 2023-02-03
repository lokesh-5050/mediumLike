import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LoggedInNavbar from '../Components/Navbar/LoggedInNavbar'
import Navbar from '../Components/Navbar/Navbar'
const SharedHomePage = () => {
    const isLoggedIn = useSelector((store) => store.getStarted.isLoggedIn)
    console.log(isLoggedIn + " isLoggedIn");
    return (
        <>
            <div className="nav" style={{ position: 'fixed', width: '100%', backgroundColor: '#FFC017', zIndex: '999' }}>
                {isLoggedIn ? <LoggedInNavbar/> : <Navbar />}
                
            </div>
            <div className="outlets" style={{ paddingTop: '6vmax' }}>
                <Outlet />
            </div>
        </>
    )
}

export default SharedHomePage
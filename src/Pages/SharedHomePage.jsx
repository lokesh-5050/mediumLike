import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const SharedHomePage = () => {
    return (
        <>
            <div className="nav" style={{ position: 'fixed' , width:'100%' , backgroundColor:'#FFC017', zIndex:'999' }}>
                <Navbar />
            </div>
            <div className="outlets" style={{paddingTop:'6vmax'}}>
                <Outlet />
            </div>
        </>
    )
}

export default SharedHomePage
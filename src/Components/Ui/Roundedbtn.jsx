import React from 'react'
import module from '../Navbar/Navbar.module.css'
const Roundedbtn = ({inRound , width}) => {
    return (
        <>
            <div className={`${module.curvy_box}`} style={{width:`${width}`}} >
                <h5>{inRound}</h5>
            </div>
        </>
    )
}

export default Roundedbtn
import React from 'react'
import module from '../Navbar/Navbar.module.css'
const Roundedbtn = ({inRound , width, borderRadius , bgColor  ,color , border}) => {
    return (
        <>
            <div className={`${module.curvy_box}`} style={{width:`${width}`,borderRadius:`${borderRadius}` , backgroundColor:`${bgColor}`, color:`${color}`, border:`${border}`}} >
                <h5>{inRound}</h5>
            </div>
        </>
    )
}

export default Roundedbtn
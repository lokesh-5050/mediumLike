import React from 'react'
import module from '../Navbar/Navbar.module.css'
const Roundedbtn = ({ inRound, width, borderRadius, bgColor, color, border, height, logo }) => {
    console.log(logo);
    return (
        <>
            <div className={`${module.curvy_box}`} style={{ width: `${width}`, padding: '1px 10px', borderRadius: `${borderRadius}`, backgroundColor: `${bgColor}`, color: `${color}`, border: `${border}`, height: `${height}`, fontSize: '1vw', display: 'flex', justifyContent: 'flex-start', gap: '1vw', }} >
                {logo !== undefined ? (logo) : ""}
                <h5 >{inRound}</h5>
            </div>
        </>
    )
}

export default Roundedbtn
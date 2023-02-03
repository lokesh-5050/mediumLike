import React from 'react'
import Roundedbtn from '../Ui/Roundedbtn'
import HeaderCss from '../Header/Header.module.css'
const Header = ({navColor}) => {
    return (
        <>
            <div className={`${HeaderCss.header}`} style={{backgroundColor:`${navColor}`}}>
                <div className={`${HeaderCss.lefty}`}>
                    <h1>Stay Curious</h1>
                    <h4>Discover stories, thinking, and expertise from writers on any topic.</h4>
                    <Roundedbtn width="14vw" height='3.2vw' inRound='Start Reading' />
                </div>
                <div className="animations_text">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </>
    )
}

export default Header
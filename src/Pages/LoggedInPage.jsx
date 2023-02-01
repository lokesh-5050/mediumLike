import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import LoggedInNavbar from '../Components/Navbar/LoggedInNavbar'
import module from './LoggedInPage.module.css'
import { IoAddOutline } from 'react-icons/io5'
import Articles from '../Components/Article/Article'
const LoggedInPage = () => {
  return (
    <>
      <div className={`${module.wrap}`}>
        <div className={`${module.left}`}>
          <div className={`${module.topBar}`}>
            <IoAddOutline />
            <h5>For You</h5>
            <h5>Following</h5>
          </div>
          <div className={`${module.articles}`}>
            <Articles coverWidth="90%" coverTop='4vmax' posterWidth="11vmax"  />
          </div>
        </div>
        <div className={`${module.right}`}></div>
      </div>
    </>
  )
}

export default LoggedInPage
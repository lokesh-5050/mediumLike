import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Article from '../Components/Article/Article'
import Header from '../Components/Header/Header'
import Authoptions from '../Components/Login/Authoptions'
import Trending from '../Components/TrendingSection/Trending'
const HomePage = ({ navColor }) => {
  const getStartedValue = useSelector((state)=> state.getStarted.value)
  return (
    <>
      {getStartedValue ? <Header /> && <Authoptions /> : <><Header /> <Trending /> <Article /></>}
      

    </>
  )
}

export default HomePage
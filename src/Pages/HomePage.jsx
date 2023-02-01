import React from 'react'
import Article from '../Components/Article/Article'
import Header from '../Components/Header/Header'
import Authoptions from '../Components/Login/Authoptions'
import Trending from '../Components/TrendingSection/Trending'

const HomePage = ({navColor}) => {
  return (
    <>
        <Header />
        <Trending/>
        <Article/>
        <Authoptions/>
    </>
  )
}

export default HomePage
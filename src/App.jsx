import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Trending from './Components/TrendingSection/Trending'
import Article from './Components/Article/Article'
const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Trending/>
      <Article/>
    </>
  )
}

export default App
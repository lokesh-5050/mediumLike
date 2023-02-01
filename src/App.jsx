import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Trending from './Components/TrendingSection/Trending'
import Article from './Components/Article/Article'
import { Route, Routes } from 'react-router-dom'
import SharedHomePage from './Pages/SharedHomePage'
import HomePage from './Pages/HomePage'
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedHomePage/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
      {/* <Navbar/>
      <Header/>
      <Trending/>
      <Article/> */}
    </>
  )
}

export default App
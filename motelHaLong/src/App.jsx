import React from "react";
import Navbar from "./client/Pages/common/Navbar/Navbar";
import Home from "./client/Pages/feature/Home/home"
import {Routes,Route} from 'react-router-dom'
import About from './client/Pages/feature/About/about'
const App =() =>{
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}
export default App;
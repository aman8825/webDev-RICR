import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/Products'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Home'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
       <Route path='/product' element={<Products/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  
  )
}

export default App

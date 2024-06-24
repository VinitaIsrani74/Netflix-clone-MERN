import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Netflix from './Pages/Netflix/Netflix'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Netflix />}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/signup' element={<Signup />}/>       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
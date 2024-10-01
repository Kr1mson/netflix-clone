import React, { useEffect } from 'react'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { Route,Routes, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
const App = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        navigate('/');
      }else{
        navigate('/login');
      }
    })
  },[]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>

      </Routes>
    </div>
  )
}

export default App

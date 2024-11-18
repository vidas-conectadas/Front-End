import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import History from './assets/pages/History'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Register from './assets/pages/Register'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/History' element={<History/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App

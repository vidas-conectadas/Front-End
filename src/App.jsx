import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import History from './assets/pages/History'
import Home from './assets/pages/Home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/History' element={<History/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './assets/pages/Register'
import Home from './assets/pages/Home'
import Tabela from './assets/pages/Tabela'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/tabela' element={<Tabela />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App

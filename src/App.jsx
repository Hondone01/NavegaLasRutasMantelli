import './App.css'
import ItemListContainer from './pages/ItemListContainer'
import Navbar from './components/Header/Navbar'
import { Route, Routes } from 'react-router'
import Contact from './pages/Contact'
import ItemDetailContainer from './pages/ItemDetailContainer'
import { useState} from 'react'
import Home from './pages/Home'

function App() {
  const [name, setName] = useState('')
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/products/:category' element={<ItemListContainer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>Page not Found - Error 404</h1>} />
      </Routes>
      </main>
    </>
  )
}

export default App

import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import { Favorite } from './Pages/Favorite'
import { Read } from './Pages/Read'
import { Profile } from './Pages/Profile'

function App() {


  return (
    <>
    <nav className = "navbar">
      <Link to="/">All Books || </Link>
      <Link to="/fav">Favorite || </Link>
      <Link to="/read">Read || </Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/fav" element={<Favorite/>}/>
      <Route path="/read" element={<Read/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default App

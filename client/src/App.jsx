import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/footer/Foooter'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AllUsers from './Components/users/Users'
import './App.css'


function App() {

  return (
    <>
      <div className="main-container yoga-template">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie-reviews' element={<Reviews />}/>
          <Route path='/users' element={<AllUsers />}/>
        </Routes>

        <Footer />
      </div>

    </>
  )
}

export default App

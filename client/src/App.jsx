import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/footer/Foooter'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AllUsers from './Components/users/Users'
import './App.css'
import Login from './Components/login/Login'
import Register from './Components/register/Register'
import CreateReview from './Components/createReview/CreateReview'
import ReviewDetails from './Components/detailsReview/ReviewDetails'
import NotFound from './Components/notFound/NotFound'
import * as userService from './services/userService'
import { useState } from 'react'


function App() {

  const [authState, setAuthState] = useState(() => {
    localStorage.removeItem('token')
    return {}
  })
  const navigate = useNavigate()

  const registerHandler = async (registerState) => {
    const category = Object.entries(registerState).filter(x => x[1] == true).map(x => x[0]).join(', ')

    const data = await userService.register( registerState.email, registerState.password, registerState.username, category)
    console.log(data)
    setAuthState(data)
    localStorage.setItem('token', data.accessToken)
    navigate('/')
  }

  return (
    <>
      <div className="main-container yoga-template">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie-reviews' element={<Reviews />}/>
          <Route path='/movie-reviews/:id/details' element={<ReviewDetails />}/>
          <Route path='/create-review' element={<CreateReview />}/>
          <Route path='/users' element={<AllUsers />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register registerHandler={registerHandler} />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>

        <Footer />
      </div>

    </>
  )
}

export default App

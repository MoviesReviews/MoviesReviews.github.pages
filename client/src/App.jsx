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
import { AuthContext } from './contexts/authContext'
import { Logout } from './Components/logout/Logout'


function App() {

  const [authState, setAuthState] = useState(() => {
    localStorage.removeItem('token')
    return {}
  })
  const navigate = useNavigate()

  const registerHandler = async (registerState) => {
    const category = Object.entries(registerState).filter(x => x[1] == true).map(x => x[0]).join(', ')

    const data = await userService.register(registerState.email, registerState.password, registerState.username, category)
    setAuthState(data)
    localStorage.setItem('token', data.accessToken)
    navigate('/')
  }

  const loginHandler = async (loginState) => {
    const data = await userService.login(loginState.email, loginState.password)
    setAuthState(data)
    localStorage.setItem('token', data.accessToken)
    navigate('/')
  }

  const logoutHandler = async() => {
    await userService.logout()
    setAuthState({})
    localStorage.removeItem('token')
    navigate('/')
  }

  const authContext = {
    email: authState.email,
    username: authState.username,
    token: authState.accessToken,
    _id: authState._id,
    isAuthenticated: !!authState.email
  }

  return (
    <>
      <div className="main-container yoga-template">
        <AuthContext.Provider value={authContext}>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie-reviews' element={<Reviews />} />
            <Route path='/movie-reviews/:id/details' element={<ReviewDetails />} />
            <Route path='/create-review' element={<CreateReview />} />
            <Route path='/users' element={<AllUsers />} />
            <Route path='/login' element={<Login loginHandler={loginHandler} />} />
            <Route path='/register' element={<Register registerHandler={registerHandler} />} />
            <Route path='/logout' element={<Logout logoutHandler={logoutHandler} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <Footer />
        </AuthContext.Provider>
      </div>

    </>
  )
}

export default App

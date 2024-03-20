import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/footer/Foooter'
import Home from './Components/home/Home'
import Navbar from './Components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/login/Login'
import Register from './Components/register/Register'
import CreateReview from './Components/createReview/CreateReview'
import ReviewDetails from './Components/detailsReview/ReviewDetails'
import NotFound from './Components/notFound/NotFound'
import AuthProvider from './contexts/authContext'
import { Logout } from './Components/logout/Logout'
import EditReview from './Components/editReview/editReview'
import AuthGuard from './guards/AuthGuard'
import NotAuthorized from './Components/unauthorized/NotAuthorized'
import CreatedAlertProvider from './contexts/alertContext'
import Profile from './Components/profile/Profile'


function App() {
  
  return (
    <>
      <div className="main-container yoga-template">
        <AuthProvider>
          <CreatedAlertProvider>
            <Navbar />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie-reviews' element={<Reviews />} />

              <Route path='/movie-reviews/:id/details' element={<ReviewDetails />} />
              <Route element={<AuthGuard />}>
                <Route path='/create-review' element={<CreateReview />} />
                <Route path='/movie-reviews/:id/edit' element={<EditReview />} />
              </Route>
              <Route path='/unauthorized' element={<NotAuthorized />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
          </CreatedAlertProvider>
        </AuthProvider>
      </div>

    </>
  )
}

export default App

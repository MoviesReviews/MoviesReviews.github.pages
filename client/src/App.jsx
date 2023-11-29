import Banner from './Components/banner/Banner'
import Movies from './Components/movies/Movies'
import RelevantReviews from './Components/relevantReviews/RelevantReviews'
import ActiveUsers from './Components/activeUsers/ActiveUsers'
import Footer from './Components/footer/Foooter'
import Navbar from './Components/banner/navbar/Navbar'

Movies
function App() {

  return (
    <>
      <div className="main-container yoga-template">
        <Navbar/>
        
        <Banner />

        <Movies />

        <RelevantReviews />

        <ActiveUsers />

        <Footer />
      </div>

    </>
  )
}

export default App

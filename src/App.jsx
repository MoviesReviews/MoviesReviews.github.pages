import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Foooter'
import JoinUs from './Components/JoinUs'
import LastReview from './Components/LastReview'
import Menu from './Components/Menu'
import RelevantUsers from './Components/MostRelevantUsers'

function App() {

  return (
    <>
      <div className="main-container yoga-template">
        <Banner/>

        <Menu/>

        <LastReview/>

        <RelevantUsers/>

        <JoinUs/>

        <Footer/>
      </div>

    </>
  )
}

export default App

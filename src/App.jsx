import './App.css'
import Header from './components/HeaderComponent/Header'
import Carousel from './components/CarouselComponent/Carousel'
import ContentHomeComponent from './components/ContentHomeComponent/ContentHome'
import Footer from './components/FooterComponent/Footer'


function App() {

  return (
    <div id='mainDiv'>
      <Header/>
      <Carousel/>
      <ContentHomeComponent/>
      <Footer/>
    </div>
  )
}

export default App

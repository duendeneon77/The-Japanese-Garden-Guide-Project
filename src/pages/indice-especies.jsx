
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
function Especies() {

  return (
    <div id='mainDiv'>
      <Header/>
      <ContentComponent>
        <h1>Especies</h1>
      </ContentComponent>
      
      <Footer/>
    </div>
  )
}

export default Especies
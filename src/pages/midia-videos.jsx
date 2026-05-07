import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
function MidiaVideos() {

  return (
    <div id='mainDiv'>
      
      <Header/>
      
      <ContentComponent>
        <h1>Vídeos</h1>
      </ContentComponent>
      <Footer/>
    </div>
  )
}

export default MidiaVideos
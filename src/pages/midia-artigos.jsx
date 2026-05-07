import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
function MidiaArquivos() {

  return (
    <div id='mainDiv'>
      
      <Header/>
      
      <ContentComponent>
        <h1>Artigos</h1>
      </ContentComponent>
      <Footer/>
    </div>
  )
}

export default MidiaArquivos
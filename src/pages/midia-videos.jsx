import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import videos from '../../public/videos/videos.json'
import './pages.css'
import VideoDiv from '../components/ContentComponent/Videos/VideoDiv/VideoDiv'
import BackHomeButton from '../components/BackHomeButton/BackHomeButton'

function MidiaVideos() {

  return (
    <div id='mainDiv'>

      <Header/>

      <ContentComponent>

        <h1>Vídeos</h1>

        {videos.map((video, index) => (

          <VideoDiv
            key={index}
            titulo={video.titulo}
            video={video.embed}
            descricao={video.description}
          />

        ))}

         <BackHomeButton/>
      </ContentComponent>
      

      <Footer/>

    </div>
  )
}

export default MidiaVideos
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
import articles from '../../public/articles/artigos.json'
import ArticleCard from '../components/ContentComponent/Artigos/ArticleCard/ArticleCard'
import BackHomeButton from '../components/BackHomeButton/BackHomeButton'
function MidiaArtigos() {

  return (
    <div id='mainDiv'>
      
      <Header/>
      <ContentComponent>
        <h1>Artigos</h1>
        {
          articles.map((item)=>{
            return(
            <ArticleCard
            key={item.id}
            artigo={item}
            />
            )
          })
        }
         <div style={{ marginTop: "3rem", marginBottom: "3rem", backgroundColor: "transparent"}}>
  <BackHomeButton /></div>
      </ContentComponent>
      <Footer/>
    </div>
  )
}

export default MidiaArtigos
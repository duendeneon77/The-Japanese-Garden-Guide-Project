import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
import articles from '../../public/articles/artigos.json'
import ArticleCard from '../components/ContentComponent/Artigos/ArticleCard/ArticleCard'
function MidiaArquivos() {

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
      </ContentComponent>
      <Footer/>
    </div>
  )
}

export default MidiaArquivos
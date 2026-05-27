import Header from "../../components/HeaderComponent/Header"
import ContentComponent from "../../components/ContentComponent/Content"
import Footer from "../../components/FooterComponent/Footer"
import '../form.css'

function AddArticle() {

  return (
    <div id='mainDiv'>
      <Header />

      <ContentComponent>
        <form
          className='userForms'
          onSubmit={(e) => e.preventDefault()}
        >

          <h3 id="addArticleTitle">Postagem de Novo Artigo</h3>

          <p>Digite abaixo o nome do artigo</p>
          <input
            type="text"
            id='inputArticleName'
            placeholder='digite o nome do artigo aqui'
          />

          <p>Abaixo, coloque o link da imagem principal do Artigo</p>

          <input
            type="text"
            id='inputMainImage'
            placeholder='cole aqui o link da imagem'
          />

          <p>Escreva seu artigo abaixo:</p>
          <textarea
            id="specieText"
            placeholder="Escreva seu artigo aqui"
          ></textarea>

          <button type="submit" id="post">Postar</button>

        </form>
      </ContentComponent>

      <Footer />
    </div>
  )
}

export default AddArticle
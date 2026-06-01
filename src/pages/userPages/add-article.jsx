import Header from "../../components/HeaderComponent/Header"
import ContentComponent from "../../components/ContentComponent/Content"
import Footer from "../../components/FooterComponent/Footer"
import BackUserButton from "../../components/BackUserPageButton/BackUserPageButton"

import { useNavigate } from "react-router-dom"

import '../form.css'

function AddArticle() {

  const navigate = useNavigate()

  function handleCancel() {

    navigate("/usersection")
  }

  return (

    <div id='mainDiv'>

      <Header />

      <ContentComponent>

        <form
          className='userForms'
          onSubmit={(e) => e.preventDefault()}
        >

          <h3 id="addArticleTitle">
            Postagem de Novo Artigo
          </h3>

          <p>
            Digite abaixo o nome do artigo
          </p>

          <input
            type="text"
            id='inputArticleName'
            placeholder='digite o nome do artigo aqui'
          />

          <p>
            Abaixo, coloque o link da imagem principal do Artigo
          </p>

          <input
            type="text"
            id='inputMainImage'
            placeholder='cole aqui o link da imagem'
          />

          <p>
            Escreva seu artigo abaixo:
          </p>

          <textarea
            id="specieText"
            placeholder="Escreva seu artigo aqui"
          ></textarea>

          <div className="editArticleButtonDiv">

            <button
              type="submit"
              id="post"
            >
              Postar
            </button>

            <button
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </button>

          </div>

        </form>

        <BackUserButton/>

      </ContentComponent>


      <Footer />

    </div>
  )
}

export default AddArticle
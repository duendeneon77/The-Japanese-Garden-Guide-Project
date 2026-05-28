import Header from "../../components/HeaderComponent/Header"
import ContentComponent from "../../components/ContentComponent/Content"
import Footer from "../../components/FooterComponent/Footer"

import { useNavigate } from "react-router-dom"

import '../form.css'

function AddVideo() {

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
            Postagem de Novo Video
          </h3>

          <p>
            Digite abaixo um título para ilustrar o vídeo abaixo
          </p>

          <input
            type="text"
            id='inputVideoName'
            placeholder='digite o titulo aqui'
          />

          <p>
            Abaixo, coloque o embed/código do video
          </p>

          <input
            type="text"
            id='inputVideoCode'
            placeholder='cole aqui o código do vídeo'
          />

          <p>
            Escreva aqui uma breve descrição para o conteúdo do vídeo:
          </p>

          <textarea
            id="videoText"
            placeholder="Escreva a descrição aqui"
          ></textarea>

          <div className="editVideoButtonDiv">

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

      </ContentComponent>

      <Footer />

    </div>
  )
}

export default AddVideo
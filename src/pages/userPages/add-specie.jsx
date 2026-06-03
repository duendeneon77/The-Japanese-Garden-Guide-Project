import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function AddSpecie() {

  const navigate = useNavigate();

  const [galleryImages, setGalleryImages] = useState([]);

  function handleCancel() {
    navigate("/usersection");
  }

  function addImageInput() {
    if (galleryImages.length >= 15) return;

    setGalleryImages([
      ...galleryImages,
      {
        id: Date.now() + Math.random(),
        value: ""
      }
    ]);
  }

  function removeImageInput(id) {
    setGalleryImages(
      galleryImages.filter(item => item.id !== id)
    );
  }

  function updateImageInput(id, value) {
    setGalleryImages(
      galleryImages.map(item =>
        item.id === id
          ? { ...item, value }
          : item
      )
    );
  }

  return (

    <div id='mainDiv'>

      <Header />

      <ContentComponent>

        <form
          className='userForms'
          onSubmit={(e) => e.preventDefault()}
        >

          <h3 id="specieFormTitle">
            Cadastro de nova espécie
          </h3>

          <p>
            Digite abaixo o nome vulgar da espécie.
          </p>

          <input
            type="text"
            id='inputSpecieName'
            placeholder='digite o nome da especie aqui'
          />

          <p>
            Digite abaixo o nome científico da espécie
          </p>

          <input
            type="text"
            id='inputCientificName'
            placeholder='digite aqui o nome científico'
          />

          <p>
            Abaixo, coloque o link da imagem ilustrativa da espécie
          </p>

          <input
            type="text"
            id='inputMainImage'
            placeholder='cole aqui o link da imagem'
          />

          <div className="toDivide">

            <p>
              Selecione o porte da espécie
            </p>

            <div className="divRadio">

              <label>
                <input type="radio" name="porte" value="grande" />
                Grande
              </label>

              <label>
                <input type="radio" name="porte" value="medio" />
                Médio
              </label>

              <label>
                <input type="radio" name="porte" value="pequeno" />
                Pequeno
              </label>

              <label>
                <input type="radio" name="porte" value="medio/grande" />
                Médio/Grande
              </label>

              <label>
                <input type="radio" name="porte" value="medio/pequeno" />
                Médio/Pequeno
              </label>

            </div>

          </div>

          <div className="toDivide">

            <p>
              Selecione a velocidade de crescimento
            </p>

            <div className="divRadio">

              <label>
                <input type="radio" name="crescimento" value="rapido" />
                Rápido
              </label>

              <label>
                <input type="radio" name="crescimento" value="lento" />
                Lento
              </label>

              <label>
                <input type="radio" name="crescimento" value="medio" />
                Médio
              </label>

              <label>
                <input type="radio" name="crescimento" value="medio/rapido" />
                Médio/Rápido
              </label>

              <label>
                <input type="radio" name="crescimento" value="lento/medio" />
                Lento/Médio
              </label>

            </div>

          </div>

          <div className="toDivide">

            <p>
              Selecione a classificação da espécie
            </p>

            <div className="divRadio">

              <label>
                <input type="radio" name="classificacao" value="caducifolia" />
                Caducifólia
              </label>

              <label>
                <input type="radio" name="classificacao" value="perenifolia" />
                Perenifólia
              </label>

              <label>
                <input type="radio" name="classificacao" value="conifera" />
                Conífera
              </label>

            </div>

          </div>

          <div className="toDivide">

            <p>
              Selecione as possíveis cores
            </p>

            <div className="divRadio">

              <label>
                <input type="checkbox" value="branca" />
                Branca
              </label>

              <label>
                <input type="checkbox" value="cores quentes" />
                Cores quentes
              </label>

              <label>
                <input type="checkbox" value="cores frias" />
                Cores frias
              </label>

              <label>
                <input type="checkbox" value="verde claro" />
                Verde claro
              </label>

              <label>
                <input type="checkbox" value="verde escuro" />
                Verde escuro
              </label>

              <label>
                <input type="checkbox" value="verde" />
                Verde
              </label>

              <label>
                <input type="checkbox" value="varias cores" />
                Várias cores
              </label>

            </div>

          </div>

          <p>
            Informações sobre a espécie
          </p>

          <textarea
            id="specieText"
            placeholder="Escreva aqui uma boa quantidade de informações sobre a espécie"
          ></textarea>

          <p>
            Galeria de imagens
          </p>

          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="galleryInputContainer"
            >
              <input
                type="text"
                placeholder="cole aqui o link da imagem"
                value={image.value}
                onChange={(e) =>
                  updateImageInput(
                    image.id,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="deleteImageInput"
                onClick={() =>
                  removeImageInput(image.id)
                }
              >
                X
              </button>
            </div>
          ))}

          <button
            type="button"
            id="more"
            onClick={addImageInput}
          >
            +
          </button>

          <div className="editSpecieButtonDiv">

            <div className="editSpecieButtonSubdiv">

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

          </div>

        </form>

        <BackUserPageButton />

      </ContentComponent>

      <Footer />

    </div>
  );
}

export default AddSpecie;
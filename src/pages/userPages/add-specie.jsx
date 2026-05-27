import Header from "../../components/HeaderComponent/Header"
import ContentComponent from "../../components/ContentComponent/Content"
import Footer from "../../components/FooterComponent/Footer"
import '../form.css'

function AddSpecie() {

  return (
    <div id='mainDiv'>
      <Header />

      <ContentComponent>
        <form
          className='userForms'
          onSubmit={(e) => e.preventDefault()}
        >

          <h3 id="specieFormTitle">Cadastro de nova espécie</h3>

          <p>Digite abaixo o nome vulgar da espécie.</p>
          <input
            type="text"
            id='inputSpecieName'
            placeholder='digite o nome da especie aqui'
          />

          <p>Digite abaixo o nome científico da espécie</p>
          <input
            type="text"
            id='inputCientificName'
            placeholder='digite aqui o nome científico'
          />

          <p>Abaixo, coloque o link da imagem ilustrativa da espécie</p>
          <input
            type="text"
            id='inputMainImage'
            placeholder='cole aqui o link da imagem'
          />

        <div className="toDivide">
          <p>Selecione o porte da espécie</p>
          <div className="divRadio">

            <label><input type="radio" name="porte" value="grande" /> Grande</label>
            <label><input type="radio" name="porte" value="medio" /> Médio</label>
            <label><input type="radio" name="porte" value="pequeno" /> Pequeno</label>
            <label><input type="radio" name="porte" value="medio/grande" /> Médio/Grande</label>
            <label><input type="radio" name="porte" value="medio/pequeno" /> Médio/Pequeno</label>

          </div>
          </div>

          <div className="toDivide">
          <p>Selecione a velocidade de crescimento</p>
          <div className="divRadio">

            <label><input type="radio" name="crescimento" value="rapido" /> Rápido</label>
            <label><input type="radio" name="crescimento" value="lento" /> Lento</label>
            <label><input type="radio" name="crescimento" value="medio" /> Médio</label>
            <label><input type="radio" name="crescimento" value="medio/rapido" /> Médio/Rápido</label>
            <label><input type="radio" name="crescimento" value="lento/medio" /> Lento/Médio</label>

          </div>
          </div>

        <div className="toDivide">
          <p>Selecione a classificação da espécie</p>
          <div className="divRadio">

            <label><input type="radio" name="classificacao" value="caducifolia" /> Caducifólia</label>
            <label><input type="radio" name="classificacao" value="perenifolia" /> Perenifólia</label>
            <label><input type="radio" name="classificacao" value="conifera" /> Conífera</label>

          </div>
          </div>

          <div className="toDivide">
          <p>Selecione as possíveis cores</p>
          <div className="divRadio">
            <label><input type="checkbox" value="branca" /> Branca</label>
            <label><input type="checkbox" value="cores quentes" /> Cores quentes</label>
            <label><input type="checkbox" value="cores frias" /> Cores frias</label>
            <label><input type="checkbox" value="verde claro" /> Verde claro</label>
            <label><input type="checkbox" value="verde escuro" /> Verde escuro</label>
            <label><input type="checkbox" value="verde" /> Verde</label>
            <label><input type="checkbox" value="varias cores" /> Várias cores</label>

          </div>
          </div>

          <p>Informações sobre a espécie</p>
          <textarea
            id="specieText"
            placeholder="Escreva aqui uma boa quantidade de informações sobre a espécie"
          ></textarea>

          <p>Galeria de imagens</p>
          <input
            type="text"
            placeholder="cole aqui o link da imagem"
          />

          <button type="button" id="more">+</button>
          <button type="submit" id="post">Postar</button>

        </form>
      </ContentComponent>

      <Footer />
    </div>
  )
}

export default AddSpecie
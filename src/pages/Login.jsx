
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './form.css'
function Login() {

  return (
    <div id='mainDiv'>
      <Header/>
      <ContentComponent>
        <form action="submit" className='userForms'>
          <p>Atenção, esta página é direcionada apenas ao proprietário do site.</p>
          <p>Digite seu nome:</p>
          <input type="text" id='inputEmail' placeholder='digite seu email aqui'/>
          <p>Digite sua senha:</p>
          <input type="password" id='inputSenha' placeholder='digite sua senha aqui'/>
          <button>Entrar</button>

        </form>



      </ContentComponent>
      
      <Footer/>
    </div>
  )
}

export default Login
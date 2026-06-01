

import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
import BackHomeButton from '../components/BackHomeButton/BackHomeButton'
function Projeto() {

  return (
    <div id='mainDiv'>
      
      <Header/>
      
      <ContentComponent>
  <h1 style={{
    marginBottom:'2rem',
    fontSize:'2rem',
    fontWeight:'100'
  }}>Sobre o projeto</h1>

  <div   style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    fontSize: '1.1rem',
    textAlign: 'center',
    color: '#000000e4',
    backgroundColor:'#ffffffac',
    lineHeight: '1.8',
    padding:'1rem',
    paddingBottom:'2rem',
    marginBottom:'2rem',
  }}>

    <p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
      Este website foi desenvolvido com duas finalidades principais: 
      aprimorar conhecimentos no framework React e na automação de testes 
      utilizando Cypress, além de compartilhar informações sobre os belos 
      jardins japoneses e sua composição.
    </p>

    <p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
      Durante o desenvolvimento da aplicação, foi possível aprofundar o 
      conhecimento sobre o React e suas funcionalidades, enfrentando também 
      diversos desafios relacionados não apenas à lógica da aplicação, mas 
      também ao design UI/UX.
    </p>

    <p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
      A automação de testes com Cypress representa o principal foco técnico 
      do projeto, envolvendo também consumo de APIs e testes de interface. 
      O objetivo é desenvolver uma ampla variedade de testes para garantir 
      maior estabilidade, organização e qualidade ao website.
    </p>

    <p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
      Outro grande desafio foi a escolha de imagens ilustrativas que realmente 
      transmitissem a estética e o contexto desejados em cada seção do site, 
      proporcionando uma experiência visual mais agradável e imersiva.
    </p>

    <p style={{ maxWidth: '75ch', backgroundColor:'transparent'}}>
      Além do aspecto técnico, o website também busca apresentar a estética, 
      a filosofia e os elementos tradicionais dos jardins japoneses de forma 
      acessível e visualmente agradável.
    </p>

    <p style={{ maxWidth: '75ch' , backgroundColor:'transparent'}}>
      Espero que gostem do website e do projeto como um todo. 
      Agradeço desde já a todos que chegaram até aqui.
    </p>

    <p style={{alignSelf: 'flex-end', backgroundColor:'transparent',marginTop:'2rem'}}>Arthur Henrique</p>

  </div>
  <BackHomeButton/>
</ContentComponent>
      <Footer/>
    </div>
  )
}

export default Projeto
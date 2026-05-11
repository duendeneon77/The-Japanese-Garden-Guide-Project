
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import './pages.css'
function History() {

  return (
    <div id='mainDiv'>
      
      <Header/>
      
      <ContentComponent>
        <h1>História</h1>

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
          TEXTO NAO OFICIAL
</p>

    <p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
O Jardim Japonês surgiu há mais de mil anos no Japão, 
inspirado inicialmente pelos jardins chineses e pelas 
crenças budistas, xintoístas e taoistas. Com o passar 
do tempo, os japoneses desenvolveram um estilo próprio, 
transformando os jardins em espaços de contemplação, 
equilíbrio e conexão espiritual com a natureza.
</p>

<p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
Durante o período Heian (794–1185), os jardins eram construídos 
próximos aos palácios da nobreza e simbolizavam paisagens 
naturais em miniatura. Lagos, ilhas artificiais, pontes e 
pedras eram organizados cuidadosamente para representar 
harmonia e serenidade. Mais tarde, com a influência do Zen 
Budismo, surgiram os famosos jardins secos, conhecidos 
como “karesansui”, compostos principalmente por areia, 
pedras e poucos elementos vegetais. Esses jardins eram 
utilizados para meditação e reflexão.
</p>

<p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
Cada elemento de um Jardim Japonês possui significado 
simbólico. As pedras podem representar montanhas ou 
estabilidade; a água simboliza vida, movimento e renovação;
  lanternas de pedra remetem à iluminação espiritual; 
  e as pontes representam a passagem entre diferentes 
  caminhos da vida. O objetivo principal não é apenas 
  beleza visual, mas transmitir paz, simplicidade e 
  equilíbrio.
</p>

<p style={{ maxWidth: '75ch', backgroundColor:'transparent' }}>
Ao longo dos séculos, diferentes estilos de Jardins Japoneses 
foram criados, como os jardins de chá, utilizados na  
cerimônia do chá, os jardins de passeio, planejados para 
serem apreciados caminhando, e os jardins zen, voltados à
  contemplação silenciosa. Hoje, os Jardins Japoneses são 
  admirados em todo o mundo e continuam sendo símbolos da 
  cultura japonesa, valorizando a relação harmoniosa entre o 
  ser humano e a natureza.
</p>


  </div>

      </ContentComponent>
      <Footer/>
    </div>
  )
}

export default History
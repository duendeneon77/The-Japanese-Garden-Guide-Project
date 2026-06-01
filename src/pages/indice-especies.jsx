
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import SpeciesCard from  '../components/ContentComponent/Especies/SpeciesCard/SpeciesCard';
import './pages.css'
import species from "../../public/species/species.json"
import BackHomeButton from '../components/BackHomeButton/BackHomeButton';
function Especies() {

  return (
    <div id='mainDiv'>
      <Header/>
      <ContentComponent>

        
        <h1>Especies</h1>

        {species.map((species)=>{
          return(
          <SpeciesCard
            key = {species.id}
            species = {species}
          />
          )
        })}

      <div style={{ marginTop: "3rem", marginBottom: "3rem", backgroundColor: "transparent"}}>
  <BackHomeButton />
</div>
      </ContentComponent>
      
      
      <Footer/>
    </div>
  )
}

export default Especies
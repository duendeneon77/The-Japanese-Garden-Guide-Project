
import Header from '../components/HeaderComponent/Header'
import Footer from '../components/FooterComponent/Footer'
import ContentComponent from '../components/ContentComponent/Content'
import SpeciesCard from  '../components/ContentComponent/Especies/SpeciesCard/SpeciesCard';
import './pages.css'
import species from "../components/ContentComponent/Especies/Species/species.json"
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

      </ContentComponent>
      
      <Footer/>
    </div>
  )
}

export default Especies
import ContentComponent from "../components/ContentComponent/Content"
import Footer from "../components/FooterComponent/Footer"
import Header from "../components/HeaderComponent/Header"
import species from "../components/ContentComponent/Especies/Species/species.json"
import { useParams } from "react-router-dom"
import SpeciesPage from "../components/ContentComponent/Especies/SpeciesPage/SpeciePage"
const base = import.meta.env.BASE_URL;
import { Link } from "react-router-dom"


function Specie(){

    const {id} = useParams()
    const specie = species.find((item =>item.id === id))

    if(!specie){
        return <h1> Specie no found</h1>
    }
    return (
    <div>
        <Header/>
        <ContentComponent>
            <SpeciesPage/>
        </ContentComponent>
        <Footer/>

    </div>
    )
}

export default Specie

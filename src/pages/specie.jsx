import ContentComponent from "../components/ContentComponent/Content";
import Footer from "../components/FooterComponent/Footer";
import Header from "../components/HeaderComponent/Header";

import species from "../../public/species/species.json";

import { useParams } from "react-router-dom";

import SpeciesPage from "../components/ContentComponent/Especies/SpeciesPage/SpeciePage";

function Specie() {

    const { id } = useParams();

    const specie = species.find(
        item => item.id === id
    );

    if (!specie) {
        return <h1>Espécie não encontrada</h1>;
    }

    return (
        <div id="mainDiv">
            <Header />

            <ContentComponent>
                <SpeciesPage specie={specie} />
            </ContentComponent>

            <Footer />
        </div>
    );
}

export default Specie;
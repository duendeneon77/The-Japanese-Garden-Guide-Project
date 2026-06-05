import Header from '../components/HeaderComponent/Header';
import Footer from '../components/FooterComponent/Footer';
import ContentComponent from '../components/ContentComponent/Content';

import SpeciesPage from '../components/ContentComponent/Especies/SpeciesPage/SpeciePage';
import BackToSpeciesButton from '../components/BackToSpeciesButton/BackToSpeciesButton';

function Specie() {
  return (
    <div id="mainDiv">
      <Header />

      <ContentComponent>
        <SpeciesPage />
        <BackToSpeciesButton/>
      </ContentComponent>

      <Footer />
    </div>
  );
}

export default Specie;
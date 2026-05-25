import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/home'
import History from './pages/indice-historia'
import Especies from './pages/indice-especies'
import Projeto from './pages/indice-projeto'
import Substitutas from './pages/indice-substitutas'
import MidiaArtigos from './pages/midia-artigos'
import MidiaVideos from './pages/midia-videos'
import Specie from './pages/specie'


function App() {

  return (
        <HashRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/history" element={<History />} />
        <Route path="/species" element={<Especies />} />
        <Route path="/project" element={<Projeto />} />
        <Route path="/substitutes" element={<Substitutas />} />
        <Route path="/artigos" element={<MidiaArtigos />} />
        <Route path="/videos" element={<MidiaVideos />} />
        <Route path="/specie/:id" element={<Specie/>}/>

        


      </Routes>

    </HashRouter>
  )
}

export default App

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
import Login from './pages/Login'


//userPages
import UserMenu from './pages/userPages/user-menu'
import AddSpecie from './pages/userPages/add-specie'
import AddArticle from './pages/userPages/add-article'
import AddVideo from './pages/userPages/add-video'
import EditDeleteVideo from './pages/userPages/edit-delete-video'
import EditOrDeleteSpecie from './pages/userPages/edit-or-delete-especie'
import EditOrDeleteArticle from './pages/userPages/edit-or-delete-article'


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
        <Route path="/login" element={<Login/>}/>
        <Route path="/usersection" element={<UserMenu/>}/>
        <Route path="/addspecie" element={<AddSpecie/>}/>
        <Route path="/addarticle" element={<AddArticle/>}/>
        <Route path="/addvideo" element={<AddVideo/>}/>
        <Route path="/editdeletevideo" element={<EditDeleteVideo/>}/>
        <Route path="/editdeletespecie" element={<EditOrDeleteSpecie/>}/>
        <Route path="/editdeletearticle" element={<EditOrDeleteArticle/>}/>



        


      </Routes>

    </HashRouter>
  )
}

export default App

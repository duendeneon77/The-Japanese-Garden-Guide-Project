import { useEffect, useState } from "react";

import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import {
  getVideos,
  updateVideo,
  deleteVideo
} from "../../services/videosService";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function EditDeleteVideo() {

  const [videos, setVideos] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editForm, setEditForm] = useState({
    titulo: "",
    description: "",
    embed: "",
  });

  // GET ALL (API)
  useEffect(() => {
    getVideos().then(setVideos);
  }, []);

  // FILTER
  const filteredVideos = videos.filter((video) =>
    video.titulo.toLowerCase().includes(search.toLowerCase())
  );

  // SELECT
  function handleSelect(video) {

    setSelectedVideo(video);

    setEditForm({
      titulo: video.titulo,
      description: video.description,
      embed: video.embed,
    });

    setSearch("");
  }

  // FORM CHANGE
  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  // SAVE (UPDATE API)
  async function handleSave() {
  console.log("🔥 BOTÃO SALVAR FOI CLICADO");
  console.log("VIDEO SELECIONADO:", selectedVideo);
  console.log("FORM:", editForm);

    const updated = await updateVideo(selectedVideo.id, editForm);

    setVideos((prev) =>
      prev.map((video) =>
        video.id === selectedVideo.id ? updated : video
      )
    );

    handleCancel();
  }

  // DELETE (API)
  async function handleDeleteVideo() {

    await deleteVideo(selectedVideo.id);

    setVideos((prev) =>
      prev.filter((video) => video.id !== selectedVideo.id)
    );

    setShowDeleteModal(false);

    handleCancel();
  }

  // RESET
  function handleCancel() {

    setSelectedVideo(null);

    setSearch("");

    setShowDeleteModal(false);

    setEditForm({
      titulo: "",
      description: "",
      embed: "",
    });
  }

  return (

    <div id='mainDiv'>

      <Header />

      <ContentComponent>

        <div className='userForms' id="searchVideoDiv">

          {/* BUSCA */}
          {
            !selectedVideo && (
              <>
                <h3 id="addArticleTitle">
                  Buscar vídeo
                </h3>

                <p>
                  Digite abaixo o nome do vídeo que deseja editar
                </p>

                <input
                  type="text"
                  id="searchVideo"
                  placeholder="Digite o nome do video aqui"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                {/* RESULTADOS */}
                {
                  search && (
                    <div className="searchResults">

                      {
                        filteredVideos.length > 0 ? (
                          filteredVideos.map((video) => (

                            <div
                              key={video.id}
                              className="searchItem"
                              onClick={() => handleSelect(video)}
                            >
                              {video.titulo}
                            </div>

                          ))
                        ) : (
                          <p>Nenhum vídeo encontrado</p>
                        )
                      }

                    </div>
                  )
                }

              </>
            )
          }

          {/* EDIÇÃO */}
          {
            selectedVideo && (
              <>
                <h3 id="addArticleTitle">
                  Editar vídeo
                </h3>

                <p>Edite abaixo as informações do vídeo</p>

                <input
                  type="text"
                  name="titulo"
                  value={editForm.titulo}
                  onChange={handleChange}
                  placeholder="Título do vídeo"
                />

                <p>Descrição do vídeo</p>

                <textarea
                  id="videoText"
                  name="description"
                  value={editForm.description}
                  onChange={handleChange}
                  placeholder="Descrição"
                />

                <p>Código embed do vídeo</p>

                <input
                  type="text"
                  name="embed"
                  value={editForm.embed}
                  onChange={handleChange}
                  placeholder="Código do vídeo"
                />

                {/* BOTÕES */}
                <div className="editSpecieButtonDiv">

                  <div className="editSpecieButtonSubdiv">

                    <button type="button" onClick={handleSave}>
                      Salvar
                    </button>

                    <button type="button" onClick={() => setShowDeleteModal(true)}>
                      Deletar
                    </button>

                  </div>

                  <button type="button" onClick={handleCancel}>
                    Cancelar
                  </button>

                </div>

                {/* MODAL */}
                {
                  showDeleteModal && (
                    <div
                      id="divModal1"
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 999,
                      }}
                    >

                      <div
                        style={{
                          backgroundColor: "rgb(223, 223, 223)",
                          padding: "2rem",
                          borderRadius: "1rem",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: "1rem",
                          maxWidth: "90%",
                          color: "black",
                        }}
                      >

                        <p>Tem certeza que deseja deletar o vídeo?</p>

                        <div id="editDeleteVideoYesNo" style={{ display: "flex", gap: "1rem" }}>

                          <button type="button" onClick={handleDeleteVideo}>
                            Sim
                          </button>

                          <button type="button" onClick={() => setShowDeleteModal(false)}>
                            Cancelar
                          </button>

                        </div>

                      </div>

                    </div>
                  )
                }

              </>
            )
          }

        </div>

        <BackUserPageButton />

      </ContentComponent>

      <Footer />

    </div>
  );
}

export default EditDeleteVideo;
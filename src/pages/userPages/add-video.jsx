import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createVideo } from "../../services/videosService";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function AddVideo() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [embed, setEmbed] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!titulo || !embed || !description) {
      alert("Preencha todos os campos");
      return;
    }

    const newVideo = {
      titulo,
      embed,
      description,
    };

    try {
      await createVideo(newVideo);

      setTitulo("");
      setEmbed("");
      setDescription("");

      navigate("/usersection");
    } catch (error) {
      console.error("Erro ao criar vídeo:", error);
      alert("Erro ao salvar vídeo");
    }
  }

  function handleCancel() {
    navigate("/usersection");
  }

  return (
    <div id="mainDiv">
      <Header />

      <ContentComponent>
        <form className="userForms" onSubmit={handleSubmit}>
          <h3 id="addArticleTitle">Postagem de Novo Video</h3>

          <p>Digite abaixo um título para ilustrar o vídeo abaixo</p>

          <input
            type="text"
            id="inputVideoName"
            placeholder="digite o titulo aqui"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <p>Abaixo, coloque o embed/código do video</p>

          <input
            type="text"
            id="inputVideoCode"
            placeholder="cole aqui o código do vídeo"
            value={embed}
            onChange={(e) => setEmbed(e.target.value)}
          />

          <p>Escreva aqui uma breve descrição para o conteúdo do vídeo:</p>

          <textarea
            id="videoText"
            placeholder="Escreva a descrição aqui"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="editVideoButtonDiv">
            <button type="submit" id="post">
              Postar
            </button>

            <button type="button" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </form>

        <BackUserPageButton />
      </ContentComponent>

      <Footer />
    </div>
  );
}

export default AddVideo;
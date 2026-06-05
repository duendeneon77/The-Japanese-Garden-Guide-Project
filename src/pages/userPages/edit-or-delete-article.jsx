import { useState, useEffect } from "react";

import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import {
  getArticles,
  updateArticle,
  deleteArticle
} from "../../services/articlesService";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function EditOrDeleteArticle() {
  const base = import.meta.env.BASE_URL;

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    titulo: "",
    imagem: "",
    texto: ""
  });

  useEffect(() => {
    async function load() {
      try {
        const data = await getArticles();
        setArticles(data || []);
      } catch (err) {
        console.error("Erro ao carregar artigos:", err);
      }
    }

    load();
  }, []);

  const filteredArticles = articles.filter((article) =>
    (article.titulo || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  function articleToText(conteudo = []) {
    return conteudo
      .map((item) => {
        if (item.tipo === "paragrafo") {
          return item.texto;
        }

        if (item.tipo === "imagem") {
          return `[img]${item.src}[/img]`;
        }

        return "";
      })
      .join("\n\n");
  }

  function textToContent(texto) {
    return texto
      .split(/\n\s*\n/)
      .filter((item) => item.trim() !== "")
      .map((item) => {
        const imageMatch = item.match(
          /^\[img\](.*?)\[\/img\]$/s
        );

        if (imageMatch) {
          return {
            tipo: "imagem",
            src: imageMatch[1].trim()
          };
        }

        return {
          tipo: "paragrafo",
          texto: item.trim()
        };
      });
  }

  function handleSelect(article) {
    setSelectedArticle(article);

    setEditForm({
      id: article.id,
      titulo: article.titulo,
      imagem: article.imagem,
      texto: articleToText(article.conteudo)
    });

    setSearch("");
  }

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  }

  async function handleSave() {
    try {
      const updatedArticle = {
        id: editForm.id,
        titulo: editForm.titulo,
        imagem: editForm.imagem,
        conteudo: textToContent(editForm.texto)
      };

      const updated = await updateArticle(
        selectedArticle.id,
        updatedArticle
      );

      setArticles((prev) =>
        prev.map((article) =>
          article.id === selectedArticle.id
            ? updated
            : article
        )
      );

      handleCancel();
    } catch (err) {
      console.error("Erro ao atualizar artigo:", err);
      alert("Erro ao salvar artigo");
    }
  }

  async function handleDeleteArticle() {
    try {
      await deleteArticle(selectedArticle.id);

      setArticles((prev) =>
        prev.filter(
          (article) =>
            article.id !== selectedArticle.id
        )
      );

      setShowDeleteModal(false);

      handleCancel();
    } catch (err) {
      console.error("Erro ao deletar artigo:", err);
      alert("Erro ao deletar artigo");
    }
  }

  function handleCancel() {
    setSelectedArticle(null);
    setSearch("");
    setShowDeleteModal(false);

    setEditForm({
      id: "",
      titulo: "",
      imagem: "",
      texto: ""
    });
  }

  return (
    <div id="mainDiv">
      <Header />

      <ContentComponent>
        <div className="userForms">

          {!selectedArticle && (
            <>
              <h3 id="addArticleTitle">
                Buscar artigo
              </h3>

              <p>Procure pelo nome do artigo</p>

              <input
                type="text"
                id="searchVideo"
                placeholder="Digite aqui..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <div className="searchResults">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        className="searchItem"
                        onClick={() =>
                          handleSelect(article)
                        }
                      >
                        {article.titulo}
                      </div>
                    ))
                  ) : (
                    <p>Nenhum artigo encontrado</p>
                  )}
                </div>
              )}
            </>
          )}

          {selectedArticle && (
            <>
              <h3 id="addArticleTitle">
                Editar artigo
              </h3>

              <p>Título do artigo</p>

              <input
                type="text"
                name="titulo"
                value={editForm.titulo}
                onChange={handleChange}
              />

              <p>Imagem principal</p>

              {editForm.imagem && (
                <img
                  src={
                    editForm.imagem.startsWith("http")
                      ? editForm.imagem
                      : `${base}${editForm.imagem.replace(
                          /^\//,
                          ""
                        )}`
                  }
                  alt={editForm.titulo}
                  style={{
                    width: "12rem",
                    maxWidth: "100%",
                    marginBottom: "1rem",
                    borderRadius: "0.5rem"
                  }}
                />
              )}

              <input
                type="text"
                name="imagem"
                value={editForm.imagem}
                onChange={handleChange}
              />

              <p>Conteúdo do artigo</p>

              <p
                style={{
                  fontSize: "0.9rem",
                  opacity: "0.8",
                  marginBottom: "1rem"
                }}
              >
                Use dois ENTERs para criar um novo
                parágrafo.
                <br />
                Para inserir imagens:
                <br />
                [img]URL_DA_IMAGEM[/img]
              </p>

              <textarea
                id="specieText"
                name="texto"
                value={editForm.texto}
                onChange={handleChange}
              />

              <div className="editArticleButtonDiv">

                <div className="editArticleButtonSubdiv">

                  <button
                    type="button"
                    onClick={handleSave}
                  >
                    Salvar
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setShowDeleteModal(true)
                    }
                  >
                    Deletar
                  </button>

                </div>

                <button
                  type="button"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>

              </div>

              {showDeleteModal && (
                <div
                  id="divModal1"
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor:
                      "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 999
                  }}
                >
                  <div
                    style={{
                      backgroundColor:
                        "rgb(223,223,223)",
                      padding: "2rem",
                      borderRadius: "1rem",
                      color: "black",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      alignItems: "center"
                    }}
                  >
                    <p>
                      Tem certeza que deseja
                      deletar o artigo?
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        backgroundColor:
                          "transparent"
                      }}
                    >
                      <button
                        type="button"
                        onClick={
                          handleDeleteArticle
                        }
                      >
                        Sim
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setShowDeleteModal(
                            false
                          )
                        }
                      >
                        Cancelar
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </>
          )}

        </div>

        <BackUserPageButton />
      </ContentComponent>

      <Footer />
    </div>
  );
}

export default EditOrDeleteArticle;
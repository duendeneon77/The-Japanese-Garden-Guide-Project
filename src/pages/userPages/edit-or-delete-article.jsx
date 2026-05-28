import { useState } from "react";

import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import articlesData from "../../../public/articles/artigos.json";

import "../form.css";

function EditOrDeleteArticle() {
  const base = import.meta.env.BASE_URL;

  const [articles, setArticles] = useState(articlesData);

  const [search, setSearch] = useState("");

  const [selectedArticle, setSelectedArticle] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    titulo: "",
    imagem: "",
    arquivo: "",
  });

  const filteredArticles = articles.filter((article) => {
    return article.titulo.toLowerCase().includes(search.toLowerCase());
  });

  async function handleSelect(article) {
    let articleText = "";

    try {
      const response = await fetch(`${base}articles/${article.arquivo}`);

      articleText = await response.text();
    } catch (error) {
      articleText = "Erro ao carregar artigo.";
    }

    setSelectedArticle(article);

    setEditForm({
      ...article,
      arquivo: articleText,
    });

    setSearch("");
  }

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave() {
    const updatedArticles = articles.map((article) => {
      if (article.id === selectedArticle.id) {
        return {
          ...article,
          titulo: editForm.titulo,
          imagem: editForm.imagem,
        };
      }

      return article;
    });

    setArticles(updatedArticles);

    console.log("Texto atualizado:");
    console.log(editForm.arquivo);

    handleCancel();
  }

  function handleDeleteArticle() {
    const updatedArticles = articles.filter(
      (article) => article.id !== selectedArticle.id,
    );

    setArticles(updatedArticles);

    setShowDeleteModal(false);

    handleCancel();
  }

  function handleCancel() {
    setSelectedArticle(null);

    setSearch("");

    setShowDeleteModal(false);

    setEditForm({
      id: "",
      titulo: "",
      imagem: "",
      arquivo: "",
    });
  }

  return (
    <div id="mainDiv">
      <Header />

      <ContentComponent>
        <div className="userForms">
          {!selectedArticle && (
            <>
              <h3 id="addArticleTitle">Buscar artigo</h3>

              <p>Procure pelo nome do artigo</p>

              <input
                type="text"
                id="searchVideo"
                placeholder="Digite aqui..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <div className="searchResults">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                      <div
                        key={index}
                        className="searchItem"
                        onClick={() => handleSelect(article)}
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

          {/* EDIÇÃO */}

          {selectedArticle && (
            <>
              <h3 id="addArticleTitle">Editar artigo</h3>

              <p>Título do artigo</p>

              <input
                type="text"
                name="titulo"
                value={editForm.titulo}
                onChange={handleChange}
              />

              <p>Imagem principal</p>

              <img
                src={`${base}${editForm.imagem.replace("/", "")}`}
                alt=""
                style={{
                  width: "8rem",
                  marginBottom: "1rem",
                }}
              />

              <input
                type="text"
                name="imagem"
                value={editForm.imagem}
                onChange={handleChange}
              />

              <p>Texto do artigo</p>

              <textarea
                id="specieText"
                name="arquivo"
                value={editForm.arquivo}
                onChange={handleChange}
              ></textarea>

              <div className="editArticleButtonDiv">
                <div className="editArticleButtonSubdiv">
                  <button type="button" onClick={handleSave}>
                    Salvar
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    Deletar
                  </button>
                </div>
                <button type="button" onClick={handleCancel}>
                  Cancelar
                </button>
              </div>

              {/* MODAL */}

              {showDeleteModal && (
                <div
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
                    <p>Tem certeza que deseja deletar o artigo?</p>

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        backgroundColor: "transparent",
                      }}
                    >
                      <button type="button" onClick={handleDeleteArticle}>
                        Sim
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowDeleteModal(false)}
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
      </ContentComponent>

      <Footer />
    </div>
  );
}

export default EditOrDeleteArticle;

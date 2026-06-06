import { useState, useEffect } from "react";

import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import {
  getSpecies,
  updateSpecies,
  deleteSpecies
} from "../../services/speciesService";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function EditSpecie() {

  const [species, setSpecies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const [newGalleryImage, setNewGalleryImage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showLocalOnlyModal, setShowLocalOnlyModal] =
  useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    titulo: "",
    tipo: "",
    cor: "",
    crescimento: "",
    tamanho: "",
    nomeCientifico: "",
    imagem: "",
    arquivo: [],
    galeria: []
  });

  useEffect(() => {
    async function load() {
      try {
        const data = await getSpecies();
        setSpecies(data || []);
      } catch (error) {
        console.error(error);
        setSpecies([]);
      }
    }

    load();
  }, []);

  const filteredSpecies = species.filter((specie) => {
    const vulgar = (specie.titulo || "").toLowerCase();
    const cientific = (specie.nomeCientifico || "").toLowerCase();

    return (
      vulgar.includes(search.toLowerCase()) ||
      cientific.includes(search.toLowerCase())
    );
  });

  function handleSelect(specie) {
    setSelectedSpecie(specie);

    setEditForm({
      ...specie,
      arquivo: specie.arquivo || [],
      galeria: specie.galeria || []
    });

    setSearch("");
  }

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  }

  function handleArticleChange(e) {
    const paragraphs = e.target.value
      .split("\n")
      .filter((paragraph) => paragraph.trim() !== "")
      .map((paragraph) => ({
        tipo: "paragrafo",
        texto: paragraph
      }));

    setEditForm({
      ...editForm,
      arquivo: paragraphs
    });
  }

  function handleGalleryChange(index, value) {
    const updatedGallery = [...(editForm.galeria || [])];

    updatedGallery[index] = {
      ...updatedGallery[index],
      url: value
    };

    setEditForm({
      ...editForm,
      galeria: updatedGallery
    });
  }

  function handleAddGalleryImage() {
    if (!newGalleryImage.trim()) return;

    const newImage = {
      id: `im${Date.now()}`,
      url: newGalleryImage
    };

    setEditForm({
      ...editForm,
      galeria: [...(editForm.galeria || []), newImage]
    });

    setNewGalleryImage("");
  }

  function handleDeleteImage(index) {
    const updatedGallery = (editForm.galeria || []).filter(
      (_, i) => i !== index
    );

    setEditForm({
      ...editForm,
      galeria: updatedGallery
    });
  }

  async function handleSave() {
    try {

      const updated = await updateSpecies(
        editForm.id,
        editForm
      );

      setSpecies((prev) =>
        prev.map((s) =>
          s.id === editForm.id ? updated : s
        )
      );

      handleCancel();

    } catch (error) {
      if (
    error.message &&
    error.message.includes("local")
  ) {
    setShowLocalOnlyModal(true);
    return;
  }

  console.error("Erro ao salvar:", error);
    }
  }

  async function handleDeleteSpecie() {
    try {

      await deleteSpecies(editForm.id);

      setSpecies((prev) =>
        prev.filter((s) => s.id !== editForm.id)
      );

      setShowDeleteModal(false);

      handleCancel();

    } catch (error) {
      if (
    error.message &&
    error.message.includes("local")
  ) {
    setShowDeleteModal(false);
    setShowLocalOnlyModal(true);
    return;
  }

  console.error("Erro ao deletar:", error);
    }
  }

  function handleCancel() {
    setSelectedSpecie(null);
    setSearch("");
    setNewGalleryImage("");
    setShowDeleteModal(false);

    setEditForm({
      id: "",
      titulo: "",
      tipo: "",
      cor: "",
      crescimento: "",
      tamanho: "",
      nomeCientifico: "",
      imagem: "",
      arquivo: [],
      galeria: []
    });
  }

  return (
    <div id="mainDiv">

      <Header />

      <ContentComponent>

        <div className="userForms">

          {!selectedSpecie && (
            <>
              <h3 id="specieFormTitle">
                Buscar espécie
              </h3>

              <p>
                Procure pelo nome vulgar ou nome científico
              </p>

              <input
                type="text"
                id="searchVideo"
                placeholder="Digite aqui..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <div className="searchResults">
                  {filteredSpecies.length > 0 ? (
                    filteredSpecies.map((specie) => (
                      <div
                        key={specie.id}
                        className="searchItem"
                        onClick={() => handleSelect(specie)}
                      >
                        {specie.titulo}
                      </div>
                    ))
                  ) : (
                    <p>Nenhuma espécie encontrada</p>
                  )}
                </div>
              )}
            </>
          )}

          {selectedSpecie && (
            <>
              <h3 id="specieFormTitle">
                Editar espécie
              </h3>

              <p>Nome vulgar</p>

              <input
                type="text"
                name="titulo"
                value={editForm.titulo}
                onChange={handleChange}
              />

              <p>Nome científico</p>

              <input
                type="text"
                name="nomeCientifico"
                value={editForm.nomeCientifico}
                onChange={handleChange}
              />

              <p>Tipo</p>

              <input
                type="text"
                name="tipo"
                value={editForm.tipo}
                onChange={handleChange}
              />

              <p>Cor</p>

              <input
                type="text"
                name="cor"
                value={editForm.cor}
                onChange={handleChange}
              />

              <p>Crescimento</p>

              <input
                type="text"
                name="crescimento"
                value={editForm.crescimento}
                onChange={handleChange}
              />

              <p>Tamanho</p>

              <input
                type="text"
                name="tamanho"
                value={editForm.tamanho}
                onChange={handleChange}
              />

              <p>Imagem principal</p>

              <input
                type="text"
                name="imagem"
                value={editForm.imagem}
                onChange={handleChange}
              />

              <p>Texto da espécie</p>

              <textarea
                rows={20}
                id="editSpecieTextArea"
                value={(editForm.arquivo || [])
                  .filter((item) => item.tipo === "paragrafo")
                  .map((item) => item.texto)
                  .join("\n")}
                onChange={handleArticleChange}
                placeholder="Cada Enter cria um novo parágrafo"
              />

              <div className="toDivide">

                <p>Galeria de imagens</p>

                {(editForm.galeria || []).map((image, index) => (
                  <div
                    key={image.id}
                    className="galleryInputContainer"
                  >
                    <input
                      type="text"
                      value={image.url}
                      onChange={(e) =>
                        handleGalleryChange(
                          index,
                          e.target.value
                        )
                      }
                    />

                    <button
                      type="button"
                      className="deleteImageInput"
                      onClick={() => handleDeleteImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}

                <div
                  style={{
                    backgroundColor: "transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem"
                  }}
                >
                  <input
                    type="text"
                    placeholder="Cole aqui o link da imagem"
                    value={newGalleryImage}
                    onChange={(e) =>
                      setNewGalleryImage(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    id="more"
                    onClick={handleAddGalleryImage}
                  >
                    +
                  </button>
                </div>

              </div>

              <div className="editSpecieButtonDiv">

                <div className="editSpecieButtonSubdiv">

                  <button
                    type="button"
                    onClick={handleSave}
                  >
                    Salvar
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(true)}
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
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 999
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
                      color: "black"
                    }}
                  >
                    <p>
                      Tem certeza que deseja deletar a espécie?
                    </p>

                    <div
                      id="divForCancelorNoEditSpecie"
                      style={{
                        display: "flex",
                        gap: "1rem"
                      }}
                    >
                      <button
                        type="button"
                        onClick={handleDeleteSpecie}
                      >
                        Sim
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setShowDeleteModal(false)
                        }
                      >
                        Cancelar
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {showLocalOnlyModal && (
  <div className="modalBackground">

    <div className="userForms">

      <h3>
        Função indisponível
      </h3>

      <p>
        A edição e exclusão de espécies
        estão disponíveis apenas no
        ambiente local de desenvolvimento.
      </p>

      <p>
        No GitHub Pages as espécies são
        exibidas somente para leitura.
      </p>

      <button
        type="button"
        onClick={() =>
          setShowLocalOnlyModal(false)
        }
      >
        Fechar
      </button>

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

export default EditSpecie;
import { useState } from "react";

import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import speciesData from "../../../public/species/species.json";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function EditSpecie() {

  const base = import.meta.env.BASE_URL;

  const [species, setSpecies] = useState(speciesData);
  const [search, setSearch] = useState("");
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const [newGalleryImage, setNewGalleryImage] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [editForm, setEditForm] = useState({
    id: "",
    titulo: "",
    tipo: "",
    cor: "",
    crescimento: "",
    tamanho: "",
    nomeCientifico: "",
    imagem: "",
    arquivo: "",
    galeria: [],
  });

  const filteredSpecies = species.filter((specie) => {
    const vulgar = specie.titulo.toLowerCase();
    const cientific = specie.nomeCientifico.toLowerCase();

    return (
      vulgar.includes(search.toLowerCase()) ||
      cientific.includes(search.toLowerCase())
    );
  });

  function handleSelect(specie) {
    setSelectedSpecie(specie);
    setEditForm({ ...specie });
    setSearch("");
  }

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  function handleGalleryChange(index, value) {
    const updatedGallery = [...editForm.galeria];
    updatedGallery[index].url = value;

    setEditForm({
      ...editForm,
      galeria: updatedGallery,
    });
  }

  function handleAddGalleryImage() {
    if (newGalleryImage.trim() === "") return;

    const newImage = {
      id: `im${editForm.galeria.length + 1}`,
      url: newGalleryImage,
    };

    setEditForm({
      ...editForm,
      galeria: [...editForm.galeria, newImage],
    });

    setNewGalleryImage("");
  }

  function handleDeleteImage(index) {
    const updatedGallery = editForm.galeria.filter((_, i) => i !== index);

    setEditForm({
      ...editForm,
      galeria: updatedGallery,
    });
  }

  function handleSave() {
    const updatedSpecies = species.map((specie) => {
      if (specie.id === selectedSpecie.id) {
        return editForm;
      }
      return specie;
    });

    setSpecies(updatedSpecies);
    handleCancel();
  }

  function handleDeleteSpecie() {
    const updatedSpecies = species.filter(
      (specie) => specie.id !== selectedSpecie.id
    );

    setSpecies(updatedSpecies);
    setShowDeleteModal(false);
    handleCancel();
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
      arquivo: "",
      galeria: [],
    });
  }

  return (
    <div id="mainDiv">

      <Header />

      <ContentComponent>

        <div className="userForms">

          {!selectedSpecie && (
            <>
              <h3 id="specieFormTitle">Buscar espécie</h3>

              <p>Procure pelo nome vulgar ou nome científico</p>

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
              <h3 id="specieFormTitle">Editar espécie</h3>

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

              <p>Imagem principal</p>
              <input
                type="text"
                name="imagem"
                value={editForm.imagem}
                onChange={handleChange}
              />

              <div className="toDivide">
                <p>Galeria de imagens</p>

                {editForm.galeria.map((image, index) => (
                  <div key={image.id} className="galleryInputContainer">

                    <input
                      type="text"
                      value={image.url}
                      onChange={(e) =>
                        handleGalleryChange(index, e.target.value)
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
                    backgroundColor:"transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Cole aqui o link da imagem"
                    value={newGalleryImage}
                    onChange={(e) => setNewGalleryImage(e.target.value)}
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

              {showDeleteModal && (
                <div id="divModal1"
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
                    <p>Tem certeza que deseja deletar a espécie?</p>

                    <div style={{ display: "flex", gap: "1rem" }}>
                      <button type="button" onClick={handleDeleteSpecie}>
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

        <BackUserPageButton />

      </ContentComponent>

      <Footer />

    </div>
  );
}

export default EditSpecie;
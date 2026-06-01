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

  // BUSCA
  const filteredSpecies = species.filter((specie) => {

    const vulgar = specie.titulo.toLowerCase();

    const cientific = specie.nomeCientifico.toLowerCase();

    return (
      vulgar.includes(search.toLowerCase()) ||
      cientific.includes(search.toLowerCase())
    );
  });

  // SELECIONAR ESPÉCIE
  function handleSelect(specie) {

    setSelectedSpecie(specie);

    setEditForm({
      ...specie,
    });

    setSearch("");
  }

  // ALTERAR INPUTS
  function handleChange(e) {

    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  // ALTERAR GALERIA
  function handleGalleryChange(index, value) {

    const updatedGallery = [...editForm.galeria];

    updatedGallery[index].url = value;

    setEditForm({
      ...editForm,
      galeria: updatedGallery,
    });
  }

  // ADICIONAR IMAGEM
  function handleAddGalleryImage() {

    if (newGalleryImage.trim() === "") {
      return;
    }

    const newImage = {
      id: `im${editForm.galeria.length + 1}`,
      url: newGalleryImage,
    };

    setEditForm({
      ...editForm,
      galeria: [
        ...editForm.galeria,
        newImage,
      ],
    });

    setNewGalleryImage("");
  }

  // EXCLUIR IMAGEM
  function handleDeleteImage(index) {

    const updatedGallery = editForm.galeria.filter(
      (_, i) => i !== index
    );

    setEditForm({
      ...editForm,
      galeria: updatedGallery,
    });
  }

  // SALVAR
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

  // DELETAR ESPÉCIE
  function handleDeleteSpecie() {

    const updatedSpecies = species.filter(
      (specie) => specie.id !== selectedSpecie.id
    );

    setSpecies(updatedSpecies);

    setShowDeleteModal(false);

    handleCancel();
  }

  // CANCELAR
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

          {/* BUSCA */}

          {
            !selectedSpecie &&
            (
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

                {
                  search &&
                  (
                    <div className="searchResults">

                      {
                        filteredSpecies.length > 0
                          ? (
                            filteredSpecies.map((specie, index) => (

                              <div
                                key={index}
                                className="searchItem"
                                onClick={() => handleSelect(specie)}
                              >

                                {specie.titulo}

                              </div>

                            ))
                          )
                          : (
                            <p>
                              Nenhuma espécie encontrada
                            </p>
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
            selectedSpecie &&
            (
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

                <p>Imagem principal</p>

                <img
                  src={`${base}${editForm.imagem.replace("/", "")}`}
                  alt=""
                  style={{
                    width: "6rem",
                    marginBottom: "1rem",
                  }}
                />

                <input
                  type="text"
                  name="imagem"
                  value={editForm.imagem}
                  onChange={handleChange}
                />

                {/* PORTE */}

                <div className="toDivide">

                  <p>Porte</p>

                  <div className="divRadio">

                    <label>
                      <input
                        type="radio"
                        name="tamanho"
                        value="grande"
                        checked={editForm.tamanho === "grande"}
                        onChange={handleChange}
                      />
                      Grande
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="tamanho"
                        value="medio"
                        checked={editForm.tamanho === "medio"}
                        onChange={handleChange}
                      />
                      Médio
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="tamanho"
                        value="pequeno"
                        checked={editForm.tamanho === "pequeno"}
                        onChange={handleChange}
                      />
                      Pequeno
                    </label>

                  </div>

                </div>

                {/* CRESCIMENTO */}

                <div className="toDivide">

                  <p>Crescimento</p>

                  <div className="divRadio">

                    <label>
                      <input
                        type="radio"
                        name="crescimento"
                        value="lento"
                        checked={editForm.crescimento === "lento"}
                        onChange={handleChange}
                      />
                      Lento
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="crescimento"
                        value="moderado"
                        checked={editForm.crescimento === "moderado"}
                        onChange={handleChange}
                      />
                      Moderado
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="crescimento"
                        value="rapido"
                        checked={editForm.crescimento === "rapido"}
                        onChange={handleChange}
                      />
                      Rápido
                    </label>

                  </div>

                </div>

                {/* CLASSIFICAÇÃO */}

                <div className="toDivide">

                  <p>Classificação</p>

                  <div className="divRadio">

                    <label>
                      <input
                        type="radio"
                        name="tipo"
                        value="Caducifolia"
                        checked={editForm.tipo === "Caducifolia"}
                        onChange={handleChange}
                      />
                      Caducifólia
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="tipo"
                        value="Conifera"
                        checked={editForm.tipo === "Conifera"}
                        onChange={handleChange}
                      />
                      Conífera
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="tipo"
                        value="Perenifolia"
                        checked={editForm.tipo === "Perenifolia"}
                        onChange={handleChange}
                      />
                      Perenifólia
                    </label>

                  </div>

                </div>

                {/* CORES */}

                <p>Cores</p>

                <input
                  type="text"
                  name="cor"
                  value={editForm.cor}
                  onChange={handleChange}
                />

                {/* TEXTO */}

                <p>Texto da espécie</p>

                <textarea
                  id="specieText"
                  name="arquivo"
                  value={editForm.arquivo}
                  onChange={handleChange}
                ></textarea>

                {/* GALERIA */}

                <div className="toDivide">

                  <p>Galeria de imagens</p>

                  {
                    editForm.galeria.map((image, index) => (

                      <div
                        key={image.id}
                        className="divideGalery"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          marginBottom: "2rem",
                          backgroundColor: "transparent",
                        }}
                      >

                        <img
                          src={`${base}${image.url.replace("/", "")}`}
                          alt=""
                          style={{
                            width: "5rem",
                            height: "5rem",
                            objectFit: "cover",
                            marginBottom: "1rem",
                          }}
                        />

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
                          onClick={() => handleDeleteImage(index)}
                        >
                          Excluir
                        </button>

                      </div>

                    ))
                  }

                  {/* NOVA IMAGEM */}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "1rem",
                      backgroundColor: "transparent",
                    }}
                  >

                    <p>
                      Adicionar nova imagem na galeria
                    </p>

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

                {/* BOTÕES */}

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

                {/* MODAL */}

                {
                  showDeleteModal &&
                  (
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

                        <p>
                          Tem certeza que deseja deletar a espécie?
                        </p>

                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            backgroundColor: "transparent",
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
                            onClick={() => setShowDeleteModal(false)}
                          >
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

        <BackUserPageButton/>

      </ContentComponent>

      <Footer />

    </div>
  );
}

export default EditSpecie;
import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createSpecies } from "../../services/speciesService";

import "../form.css";
import BackUserPageButton from "../../components/BackUserPageButton/BackUserPageButton";

function AddSpecie() {
  const navigate = useNavigate();

  const [galleryImages, setGalleryImages] = useState([]);
  const [showLocalOnlyModal, setShowLocalOnlyModal] =
  useState(false);

  const [form, setForm] = useState({
    titulo: "",
    nomeCientifico: "",
    imagem: "",
    tamanho: "",
    crescimento: "",
    tipo: "",
    cor: [],
    texto: ""
  });

  function handleCancel() {
    navigate("/usersection");
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleColorChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setForm((prev) => ({
        ...prev,
        cor: [...prev.cor, value]
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        cor: prev.cor.filter((c) => c !== value)
      }));
    }
  }

  function addImageInput() {
    if (galleryImages.length >= 15) return;

    setGalleryImages([
      ...galleryImages,
      {
        id: Date.now() + Math.random(),
        value: ""
      }
    ]);
  }

  function removeImageInput(id) {
    setGalleryImages(
      galleryImages.filter((item) => item.id !== id)
    );
  }

  function updateImageInput(id, value) {
    setGalleryImages(
      galleryImages.map((item) =>
        item.id === id
          ? { ...item, value }
          : item
      )
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const id = form.titulo
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

      const arquivo = form.texto
        .split("\n")
        .filter((p) => p.trim() !== "")
        .map((p) => ({
          tipo: "paragrafo",
          texto: p
        }));

      const galeria = galleryImages
        .filter((img) => img.value.trim() !== "")
        .map((img, index) => ({
          id: `im${index + 1}`,
          url: img.value
        }));

      const newSpecie = {
        id,
        titulo: form.titulo,
        tipo: form.tipo,
        cor: form.cor.join(", "),
        crescimento: form.crescimento,
        tamanho: form.tamanho,
        nomeCientifico: form.nomeCientifico,
        imagem: form.imagem,
        arquivo,
        galeria
      };

      await createSpecies(newSpecie);

      alert("Espécie criada com sucesso!");

      navigate("/usersection");

    } catch (error) {
        if (
    error.message &&
    error.message.includes("local")
  ) {
    setShowLocalOnlyModal(true);
    return;
  }

  console.error(error);
  alert("Erro ao criar espécie.");
    }
  }

  return (
    <div id="mainDiv">
      <Header />

      <ContentComponent>

        <form
          className="userForms"
          onSubmit={handleSubmit}
        >

          <h3 id="specieFormTitle">
            Cadastro de nova espécie
          </h3>

          <p>
            Digite abaixo o nome vulgar da espécie.
          </p>

          <input
            type="text"
            id="inputSpecieName"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="digite o nome da especie aqui"
          />

          <p>
            Digite abaixo o nome científico da espécie
          </p>

          <input
            type="text"
            id="inputCientificName"
            name="nomeCientifico"
            value={form.nomeCientifico}
            onChange={handleChange}
            placeholder="digite aqui o nome científico"
          />

          <p>
            Abaixo, coloque o link da imagem ilustrativa da espécie
          </p>

          <input
            type="text"
            id="inputMainImage"
            name="imagem"
            value={form.imagem}
            onChange={handleChange}
            placeholder="cole aqui o link da imagem"
          />

          <div className="toDivide">

            <p>
              Selecione o porte da espécie
            </p>

            <div className="divRadio">

              <label>
                <input
                  type="radio"
                  name="tamanho"
                  value="grande"
                  onChange={handleChange}
                />
                Grande
              </label>

              <label>
                <input
                  type="radio"
                  name="tamanho"
                  value="medio"
                  onChange={handleChange}
                />
                Médio
              </label>

              <label>
                <input
                  type="radio"
                  name="tamanho"
                  value="pequeno"
                  onChange={handleChange}
                />
                Pequeno
              </label>

              <label>
                <input
                  type="radio"
                  name="tamanho"
                  value="medio/grande"
                  onChange={handleChange}
                />
                Médio/Grande
              </label>

              <label>
                <input
                  type="radio"
                  name="tamanho"
                  value="medio/pequeno"
                  onChange={handleChange}
                />
                Médio/Pequeno
              </label>

            </div>

          </div>

          <div className="toDivide">

            <p>
              Selecione a velocidade de crescimento
            </p>

            <div className="divRadio">

              <label>
                <input
                  type="radio"
                  name="crescimento"
                  value="rapido"
                  onChange={handleChange}
                />
                Rápido
              </label>

              <label>
                <input
                  type="radio"
                  name="crescimento"
                  value="lento"
                  onChange={handleChange}
                />
                Lento
              </label>

              <label>
                <input
                  type="radio"
                  name="crescimento"
                  value="medio"
                  onChange={handleChange}
                />
                Médio
              </label>

              <label>
                <input
                  type="radio"
                  name="crescimento"
                  value="medio/rapido"
                  onChange={handleChange}
                />
                Médio/Rápido
              </label>

              <label>
                <input
                  type="radio"
                  name="crescimento"
                  value="lento/medio"
                  onChange={handleChange}
                />
                Lento/Médio
              </label>

            </div>

          </div>

          <div className="toDivide">

            <p>
              Selecione a classificação da espécie
            </p>

            <div className="divRadio">

              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="Caducifolia"
                  onChange={handleChange}
                />
                Caducifólia
              </label>

              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="Perenifolia"
                  onChange={handleChange}
                />
                Perenifólia
              </label>

              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="Conifera"
                  onChange={handleChange}
                />
                Conífera
              </label>

            </div>

          </div>

          <div className="toDivide">

            <p>
              Selecione as possíveis cores
            </p>

            <div className="divRadio">

              <label><input type="checkbox" value="branca" onChange={handleColorChange}/>Branca</label>
              <label><input type="checkbox" value="cores quentes" onChange={handleColorChange}/>Cores quentes</label>
              <label><input type="checkbox" value="cores frias" onChange={handleColorChange}/>Cores frias</label>
              <label><input type="checkbox" value="verde claro" onChange={handleColorChange}/>Verde claro</label>
              <label><input type="checkbox" value="verde escuro" onChange={handleColorChange}/>Verde escuro</label>
              <label><input type="checkbox" value="verde" onChange={handleColorChange}/>Verde</label>
              <label><input type="checkbox" value="varias cores" onChange={handleColorChange}/>Várias cores</label>

            </div>

          </div>

          <p>
            Informações sobre a espécie
          </p>

          <textarea
            id="specieText"
            value={form.texto}
            onChange={(e) =>
              setForm({
                ...form,
                texto: e.target.value
              })
            }
            placeholder="Escreva aqui uma boa quantidade de informações sobre a espécie"
          />

          <p>
            Galeria de imagens
          </p>

          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="galleryInputContainer"
            >
              <input
                type="text"
                placeholder="cole aqui o link da imagem"
                value={image.value}
                onChange={(e) =>
                  updateImageInput(
                    image.id,
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="deleteImageInput"
                onClick={() =>
                  removeImageInput(image.id)
                }
              >
                X
              </button>
            </div>
          ))}

          <button
            type="button"
            id="more"
            onClick={addImageInput}
          >
            +
          </button>

          <div className="editSpecieButtonDiv">

            <div className="editSpecieButtonSubdiv">

              <button
                type="submit"
                id="post"
              >
                Postar
              </button>

              <button
                type="button"
                onClick={handleCancel}
              >
                Cancelar
              </button>

            </div>

          </div>

        </form>
        {showLocalOnlyModal && (
  <div className="modalBackground">

    <div className="userForms">

      <h3>
        Função indisponível
      </h3>

      <p>
        A criação de espécies está
        disponível apenas no ambiente
        local de desenvolvimento.
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

        <BackUserPageButton />

      </ContentComponent>

      <Footer />
    </div>
  );
}

export default AddSpecie;
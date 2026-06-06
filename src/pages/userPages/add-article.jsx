import Header from "../../components/HeaderComponent/Header";
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";
import BackUserButton from "../../components/BackUserPageButton/BackUserPageButton";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { createArticle } from "../../services/articlesService";

import "../form.css";

function AddArticle() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [texto, setTexto] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleCancel() {
    navigate("/usersection");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const conteudo = texto
      .split(/\n\s*\n/)
      .filter((bloco) => bloco.trim() !== "")
      .map((bloco) => {
        const imagemMatch = bloco.match(
          /^<img>(.*?)<\/img>$/
        );

        if (imagemMatch) {
          return {
            tipo: "imagem",
            src: imagemMatch[1].trim(),
          };
        }

        return {
          tipo: "paragrafo",
          texto: bloco.trim(),
        };
      });

    const novoArtigo = {
      titulo,
      imagem,
      conteudo,
    };

    try {
      const created = await createArticle(
        novoArtigo
      );

      console.log("Criado:", created);

      alert("Artigo criado!");

      navigate("/artigos");

    } catch (err) {

      if (
        err.message &&
        err.message.includes("local")
      ) {
        setShowModal(true);
        return;
      }

      console.error(err);
      alert("Erro ao criar artigo");
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

          <h3 id="addArticleTitle">
            Postagem de Novo Artigo
          </h3>

          <p>
            Digite o nome do artigo
          </p>

          <input
            type="text"
            value={titulo}
            onChange={(e) =>
              setTitulo(e.target.value)
            }
            placeholder="nome do artigo"
          />

          <p>
            Imagem principal do artigo
          </p>

          <input
            type="text"
            value={imagem}
            onChange={(e) =>
              setImagem(e.target.value)
            }
            placeholder="/navbarmobile/imagem.jpg"
          />

          <p>
            Escreva o artigo abaixo.
            <br />
            Use ENTER duas vezes para criar
            um novo parágrafo.
            <br />
            Para inserir imagens no texto:
          </p>

          <pre
            style={{
              background:
                "rgba(0,0,0,0.1)",
              padding: "1rem",
              maxWidth: "90%",
              overflowX: "auto",
            }}
          >
{`<img>/caminho/imagem.jpg</img>`}
          </pre>

          <textarea
            id="specieText"
            value={texto}
            onChange={(e) =>
              setTexto(e.target.value)
            }
            placeholder="Escreva o artigo aqui"
          />

          <div className="editArticleButtonDiv">

            <button
              type="submit"
              id="post"
            >
              Criar artigo
            </button>

            <button
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </button>

          </div>

        </form>

        <BackUserButton />

        {showModal && (
          <div className="modalBackground">
            <div className="userForms">

              <h3>
                Função indisponível
              </h3>

              <p>
                A criação de artigos está
                disponível apenas no ambiente
                local de desenvolvimento.
              </p>

              <p>
                No GitHub Pages os artigos são
                exibidos em modo de leitura.
              </p>

              <button
                onClick={() =>
                  setShowModal(false)
                }
              >
                Fechar
              </button>

            </div>
          </div>
        )}

      </ContentComponent>

      <Footer />
    </div>
  );
}

export default AddArticle;
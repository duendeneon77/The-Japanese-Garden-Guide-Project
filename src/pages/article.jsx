import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import ContentComponent from "../components/ContentComponent/Content";

import articles from "../../public/articles/artigos.json";

import "./article.css";

const base = import.meta.env.BASE_URL;

function Article() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [id]);

  const artigo = articles.find(
    (item) =>
      item.id === decodeURIComponent(id)
  );

  if (!artigo) {
    return (
      <div id="mainDiv">
        <Header />

        <ContentComponent>
          <h1>Artigo não encontrado</h1>

          <div className="articleNavigation">
            <Link
              to="/artigos"
              className="articleButton"
            >
              Voltar para os artigos
            </Link>

            <Link
              to="/"
              className="articleButton"
            >
              Home
            </Link>
          </div>
        </ContentComponent>

        <Footer />
      </div>
    );
  }

  return (
    <div id="mainDiv">
      <Header />

      <ContentComponent>
        <div className="articlePage">
          <h1 className="articleTitle">
            {artigo.titulo}
          </h1>

          <div className="articleText">
            <img
              className="articleImage"
              src={`${base}${artigo.imagem}`}
              alt={artigo.titulo}
            />

            {artigo.conteudo.map(
              (item, index) => {
                if (
                  item.tipo === "imagem"
                ) {
                  const isExternal =
                    item.src.startsWith(
                      "http"
                    );

                  return (
                    <img
                      key={index}
                      className="articleContentImage"
                      src={
                        isExternal
                          ? item.src
                          : `${base}${item.src.replace(
                              /^\//,
                              ""
                            )}`
                      }
                      alt=""
                    />
                  );
                }

                return (
                  <p key={index}>
                    {item.texto}
                  </p>
                );
              }
            )}
          </div>

          <div className="articleNavigation">
            <Link
              to="/artigos"
              className="articleButton"
            >
              Voltar para os artigos
            </Link>

            <Link
              to="/"
              className="articleButton"
            >
              Home
            </Link>
          </div>
        </div>
      </ContentComponent>

      <Footer />
    </div>
  );
}

export default Article;
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../components/HeaderComponent/Header";
import Footer from "../components/FooterComponent/Footer";
import ContentComponent from "../components/ContentComponent/Content";

import articles from "../../public/articles/artigos.json";

import "./article.css";

const base = import.meta.env.BASE_URL;

function Article() {
  const { id } = useParams();

  const [texto, setTexto] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [id]);

  const artigo = articles.find(
    item => item.id === decodeURIComponent(id)
  );

  useEffect(() => {
    if (!artigo) return;

    const loadArticle = async () => {
      try {
        const response = await fetch(
          `${base}articles/${artigo.arquivo}`
        );

        if (!response.ok) {
          throw new Error("Erro ao carregar artigo");
        }

        const content = await response.text();
        setTexto(content);
      } catch (error) {
        console.error(error);
      }
    };

    loadArticle();
  }, [artigo]);

  if (!artigo) {
    return (
      <div id="mainDiv">
        <Header />

        <ContentComponent>
          <h1>Artigo não encontrado</h1>

          <div className="articleNavigation">
            <Link to="/artigos" className="articleButton">
              Voltar para os artigos
            </Link>

            <Link to="/" className="articleButton">
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

            {texto
              .split(/\n\s*\n/)
              .filter(paragrafo => paragrafo.trim() !== "")
              .map((paragrafo, index) => (
                <p key={index}>
                  {paragrafo}
                </p>
              ))}

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
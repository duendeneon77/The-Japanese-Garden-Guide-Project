import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ArticleCard.css";

const base = import.meta.env.BASE_URL;

function ArticleCard({ artigo }) {
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch(
          `${base}articles/${artigo.arquivo}`
        );

        if (!response.ok) {
          throw new Error(
            `Não foi possível carregar: ${artigo.arquivo}`
          );
        }

        const content = await response.text();
        setTexto(content);
      } catch (error) {
        console.warn(
          "Erro ao carregar o artigo:",
          artigo.arquivo,
          error
        );
        setTexto("");
      }
    };

    loadArticle();
  }, [artigo.arquivo]);

  function resumo(texto, limite = 25) {
    if (!texto) return "";

    const palavras = texto.trim().split(/\s+/);

    if (palavras.length <= limite) return texto;

    return palavras.slice(0, limite).join(" ") + "...";
  }

  return (
    <div
      className="card"
      onClick={() =>
        navigate(`/article/${encodeURIComponent(artigo.id)}`)
      }
    >
      <img
        src={`${base}${artigo.imagem}`}
        alt={artigo.titulo}
      />

      <h2>{artigo.titulo}</h2>

      <p>{resumo(texto, 25)}</p>

      <Link
        to={`/article/${encodeURIComponent(artigo.id)}`}
        onClick={(e) => e.stopPropagation()}
      >
        Ler mais
      </Link>
    </div>
  );
}

export default ArticleCard;
import { useState, useEffect } from "react";
import './ArticleCard.css'

const base = import.meta.env.BASE_URL;

function ArticleCard({ artigo }) {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    const load = async () => {
      const articlesMap = import.meta.glob(
        "../articles/*.txt",
        {
          query: "?raw",
          import: "default",
        }
      );

      const file =
        articlesMap[`../articles/${artigo.arquivo}`];

      if (file) {
        const content = await file();
        setTexto(content);
      } else {
        console.warn(
          "Arquivo não encontrado:",
          artigo.arquivo
        );
      }
    };

    load();
  }, [artigo.arquivo]);

  function resumo(texto, limite = 25) {
    if (!texto) return "";

    const palavras = texto.split(" ");

    if (palavras.length <= limite) return texto;

    return palavras.slice(0, limite).join(" ") + "...";
  }

  return (
    <div className="card">
      <img
        src={`${base}${artigo.imagem}`}
        alt={artigo.titulo}
      />

      <h2>{artigo.titulo}</h2>

      <p>{resumo(texto, 25)}</p>

      <a href={`${base}artigo/${artigo.id}`}>
        Ler mais
      </a>
    </div>
  );
}

export default ArticleCard;
import { useState, useEffect } from "react";
import "./Carousel.css";
const base = import.meta.env.BASE_URL;

export default function Carousel() {
  const items = [
    {
      image: `${base}navbarmobile/carousel2.jpg`,
      title: "Espécies",
      text: "Conheça as espécies mais utilizadas nos jardins japoneses"
    },
    {
      image: `${base}navbarmobile/carousel1.jpg`,
      title: "Tipos de Jardim Japonês",
      text: "Conheça os tipos de jardim japonês, clique e saiba mais"
    },
    {
      image: `${base}navbarmobile/carousel5.jpg`,
      title: "Filosofia",
      text: "Clique e saiba mais sobre a filosofia por trás do jardim japonês"
    },
    {
      image: `${base}navbarmobile/carousel6.jpg`,
      title: "Adaptações para climas quentes",
      text: "Clique e saiba como substituir espécies para que mantenha o colorido e as formas do jardim japonês"
    },
    {
      image: `${base}navbarmobile/carousel3.jpg`,
      title: "Itens usados para compor o Jardim Japonês",
      text: "No jardim japonês, as plantas são só parte da composição, clique e conheça a variedade de items que são usados nas composições."
    },
    {
      image: `${base}navbarmobile/carousel4.jpg`,
      title: "Composições",
      text: "No jardim japonês, devemos saber compor, clique e saiba como compor."
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrentSlide((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  //aqui é o que faz ele ligar sozinho
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 7000); 

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carouselMainDiv">
    <div className="carousel">

      <div className="carousel-fade">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={item.image} alt="" className="carousel-img" />

            <h2 className="carousel-title">{item.title}</h2>
            <p className="carousel-text">{item.text}</p>

          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>

    </div>
    </div>
  );
}
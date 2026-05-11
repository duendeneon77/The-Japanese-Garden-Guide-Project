import "./SpeciesCard.css";

const base = import.meta.env.BASE_URL;

function SpeciesCard({ species }) {
    return (
        <div className="specieCard">
            <img
            src={`${base}${species.imagem}`}
            alt={species.titulo}
            />

            <h2>{species.titulo}</h2>

            <a href={`${base}Species/${species.id}`}>
                Ler mais
            </a>
        </div>
    );
}

export default SpeciesCard;
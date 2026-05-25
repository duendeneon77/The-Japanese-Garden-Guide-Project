import "./SpeciesCard.css";
import {Link} from 'react-router-dom'

const base = import.meta.env.BASE_URL;

function SpeciesCard({ species }) {
    return (
        <div className="specieCard">
            <img
            src={`${base}${species.imagem}`}
            alt={species.titulo}
            />

            <h2>{species.titulo}</h2>

            <Link to={`/specie/${species.id}`}>
                Ler mais
            </Link>
        </div>
    );
}

export default SpeciesCard;
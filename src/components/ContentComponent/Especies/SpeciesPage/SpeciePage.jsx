import species from "../Species/species.json"
import { useParams } from "react-router-dom"
import './SpeciesPage.css'

const base = import.meta.env.BASE_URL;

function SpeciesPage(){

    const { id } = useParams()

    const specie = species.find(
        (item) => item.id === id
    )

    if(!specie){
        return <h1>Specie not found</h1>
    }

    return (
        <div className="speciesPageDiv">

            <h1>{specie.titulo}</h1>

            <img
                src={`${base}${specie.imagem}`}
                alt={specie.titulo}
            />
            <p className="cientName"> A espécie tem o nome vulgar de {specie.titulo}, mas seu nome científico é " {specie.nomeCientifico} ".</p>

            <table>
                <tbody>
                    <tr>
                        <td>Tipo:</td>
                        <td>{specie.tipo}</td>
                    </tr>
                    <tr>
                        <td>Cor:</td>
                        <td>{specie.cor}</td>
                    </tr>
                    <tr>
                        <td>Crescimento:</td>
                        <td>{specie.crescimento}</td>
                    </tr>
                    <tr>
                        <td>Tamanho:</td>
                        <td>{specie.tamanho}</td>
                    </tr>
                </tbody>
            </table>
            <p className="specieText">{specie.arquivo}</p>

        </div>
    )
}

export default SpeciesPage
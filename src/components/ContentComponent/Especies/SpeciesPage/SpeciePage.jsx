import species from "../../../../../public/species/species.json"
import { useParams } from "react-router-dom"
import "./SpeciesPage.css"
import { useState, useEffect } from "react"

const base = import.meta.env.BASE_URL

function SpeciesPage() {

    const { id } = useParams()

    const specie = species.find(
        (item) => item.id === id
    )

    const [selectedIndex, setSelectedIndex] = useState(null)

    if (!specie) {
        return <h1>Specie not found</h1>
    }

    function closeModal() {
        setSelectedIndex(null)
    }

    function nextImage(e) {
        e.stopPropagation()

        setSelectedIndex(prev =>
            prev === specie.galeria.length - 1 ? 0 : prev + 1
        )
    }

    function prevImage(e) {
        e.stopPropagation()

        setSelectedIndex(prev =>
            prev === 0 ? specie.galeria.length - 1 : prev - 1
        )
    }

    useEffect(() => {

        if (selectedIndex === null) return

        function handleKeyDown(e) {

            if (e.key === "Escape") {
                setSelectedIndex(null)
            }

            if (e.key === "ArrowRight") {
                setSelectedIndex(prev =>
                    prev === specie.galeria.length - 1 ? 0 : prev + 1
                )
            }

            if (e.key === "ArrowLeft") {
                setSelectedIndex(prev =>
                    prev === 0 ? specie.galeria.length - 1 : prev - 1
                )
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }

    }, [selectedIndex, specie])

    return (
        <div className="speciesPageDiv">

            <h1>{specie.titulo}</h1>

            <img
                className="specieImg"
                src={`${base}${specie.imagem}`}
                alt={specie.titulo}
            />

            <p className="cientName">
                A espécie tem o nome vulgar de {specie.titulo}, mas seu nome científico é "{specie.nomeCientifico}".
            </p>

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

            <div className="specieText">

                {specie.arquivo?.map((item, index) => {

                    if (item.tipo === "paragrafo") {
                        return (
                            <p key={index} className="specieParagraph">
                                {item.texto}
                            </p>
                        )
                    }

                    if (item.tipo === "imagem") {
                        return (
                            <img
                                key={index}
                                className="articleImage"
                                src={`${base}${item.src.replace(/^\//, "")}`}
                                alt=""
                            />
                        )
                    }

                    return null

                })}

            </div>

            <div className="totalGalery">

                <p className="pGalery">
                    Clique nas imagens abaixo para ampliar
                </p>

                <div className="galery">

                    {specie.galeria.map((img, index) => (
                        <img
                            key={img.id}
                            className="galeryImg"
                            src={`${base}${img.url}`}
                            alt={specie.titulo}
                            onClick={() => setSelectedIndex(index)}
                        />
                    ))}

                </div>

                {selectedIndex !== null && (

                    <div
                        className="modal"
                        onClick={closeModal}
                    >

                        <div
                            className="modalContent"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                className="closeBtn"
                                onClick={closeModal}
                            >
                                ✕
                            </button>

                            <img
                                className="modalImg"
                                src={`${base}${specie.galeria[selectedIndex].url}`}
                                alt={specie.titulo}
                            />

                            <div className="modalControls">

                                <button onClick={prevImage}>
                                    ←
                                </button>

                                <button onClick={nextImage}>
                                    →
                                </button>

                            </div>

                        </div>

                    </div>

                )}

                <p className="pGalery">
                    Caso use teclas, use ESC para fechar
                </p>

            </div>

        </div>
    )
}

export default SpeciesPage
import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import BackHomeButton from "../../components/BackHomeButton/BackHomeButton"
import './morePages.css'

function BridgesPage() {

    const base = import.meta.env.BASE_URL;

    return (
        <div id="mainDiv">
            <Header />
            <ContentComponent>

                <div id="contentMoreDiv">
                <h1>A simbologia das pontes no Jardim Japonês</h1>

                <p className="textParagraph">
                As pontes ocupam um lugar especial nos jardins japoneses, desempenhando tanto uma função prática quanto um profundo papel simbólico. Muito além de permitir a travessia de lagos, riachos e cursos d'água, elas representam jornadas espirituais, transições entre diferentes estados de consciência e a conexão entre o mundo humano e o mundo natural. Em muitos jardins, atravessar uma ponte é visto como um ato simbólico de transformação e reflexão.
                </p>
                <img
                    src={`${base}bridgeImages/brid1.png`}
                    alt=""
                    id="mainImage"
                />

                <p className="textParagraph">
                A presença das pontes nos jardins japoneses está ligada às influências do xintoísmo, do budismo e da tradição paisagística chinesa. Essas correntes filosóficas entendem a travessia de um obstáculo natural como uma metáfora para o crescimento pessoal, o aprendizado e a busca pela iluminação. Por esse motivo, as pontes costumam ser posicionadas em locais cuidadosamente planejados, convidando o visitante a desacelerar e contemplar a paisagem ao seu redor.
                </p>

                <p className="textParagraph">
                Diversos tipos de pontes podem ser encontrados nos jardins japoneses. As mais comuns são as pontes de madeira, conhecidas como hashi, que frequentemente apresentam linhas simples e elegantes. Sua aparência discreta busca harmonizar-se com o ambiente natural, evitando chamar mais atenção do que os elementos da paisagem que as cercam.
                </p>
                <img
                    src={`${base}bridgeImages/brid2.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Outro modelo tradicional é a ponte arqueada, chamada sori-bashi. Seu formato curvo cria uma silhueta elegante sobre a água e simboliza a ascensão espiritual. Em muitas interpretações, a curva representa a passagem do mundo material para um estado de maior compreensão e equilíbrio. Essas pontes são especialmente populares em jardins inspirados na estética clássica do período Edo.
                </p>

                <p className="textParagraph">
                Também são comuns as pontes de pedra, conhecidas como ishibashi. Construídas com blocos naturais cuidadosamente selecionados, elas transmitem uma sensação de permanência, estabilidade e conexão com a natureza. Muitas vezes são utilizadas para atravessar riachos estreitos ou conectar pequenas ilhas artificiais dentro dos lagos dos jardins.
                </p>

                <p className="textParagraph">
                Alguns jardins utilizam ainda os chamados tobi-ishi, ou "pedras de passagem". Embora não sejam pontes no sentido tradicional, funcionam como caminhos sobre a água ou áreas úmidas. O visitante precisa caminhar lentamente e prestar atenção a cada passo, incentivando uma experiência contemplativa e consciente do ambiente.
                </p>

                <p className="textParagraph">
                A filosofia por trás das pontes está intimamente relacionada ao conceito de jornada. Em vez de serem vistas apenas como estruturas utilitárias, elas simbolizam a travessia entre diferentes etapas da vida. Cruzar uma ponte pode representar a superação de dificuldades, a aquisição de conhecimento ou a passagem de um estado de inquietação para outro de serenidade e equilíbrio.
                </p>
                <img
                    src={`${base}bridgeImages/brid3.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                No budismo japonês, as pontes frequentemente simbolizam o caminho em direção à iluminação. A água sob a ponte pode representar as incertezas da vida, enquanto a própria estrutura oferece uma passagem segura rumo a uma compreensão mais profunda da existência. Essa interpretação é especialmente comum em jardins ligados a templos e espaços de meditação.
                </p>

                <p className="textParagraph">
                As pontes também possuem forte ligação com o conceito de ma, uma importante ideia estética japonesa que valoriza os espaços de transição. Ao atravessar uma ponte, o visitante deixa um ambiente para trás e entra em outro, criando uma pausa natural que favorece a contemplação e a apreciação gradual da paisagem.
                </p>

                <p className="textParagraph">
                Em muitos jardins tradicionais, as pontes conectam pequenas ilhas artificiais localizadas em lagos. Essas ilhas frequentemente representam terras sagradas da mitologia japonesa ou chinesa, como a lendária Ilha dos Imortais. Dessa forma, atravessar a ponte simboliza uma aproximação ao mundo espiritual e aos ideais de longevidade, sabedoria e harmonia.
                </p>

                <p className="textParagraph">
                Entre os jardins mais famosos do Japão por suas pontes destaca-se o jardim do templo Byodo-in, em Uji. As elegantes passagens sobre os lagos refletem a arquitetura do Pavilhão da Fênix e contribuem para a atmosfera serena inspirada na Terra Pura budista.
                </p>
                <img
                    src={`${base}bridgeImages/brid4.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                O Kenroku-en, em Kanazawa, possui diversas pontes de pedra e madeira que conectam diferentes áreas do jardim. Cada travessia oferece novos ângulos da paisagem e exemplifica o princípio japonês de revelar a beleza gradualmente ao visitante, em vez de apresentá-la de uma só vez.
                </p>

                <p className="textParagraph">
                Outro exemplo célebre é o jardim do templo Heian Jingu, em Kyoto, onde pontes arqueadas vermelhas atravessam extensos lagos ornamentais. Além de sua função estética, essas estruturas criam fortes contrastes visuais com a vegetação e reforçam a simbologia da passagem entre diferentes espaços do jardim.
                </p>

                <p className="textParagraph">
                O Koraku-en, em Okayama, também é conhecido por suas belas pontes de madeira que cruzam riachos e lagos cuidadosamente projetados. As pontes integram-se ao percurso do visitante, guiando seu olhar e seus movimentos por uma sequência de cenários planejados para despertar contemplação e tranquilidade.
                </p>
                <img
                    src={`${base}bridgeImages/brid5.png`}
                    alt=""
                    id="illustrativeImage"png
                />

                <p className="textParagraph">
                Nos jardins japoneses, as pontes representam muito mais do que simples caminhos sobre a água. Elas simbolizam mudança, crescimento, conexão e equilíbrio. Ao unir diferentes partes da paisagem, convidam o visitante a refletir sobre sua própria jornada, transformando cada travessia em uma experiência carregada de significado espiritual, filosófico e estético.
                </p>
                </div>
            <BackHomeButton/>
                                

            </ContentComponent>

            <Footer />
        </div>
    );
}

export default BridgesPage;
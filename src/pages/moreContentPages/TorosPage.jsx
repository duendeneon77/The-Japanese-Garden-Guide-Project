import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import BackHomeButton from "../../components/BackHomeButton/BackHomeButton"
import './morePages.css'

function ToroPage() {

    const base = import.meta.env.BASE_URL;

    return (
        <div id="mainDiv">
            <Header />
            <ContentComponent>
                <div id="contentMoreDiv">
                <h1>Torô, a luminária de pedra</h1>

                <p className="textParagraph">
                As luminárias de pedra, conhecidas no Japão como tōrō (灯籠), são um dos elementos mais reconhecíveis dos jardins japoneses tradicionais. Originalmente utilizadas para iluminar caminhos e áreas sagradas durante cerimônias religiosas, elas evoluíram ao longo dos séculos para se tornarem importantes símbolos de espiritualidade, orientação e contemplação. Atualmente, os tōrō são considerados peças fundamentais da estética dos jardins japoneses, contribuindo tanto para a beleza visual quanto para a atmosfera meditativa desses espaços.
                </p>
                <img
                    src={`${base}toroImages/toro1.png`}
                    alt=""
                    id="mainImage"
                />

                <p className="textParagraph">
                A origem das luminárias de pedra está ligada ao budismo, que chegou ao Japão por volta do século VI. Nos templos budistas, elas eram utilizadas para abrigar pequenas chamas que simbolizavam a luz dos ensinamentos de Buda. Com o passar do tempo, seu uso expandiu-se para santuários xintoístas e posteriormente para jardins particulares, especialmente durante os períodos Muromachi e Momoyama, quando a arte paisagística japonesa atingiu um grande desenvolvimento.
                </p>

                <p className="textParagraph">
                O tōrō representa simbolicamente a luz que guia o indivíduo através das incertezas da vida. Em muitas interpretações budistas, a chama protegida dentro da luminária simboliza a sabedoria capaz de dissipar a ignorância e conduzir o ser humano em direção ao conhecimento e à iluminação espiritual. Por essa razão, sua presença em jardins frequentemente sugere um convite à reflexão e ao autoconhecimento.
                </p>

                <p className="textParagraph">
                A filosofia japonesa também associa as luminárias de pedra ao conceito de equilíbrio entre os elementos da natureza. Elas unem pedra, fogo, ar e espaço em uma única estrutura, criando uma representação simbólica da harmonia universal. Mesmo quando não possuem uma chama acesa, continuam evocando essa ideia de equilíbrio e serenidade.
                </p>
                <img
                    src={`${base}toroImages/toro2.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Tradicionalmente, os tōrō são esculpidos em granito, basalto ou outras pedras resistentes encontradas nas regiões montanhosas do Japão. Os artesãos procuram materiais capazes de envelhecer de forma natural, permitindo o surgimento gradual de musgos, líquens e marcas do tempo. Esse envelhecimento é valorizado pela estética japonesa, pois reforça a sensação de antiguidade e integração com a paisagem.
                </p>

                <p className="textParagraph">
                A estrutura de uma luminária de pedra geralmente é composta por várias partes distintas. A base representa a terra, o corpo simboliza o mundo material, a câmara da luz representa o fogo e o conhecimento, enquanto o telhado e o topo remetem aos céus e ao mundo espiritual. Essa composição reflete conceitos budistas relacionados à conexão entre o plano terreno e o transcendente.
                </p>

                <p className="textParagraph">
                Existem diversos tipos de tōrō utilizados nos jardins japoneses. Um dos mais conhecidos é o kasuga-tōrō, caracterizado por sua base alta e elegante. Originalmente encontrado em templos e santuários, tornou-se popular também em jardins ornamentais devido à sua aparência refinada e equilibrada.
                </p>
                <img
                    src={`${base}toroImages/toro3.png`}
                    alt=""
                    id="mainImage"
                />

                <p className="textParagraph">
                Outro modelo muito apreciado é o yukimi-tōrō, conhecido como "luminária para contemplação da neve". Possui um telhado largo e geralmente é colocado próximo à água. Durante o inverno, a neve acumulada sobre sua cobertura cria uma imagem considerada especialmente bela na tradição japonesa. Por esse motivo, tornou-se um dos tipos mais representativos dos jardins de passeio.
                </p>

                <p className="textParagraph">
                Também existem os oki-tōrō, luminárias menores posicionadas diretamente sobre o solo, e os ikekomi-tōrō, cujas bases são parcialmente enterradas. Cada modelo é escolhido de acordo com o estilo do jardim e com o efeito visual desejado pelo paisagista.
                </p>

                <p className="textParagraph">
                Nos jardins japoneses, a localização das luminárias é cuidadosamente planejada. Raramente são colocadas em posições centrais ou excessivamente destacadas. Em vez disso, costumam surgir discretamente entre árvores, próximo a lagos, ao lado de caminhos ou junto a pontes. Essa abordagem segue o princípio estético de sugerir a beleza em vez de exibi-la de maneira explícita.
                </p>
                <img
                    src={`${base}toroImages/toro4.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                As luminárias de pedra possuem uma forte ligação com a cerimônia do chá japonesa. Nos jardins que conduzem à casa de chá, conhecidos como roji, os tōrō auxiliavam os visitantes a encontrar o caminho durante o entardecer ou à noite. Mais importante do que a iluminação prática era sua função simbólica de preparar mentalmente o visitante para uma experiência de tranquilidade e contemplação.
                </p>

                <p className="textParagraph">
                Entre os jardins mais famosos do Japão por suas luminárias destaca-se o Kenroku-en, em Kanazawa. O jardim abriga o célebre Kotoji-tōrō, uma luminária de pedra com duas pernas de comprimentos diferentes que se tornou um dos símbolos mais reconhecidos da paisagem japonesa. Sua imagem é frequentemente associada ao próprio jardim e aparece em inúmeras fotografias e materiais turísticos.
                </p>

                <p className="textParagraph">
                O jardim do templo Katsura Rikyu, em Kyoto, também é conhecido pela utilização refinada de tōrō distribuídos ao longo dos caminhos e próximos aos espelhos d'água. As luminárias integram-se discretamente à paisagem, reforçando a atmosfera de simplicidade e elegância característica da arquitetura japonesa tradicional.
                </p>

                <p className="textParagraph">
                Outro exemplo notável pode ser encontrado no templo Sanbo-in, parte do complexo de Daigo-ji, em Kyoto. Seu jardim histórico utiliza luminárias de pedra para destacar pontos estratégicos da composição paisagística, criando relações visuais entre rochas, árvores, água e construções.
                </p>
                <img
                    src={`${base}toroImages/toro5.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Nos jardins japoneses, os tōrō são muito mais do que objetos decorativos. Eles representam a luz da sabedoria, a passagem do tempo, a espiritualidade e a harmonia entre os elementos da natureza. Sua presença discreta, mas significativa, ajuda a criar ambientes de contemplação e serenidade, tornando as luminárias de pedra uma das expressões mais profundas da filosofia estética japonesa.
                </p>
                </div>

            <BackHomeButton/>
            </ContentComponent>
            

            <Footer />
        </div>
    );
}

export default ToroPage;
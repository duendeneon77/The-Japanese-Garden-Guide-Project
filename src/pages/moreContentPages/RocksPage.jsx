import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import BackHomeButton from "../../components/BackHomeButton/BackHomeButton"
import './morePages.css'

function RocksPage() {

    const base = import.meta.env.BASE_URL;

    return (
        <div id="mainDiv">
            <Header />
            <ContentComponent>
                <div id="contentMoreDiv">
                <h1>A importancia das pedras no Jardim Japonês</h1>
                
                <p className="textParagraph">
                As pedras são um dos elementos mais importantes dos jardins japoneses, sendo consideradas a estrutura fundamental sobre a qual todo o restante do jardim é organizado. Na tradição paisagística do Japão, as pedras representam a permanência, a estabilidade e a força da natureza, contrastando com elementos mais transitórios, como a água, as flores e as estações do ano. Muitos mestres jardineiros afirmam que a disposição das pedras é a alma do jardim, pois elas estabelecem o equilíbrio visual e espiritual do espaço.
                </p>
                <img
                    src={`${base}rocksImages/rock1.png`}
                    alt=""
                    id="mainImage"
                />

                <p className="textParagraph">
                A importância das pedras remonta às antigas crenças xintoístas, nas quais determinados rochedos eram vistos como moradas de espíritos divinos, conhecidos como kami. Antes mesmo do surgimento dos jardins ornamentais, pedras naturais já eram utilizadas como objetos de veneração religiosa. Com o desenvolvimento da cultura japonesa e a influência do budismo, especialmente do Zen Budismo, as pedras passaram a ser empregadas para representar montanhas, ilhas, cachoeiras e outros elementos naturais em versões reduzidas e simbólicas.
                </p>

                <p className="textParagraph">
                Diversos tipos de pedra são utilizados nos jardins japoneses. Entre as mais valorizadas estão as rochas vulcânicas, o granito, o basalto e as pedras sedimentares moldadas naturalmente pela ação da água e do vento. Pedras com formatos irregulares, superfícies envelhecidas e sinais de erosão costumam ser preferidas por transmitirem uma sensação de antiguidade e naturalidade. Em muitos casos, a aparência da pedra é considerada mais importante do que sua composição geológica.
                </p>
                <img
                    src={`${base}rocksImages/rock2.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Tradicionalmente, as pedras são retiradas de rios, montanhas e regiões costeiras do Japão. Durante séculos, mestres jardineiros procuraram exemplares que apresentassem formas únicas e harmoniosas, muitas vezes transportando blocos extremamente pesados por grandes distâncias. Algumas pedras eram tão valorizadas que recebiam nomes próprios e eram tratadas como verdadeiras obras de arte natural.
                </p>

                <p className="textParagraph">
                A filosofia por trás do uso das pedras está profundamente ligada aos conceitos estéticos japoneses de wabi-sabi e shizen. O wabi-sabi valoriza a beleza da imperfeição, da simplicidade e da passagem do tempo, enquanto o conceito de shizen busca reproduzir a natureza de maneira autêntica, evitando formas excessivamente artificiais. Por isso, as pedras raramente são colocadas de maneira simétrica ou geométrica. Em vez disso, elas são organizadas para parecer que sempre estiveram naquele local.
                </p>

                <p className="textParagraph">
                Nos jardins zen, conhecidos como karesansui ou jardins secos, as pedras assumem um papel ainda mais simbólico. Cercadas por cascalho cuidadosamente rastelado, elas podem representar ilhas em um oceano, montanhas surgindo das nuvens ou até conceitos abstratos relacionados à meditação e à iluminação espiritual. O significado exato muitas vezes é deixado para a interpretação do observador, incentivando a contemplação e a reflexão pessoal.
                </p>

                <p className="textParagraph">
                Uma das composições mais tradicionais é o agrupamento de três pedras, conhecido como sanzon-seki. Nessa configuração, uma pedra central maior é acompanhada por duas pedras menores, formando um conjunto equilibrado que pode simbolizar uma tríade budista, uma família ou elementos complementares da natureza. Esse arranjo tornou-se uma das bases do design clássico dos jardins japoneses.
                </p>
                <img
                    src={`${base}rocksImages/rock3.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Entre os jardins mais famosos do Japão pela utilização magistral das pedras destaca-se o Ryoan-ji, localizado em Kyoto. Seu célebre jardim seco apresenta quinze pedras distribuídas sobre um leito de cascalho branco. A composição é considerada uma das maiores obras-primas do Zen Budismo e continua despertando debates sobre seu significado há séculos.
                </p>

                <p className="textParagraph">
                Outro exemplo notável é o Daisen-in, também em Kyoto. Seu jardim seco utiliza pedras para representar uma jornada simbólica da vida humana, com formações que evocam montanhas, rios e quedas d'água. A disposição das rochas cria uma narrativa visual que pode ser percorrida através da contemplação.
                </p>
                <img
                    src={`${base}rocksImages/rock4.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                O jardim do templo Ginkaku-ji, conhecido como Pavilhão de Prata, também é famoso por suas composições minerais. Ali, pedras e areia são utilizadas para criar paisagens simbólicas que representam montanhas e corpos d'água, integrando-se harmoniosamente à arquitetura e à vegetação ao redor.
                </p>

                <p className="textParagraph">
                Já o Kenroku-en, em Kanazawa, considerado um dos três jardins mais belos do Japão, emprega grandes rochas naturais para criar cenários que lembram paisagens montanhosas em miniatura. As pedras trabalham em conjunto com lagos, pontes e árvores para reproduzir a grandiosidade da natureza em escala reduzida.
                </p>

                <p className="textParagraph">
                Nos jardins japoneses, portanto, as pedras são muito mais do que elementos decorativos. Elas representam a essência da natureza, a passagem do tempo, a espiritualidade e a busca pela harmonia. Sua seleção cuidadosa e seu posicionamento estratégico transformam simples rochas em símbolos carregados de significado cultural, filosófico e artístico, tornando-as indispensáveis para a identidade dos jardins tradicionais do Japão.
                </p>

                <img
                    src={`${base}rocksImages/rock5.png`}
                    alt="rocks in japanese garden"
                    id="illustrativeImage"
                />
                
                </div>
            <BackHomeButton/>
            </ContentComponent>

            <Footer />
        </div>
    );
}

export default RocksPage;
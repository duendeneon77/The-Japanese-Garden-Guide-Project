import ContentComponent from "../../components/ContentComponent/Content";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import BackHomeButton from "../../components/BackHomeButton/BackHomeButton"
import './morePages.css'

function WaterPage() {

    const base = import.meta.env.BASE_URL;

    return (
        <div id="mainDiv">
            <Header />
            <ContentComponent>
                <div id="contentMoreDiv">
                <h1>A importancia da água no jardim japonês</h1>

               <p className="textParagraph">
                A água é um dos elementos mais importantes dos jardins japoneses, sendo considerada um símbolo de vida, renovação e movimento. Desde os primeiros jardins criados pela aristocracia japonesa até os projetos contemporâneos, a presença da água desempenha um papel fundamental na construção da paisagem e na transmissão de significados filosóficos e espirituais. Seja na forma de lagos, riachos, cachoeiras ou fontes, a água traz dinamismo ao jardim e estabelece uma conexão direta com os ciclos da natureza.
                </p>
                <img
                    src={`${base}waterImages/wat1.png`}
                    alt=""
                    id="mainImage"
                />

                <p className="textParagraph">
                Na tradição japonesa, a água representa a fluidez da existência e a constante transformação do mundo. Diferentemente das pedras, que simbolizam estabilidade e permanência, a água está sempre em movimento, lembrando que todas as coisas estão sujeitas à mudança. Essa ideia possui forte relação com os ensinamentos budistas sobre a impermanência da vida e a necessidade de aceitar as transformações naturais do tempo.
                </p>

                <p className="textParagraph">
                As influências do xintoísmo também contribuíram para a importância da água nos jardins japoneses. Nessa religião, rios, nascentes e cachoeiras são frequentemente considerados locais sagrados habitados por espíritos da natureza, conhecidos como kami. A água é vista como um elemento purificador, capaz de remover impurezas físicas e espirituais, razão pela qual rituais de purificação com água continuam sendo comuns em santuários japoneses.
                </p>

                <p className="textParagraph">
                Nos jardins tradicionais, a água é utilizada para representar paisagens naturais em miniatura. Um lago pode simbolizar o oceano, enquanto pequenos riachos reproduzem rios de montanha. Essa técnica permite condensar a grandiosidade da natureza em espaços relativamente reduzidos, criando a sensação de que o visitante está observando uma paisagem muito maior do que realmente é.
                </p>

                <p className="textParagraph">
                Os lagos ocupam uma posição central em muitos jardins japoneses. Além de refletirem o céu, as árvores e as construções ao redor, ampliando visualmente o espaço, eles servem como pontos de contemplação. A superfície tranquila da água cria uma atmosfera de serenidade que incentiva a observação silenciosa e a reflexão.
                </p>
                <img
                    src={`${base}waterImages/wat2.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                As cachoeiras também possuem grande significado simbólico. Sua água em constante queda representa energia, renovação e continuidade. Em alguns jardins, as cachoeiras simbolizam rios nascendo nas montanhas, enquanto em outros representam desafios e obstáculos que precisam ser superados ao longo da jornada da vida.
                </p>

                <p className="textParagraph">
                Os riachos desempenham uma função semelhante, conduzindo o olhar do visitante através da paisagem. Seus percursos sinuosos imitam os cursos naturais dos rios e reforçam a ideia de que a natureza não segue linhas perfeitamente retas. O som suave da água corrente contribui para criar um ambiente relaxante e contemplativo.
                </p>

                <p className="textParagraph">
                A filosofia estética japonesa busca evitar a artificialidade excessiva na utilização da água. Lagos e riachos costumam apresentar formas orgânicas e margens irregulares, como se tivessem sido moldados naturalmente ao longo de séculos. O objetivo não é demonstrar a habilidade humana em controlar a natureza, mas sim criar uma composição que pareça existir espontaneamente.
                </p>
                <img
                    src={`${base}waterImages/wat3.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Em jardins secos, conhecidos como karesansui, a água pode estar presente apenas de maneira simbólica. Nesses espaços, cascalhos e areias cuidadosamente rastelados representam rios, lagos ou oceanos. Mesmo sem água real, a ideia de fluxo e movimento continua presente, demonstrando a importância conceitual desse elemento na paisagem japonesa.
                </p>

                <p className="textParagraph">
                Entre os jardins mais famosos do Japão pela utilização da água destaca-se o Kenroku-en, em Kanazawa. Seus extensos lagos, canais e riachos criam cenários que mudam constantemente conforme as estações do ano. A água conecta diferentes áreas do jardim e contribui para sua reputação como uma das mais belas paisagens do país.
                </p>

                <p className="textParagraph">
                O Koraku-en, em Okayama, também utiliza grandes espelhos d'água para ampliar visualmente a paisagem e criar reflexos impressionantes. Já o jardim do templo Byodo-in, em Uji, foi projetado para evocar a Terra Pura budista, utilizando um lago central que reflete a arquitetura do famoso Pavilhão da Fênix.
                </p>
                <img
                    src={`${base}waterImages/wat4.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Outro exemplo marcante é o jardim do Palácio Imperial de Katsura, em Kyoto. Seus lagos e canais foram cuidadosamente planejados para revelar diferentes perspectivas ao longo do percurso, demonstrando a maestria dos paisagistas japoneses na integração entre água, arquitetura e vegetação.
                </p>

                <p className="textParagraph">
                Entre os habitantes mais admirados dos lagos dos jardins japoneses estão as carpas koi. Originárias de variedades ornamentais da carpa comum, elas foram selecionadas ao longo de gerações para apresentar cores vibrantes e padrões únicos. Atualmente, são consideradas símbolos de prosperidade, perseverança, longevidade e boa sorte.
                </p>

                <p className="textParagraph">
                A associação das carpas com a perseverança tem origem em uma antiga lenda chinesa amplamente difundida no Japão. Segundo a tradição, uma carpa que conseguisse nadar contra a correnteza e ultrapassar uma grande cachoeira seria transformada em um dragão. Por isso, as koi tornaram-se símbolos da determinação necessária para superar dificuldades e alcançar objetivos importantes.
                </p>
                <img
                    src={`${base}waterImages/wat5.png`}
                    alt=""
                    id="illustrativeImage"
                />

                <p className="textParagraph">
                Nos jardins japoneses, as carpas também contribuem para a sensação de vida e movimento. Seus deslocamentos lentos pela água criam padrões em constante mudança, complementando a tranquilidade da paisagem. A observação desses peixes é frequentemente associada à meditação e ao relaxamento, tornando-os uma presença tão apreciada quanto os próprios lagos que habitam.
                </p>

                <p className="textParagraph">
                A água, portanto, é muito mais do que um elemento decorativo nos jardins japoneses. Ela simboliza transformação, purificação, continuidade e harmonia com a natureza. Quando combinada com pedras, pontes, vegetação e carpas ornamentais, cria paisagens que convidam à contemplação e refletem séculos de filosofia, espiritualidade e tradição artística japonesa.
                </p>
                </div>

            <BackHomeButton/>
            </ContentComponent>

            <Footer />
        </div>
    );
}

export default WaterPage;
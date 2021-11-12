import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Faq from "../components/Faq"
import Contact from "../components/contact"
import Jaktodziala from "../components/Jaktodziala"
import Pompa from "../components/pompa"
import Brands from "../components/brands"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import garden from "../images/garden.svg"
import money_save from "../images/money_save.svg"
import planet from "../images/planet.svg"
//import solar_panel from "../images/solar-panel.svg"


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const IndexPage = () => { 
  const data = useStaticQuery( graphql`
  query {
    file(relativePath: {eq: "sky_9_1.png"}) {
      childImageSharp {
        fluid (fit: COVER){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

const useStyles = makeStyles((theme) => ({
  root: {
      '& .MuiInput-underline:after': {
          borderBottomColor: '#11B91B',
          },
      '& label.Mui-focused': {
          color: '#11B91B',
          },
  },
  outlined:{
      borderColor: 'rgba(17, 185, 27, 0.5)',
      color: '#11B91B',
  },
  textPrimary:{
      color: '#11B91B'
  },
 
  
}));
const classes = useStyles();
  return(
  <Layout>
    <SEO 
      title="Instalacje fotowoltaiczne, monterzy fotowoltaiki Zielona Góra lubuskie" 
      description="Firma ZieloneTechnologie.net z Zielonej Góry oferuje doradztwo i montaż paneli fotowoltaicznych na terenie województwa lubuskiego. Zapraszamy do kontaktu"
    />
   <section className="has_img_bg" id="home">
    <div className="img_background">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="A corgi smiling happily"
      />
    </div>
     <div className="container">
        <Welcome>Oblicz jak zmniejszyć rachunki za prąd do 0zł!</Welcome>
        <Fcalc />
     </div>
   </section>
  <Pompa />
  <section id="pros" className="green_gradient">
    <div className="container">
      <div className="section-title">
        <h2>Jakie są korzyści z Fotowoltaiki?</h2>
      </div>
    <div>
      <ul className="pros-container">
        <li>
          <div>
            <img src={garden} width="64" height="64" alt="garden"/> 
          </div>
            <div>
            Bądź niezależny energetycznie
              </div>
            </li>
        <li>
        <div>
            <img src={money_save} width="64" height="64" alt="money"/> 
          </div>
            <div>Redukuj rachunki za prąd do 0zł</div></li>
        <li>
        <div>
            <img src={planet} width="64" height="64"  alt="planet"/> 
          </div>
            <div>Dbaj o środowisko</div></li>
      </ul>
    </div>
    </div>
  </section>
  <section id="steps">
    <div className="container">
      <div className="section-title">
        <h2>Jak realizujemy projekt?</h2>
      </div>
    <div className="steps_content">
      
      <Realisation />
    </div>
    </div>
  </section>
  <section id="jaktodziala">
    <div className="container">
      <div className="section-title">
        <h2>Jak działa fotowoltaika?</h2>
      </div>
      <Jaktodziala />
    </div>
  </section>
  <section id="brands" className="green_gradient">
    <div className="container">
      <div className="section-title">
        <h2 style={{color: '#fff'}}>Nasi Partnerzy</h2>
      </div>
      <Brands />
    </div>
  </section>
  <section>
    <div className="container text">
      <h2>Instalacje fotowoltaiczne — Zielona Góra</h2>
      <p>Szukasz rozwiązań, które pozwolą Ci ograniczyć wysokość rachunków za prąd? Chcesz uniezależnić się od
dostawców energii elektrycznej oraz rosnących cen? W takim razie <strong>fotowoltaika</strong> z pewnością spełni Twoje
oczekiwania. Jeśli marzysz o nowoczesnym, energooszczędnym domu, to <strong>instalacja fotowoltaiczna</strong> jest
pierwszym krokiem w procesie realizacji tego marzenia. W naszej firmie specjalizujemy się w tworzeniu
projektów, montażu oraz przygotowaniu dokumentacji niezbędnej, aby uzyskać <strong>dofinansowanie fotowoltaiki</strong>.
Działamy profesjonalnie, kompleksowo i terminowo. Osoby mieszkające na terenie <strong>Zielonej Góry</strong> bądź okolic
zachęcamy do kontaktu w celu ustalenia szczegółów współpracy!</p>
<h2>Fotowoltaika — lubuskie</h2>
<p>Firmę Zielone Technologie tworzy zespół wykwalifikowanych specjalistów z bogatym doświadczeniem w zakresie
odnawialnych źródeł energii. Naszym celem jest dostarczanie sprawdzonych rozwiązań wspierających troskę o
ekologię, pozwalających na niezależność energetyczną oraz ułatwiających codzienne życie. Pragniemy, aby
energia pozyskiwana ze słońca mogła być wykorzystywana w każdym gospodarstwie domowym, ale nie tylko.
Tworzymy <strong>farmy paneli słonecznych</strong>, zajmujemy się kompleksowymi realizacjami <strong>instalacji
fotowoltaicznych</strong> zarówno dla Klientów indywidualnych, jak i przedsiębiorców czy rolników. Dopasowujemy
ofertę do indywidualnych potrzeb naszych Klientów z <strong>Zielonej Góry</strong> oraz innych miast województwa
<strong>lubuskiego</strong>.</p>
<h2>Wysokiej klasy panele słoneczne wraz z montażem — poznaj naszą ofertę!</h2>
<p>Jeśli masz dość wysokich rachunków za prąd, dążysz do niezależności energetycznej, a przy tym zależy Ci na
środowisku naturalnym, to <strong>fotowoltaika</strong> jest najlepszym rozwiązaniem dla Ciebie i Twojego domu. W naszej
firmie świadczymy kompleksowe usługi <strong>instalacji fotowoltaicznych</strong> — wstępną konsultację z oględzinami,
stworzenie koncepcji i projektu, a następnie podpisanie umowy, przygotowanie dokumentacji niezbędnej dla
uzyskania dofinansowania, montaż <strong>paneli słonecznych</strong>, zgłoszenie instalacji do Zakładu Energetycznego,
kończąc na konsultacjach dotyczących umowy z operatorem sieci elektroenergetycznej. Wszystkie te działania
prowadzą do pełnej niezależności od dostawców energii elektrycznej. Przekonaj się sam, dlaczego warto z nami
współpracować!
</p>
<h2>Fotowoltaika — inwestycja, która się opłaca</h2>
<p>Chociaż <strong>koszt instalacji fotowoltaicznej</strong> nie należy do najniższych, to wciąż jest to inwestycja, która już po
kilku lub kilkunastu latach się zwróci, dodatkowo zwalniając z opłat za zużycie prądu. Co więcej, współpracując z
naszą firmą, możesz liczyć na wsparcie w przygotowaniu dokumentacji, dzięki której możliwe jest uzyskanie
<strong>dofinansowania fotowoltaiki</strong>. Klientom z <strong>Zielonej Góry</strong> oraz całego województwa <strong>lubuskiego</strong> zapewniamy
kompleksową obsługę na każdym etapie realizacji, sprawny montaż, który świadczą wykwalifikowani <strong>monterzy
fotowoltaiki</strong>, pomoc w uzyskaniu finansowania, a także przystępne <strong>ceny</strong> naszych usług. Serdecznie
zapraszamy do współpracy!
</p>
    </div>
  </section>
  <section id="contact">
  <div className="container">
      <div className="section-title">
        <h2>Skontaktujemy się z Tobą</h2>
        <p>Zostaw nam swój numer, oddzwonimy!</p> 
      </div>
    <Contact />
   {/* <div className="contact_icon"><img src={solar_panel} width="64px" alt="solar panel"/></div>*/}
  </div>
    </section>
  </Layout>
)
    }
export default IndexPage


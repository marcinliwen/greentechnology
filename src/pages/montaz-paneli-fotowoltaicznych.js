import React from "react"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"




const IndexPage = () => { 
    const data = useStaticQuery( graphql`
    query {
        file(relativePath: {eq: "montaz-bg.png"}) {
        childImageSharp {
            fluid (fit: COVER){
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `);
    return(
        <Layout>
             <SEO title="Montaż paneli fotowoltaicznych - Panele fotowoltaiczne Zielona Góra lubuskie" 
            description="Wsparcie profesjonalistów specjalizujących się w montażu paneli fotowoltaicznych z naszej firmy w
            województwie lubuskim stanowi gwarancję prawidłowo wykonanej instalacji, która będzie służyć przez wiele lat
            i pozwoli obniżyć rachunki za prąd."/>
    <section id="montaz-about" className="has_img_bg subheader">
      <div className="container">
      <div className="img_bg_moj-prad">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Fotovoltaic"
      />
    </div>
        <div className="section-title montaz" style={{textAlign: 'left'}}>
          <h1>Montaż paneli fotowoltaicznych</h1>
          
        </div>
       
      </div>
    </section>
    <section>
        <div className="container text">
            <h2>Montaż paneli fotowoltaicznych — lubuskie</h2>
            <p>Wiele osób poszukuje skutecznych sposobów na zmniejszenie rachunków za prąd, które z czasem stają się coraz
wyższe. Rozwiązaniem cieszącym się niesłabnącą popularnością w ostatnich latach pozostaje więc <strong>montowanie
fotowoltaiki</strong>, ale oszczędność pieniędzy nie jest jedyną zaletą tej instalacji. Panele fotowoltaiczne to również
świetny wybór dla osób zainteresowanych ekologią, lecz by móc cieszyć się korzyściami wynikającymi z
pozyskiwania energii ze słońca, nie wolno zapomnieć o profesjonalnym <strong>montażu</strong>. W naszej firmie oferujemy
zatem <strong>montowanie fotowoltaiki na gruncie, dachu płaskim</strong> albo skośnym.
</p>
<h2>Zalety montowania fotowoltaiki</h2>
<p>Popularność <strong>fotowoltaiki</strong> wynika przede wszystkim z możliwości otrzymywania całkowicie darmowej energii
elektrycznej wprost z promieni słonecznych, a tym samym uniezależnienia się od rosnących cen prądu. Ponadto
słońce stanowi ogólnodostępne, nieograniczone źródło energii wolne od niespodziewanych przerw w jej
dostawach. <strong>Montaż paneli fotowoltaicznych</strong> oferowany w naszej firmie w woj. <strong>lubuskim</strong> jest też przyjazny
środowisku, jako że nie wiąże się z powstawaniem żadnych szkodliwych substancji ani odpadów. W połączeniu z
możliwością uzyskania dotacji i bezobsługowością <strong>montowanie fotowoltaiki</strong> okazuje się niezwykle korzystnym
rozwiązaniem.
</p>
<h2>Profesjonalny montaż fotowoltaiki na dachu płaskim, skośnym lub gruncie</h2>
<p>W naszej firmie proponujemy <strong>montaż fotowoltaiki na gruncie, dachu płaskim</strong> albo skośnym pozwalający na
bezproblemowe korzystanie z zalet paneli fotowoltaicznych. Do realizacji zleceń posługujemy się wyłącznie
sprzętem uznanych producentów takich jak Q-Cells, Astronergy, ECOdelta czy Seraphim, co gwarantuje
wieloletnie, bezawaryjne działanie, a także znakomitą wydajność. Nasza propozycja skierowana jest do
właścicieli domów jednorodzinnych oraz szeregowców, ale też przedsiębiorców — zapewniamy <strong>panele
fotowoltaiczne montowane na ziemi</strong>, dachu, a nawet <strong>montaż do blachy trapezowej</strong>.</p>
<h2>Montaż fotowoltaiki na płaskim dachu albo gruncie — etapy realizacji</h2>
<p>Pierwszym krokiem, który wykonujemy podczas realizacji zlecenia <strong>montażu paneli fotowoltaicznych</strong> w woj.
<strong>lubuskim</strong> lub innym regionie kraju, są oględziny i przygotowanie projektu instalacji z uwzględnieniem m.in.
stopnia nasłonecznienia czy kąta nachylenia powierzchni. Następnie sporządzamy niezbędną dokumentację z
wnioskiem kredytowym i przystępujemy do fachowego <strong>montowania fotowoltaiki</strong>, po czym zgłaszamy ją do
Zakładu Energetycznego oraz konsultujemy kwestie umowy z operatorem sieci. Efektem tej kompleksowej
obsługi jest możliwość korzystania z darmowej, nielimitowanej, ekologicznej energii.</p>
<h2>Fotowoltaika — montaż na gruncie bądź dachu dla Klientów indywidualnych i firm</h2>
<p>Wsparcie profesjonalistów specjalizujących się w <strong>montażu paneli fotowoltaicznych</strong> z naszej firmy w
województwie <strong>lubuskim</strong> stanowi gwarancję prawidłowo wykonanej instalacji, która będzie służyć przez wiele lat
i pozwoli obniżyć rachunki za prąd. Bogate doświadczenie fachowców sprawia zaś, że jesteśmy w stanie podjąć
się <strong>montowania fotowoltaiki</strong> na różnych powierzchniach. Zapraszamy do współpracy!</p>
        </div>
    </section>
    <section id="contact" >
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

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Rodzajepomp from "../components/Rodzajepomp"
import Contact from "../components/contact"
import CustomTooltip from "../components/tooltip"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import resun from "../images/re-sun.svg"
import returnon from "../images/re-turnon.svg"
import rewater from "../images/re-water.svg"
import rewind from "../images/re-wind.svg"
import reenergy from "../images/re-energy.svg"

import "./../components/pompy-ciepla.css"

const IndexPage = () => { 

  const data = useStaticQuery( graphql`
  query {
    file(relativePath: {eq: "ulga-bg.png"}) {
      childImageSharp {
        fluid (fit: COVER){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

const tolltiptText = "Za budynek mieszkalny jednorodzinny uważa się budynek wolno stojący albo budynek w zabudowie bliźniaczej, szeregowej lub grupowej, służący zaspokajaniu potrzeb mieszkaniowych, stanowiący konstrukcyjnie samodzielną całość, w którym dopuszcza się wydzielenie nie więcej niż dwóch lokali mieszkalnych albo jednego lokalu mieszkalnego i lokalu użytkowego o powierzchni całkowitej nieprzekraczającej 30% powierzchni całkowitej budynku."
  return(
  <Layout>
    <SEO title="Ulga termomodernizacyjna - Panele fotowoltaiczne Zielona Góra lubuskie" 
    description="Ulga termomodernizacyjna przysługuje podatnikowi, który jest właścicielem lub współwłaścicielem budynku mieszkalnego jednorodzinnego. Zapraszamy do kontaktu"/>
    <section id="pompy-about" className="has_img_bg subheader">
      <div className="container">
      <div className="img_bg_moj-prad">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Fotovoltaic"
      />
    </div>
        <div className="section-title" style={{textAlign: 'left'}}>
          <h1>Ulga termomodernizacyjna</h1>
          <p>
            Ulga polega na odliczeniu od podstawy obliczenia podatku (przychodów - w przypadku podatku zryczałtowanego) wydatków poniesionych na realizację przedsięwzięcia termomodernizacyjnego w  
            <CustomTooltip title={tolltiptText}> budynku mieszkalnym jednorodzinnym</CustomTooltip>.
          </p>
        </div>
       
      </div>
    </section>
    <section id="pompy-about">
      <div className="container text">
        <div className="pompy__about">
          <div className="pompy__about-card">
            <div className="pompy__about-text">   
            <h3>Komu przysługuje ulga</h3>       
            <p>Ulga przysługuje podatnikowi, który jest właścicielem lub współwłaścicielem budynku mieszkalnego jednorodzinnego.</p>
            </div>
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-text">   
                <h3>Co jest przedsięwzięciem termomodernizacyjnym</h3>       
                <p>Przedsięwzięciem termomodernizacyjnym jest:</p> 
                <ul>
                <li>ulepszenie, w wyniku kt&oacute;rego następuje zmniejszenie zapotrzebowania na energię dostarczaną na potrzeby ogrzewania i podgrzewania wody użytkowej oraz ogrzewania do budynk&oacute;w mieszkalnych;</li>
                <li>ulepszenie, w wyniku kt&oacute;rego następuje zmniejszenie strat energii pierwotnej w lokalnych sieciach ciepłowniczych oraz zasilających je lokalnych źr&oacute;dłach ciepła, jeżeli budynki mieszkalne, do kt&oacute;rych dostarczana jest z tych sieci energia; spełniają wymagania w zakresie oszczędności energii, określone w przepisach prawa budowlanego, lub zostały podjęte działania mające na celu zmniejszenie zużycia energii dostarczanej do tych budynk&oacute;w;</li>
                <li>wykonanie przyłącza technicznego do scentralizowanego źr&oacute;dła ciepła, w związku z likwidacją lokalnego źr&oacute;dła ciepła, w wyniku czego następuje zmniejszenie koszt&oacute;w pozyskania ciepła dostarczanego do budynk&oacute;w mieszkalnych;</li>
                <li>całkowita lub częściowa zamiana źr&oacute;deł energii na źr&oacute;dła odnawialne lub zastosowanie wysokosprawnej kogeneracji.</li>
                </ul>  
                <p><b>Z ulgi termomodernizacyjnej nie można korzystać w przypadku budynku będącego w budowie.</b></p>
            </div>
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-text">  
            <h3>Co podlega odliczeniu</h3>        
<p>Odliczeniu podlegają wydatki, które:</p>
<ul>
<li>są wymienione w załączniku do rozporządzenia Ministra Inwestycji i Rozwoju z dnia 21 grudnia 2018 r. w sprawie określenia wykazu rodzaj&oacute;w materiał&oacute;w budowlanych, urządzeń i usług związanych z realizacją przedsięwzięć termomodernizacyjnych (Dz. U. poz. 2489);</li>
<li>dotyczą przedsięwzięcia termomodernizacyjnego, kt&oacute;re zostanie zakończone w&nbsp;okresie 3&nbsp;kolejnych lat, licząc od końca roku podatkowego, w kt&oacute;rym podatnik poni&oacute;sł pierwszy wydatek;</li>
<li>zostały udokumentowane fakturą wystawioną przez podatnika podatku od towar&oacute;w i usług niekorzystającego ze zwolnienia od tego podatku;</li>
<li>nie zostały sfinansowane (dofinansowane) ze środk&oacute;w Narodowego Funduszu Ochrony Środowiska i Gospodarki Wodnej lub wojew&oacute;dzkich funduszy ochrony środowiska i gospodarki wodnej lub zwr&oacute;cone podatnikowi w jakiejkolwiek formie;</li>
<li>nie zostały zaliczone do koszt&oacute;w uzyskania przychod&oacute;w, odliczone od przychodu na podstawie ustawy o zryczałtowanym podatku dochodowym od niekt&oacute;rych przychod&oacute;w osiąganych przez osoby fizyczne lub uwzględnione przez podatnika w związku z korzystaniem z ulg podatkowych w rozumieniu Ordynacji podatkowej.</li>
</ul>
<p><b>W przypadku gdy poniesione wydatki były opodatkowane podatkiem od towarów i usług, za kwotę wydatku uważa się wydatek wraz z tym podatkiem, o ile podatek od towarów i usług nie został odliczony na podstawie ustawy o podatku od towarów i usług.</b></p>            
</div>
            
          </div>
          
        </div>
        <div className="pompy__about-card">
            <div className="pompy__about-text">   
                <h3>Jak odlicza się ulgę</h3>       
                <p>Odliczenia dokonuje się w zeznaniu za rok podatkowy, w którym poniesiono wydatek.</p> 
                <p>Kwota odliczenia, która nie znalazła pokrycia w dochodzie (przychodzie) podatnika za rok podatkowy, podlega odliczeniu w kolejnych latach, nie dłużej jednak niż przez 6 lat, licząc od końca roku podatkowego, w którym poniesiono pierwszy wydatek.</p>
                
                <p><b>Odliczenie stosuje się również do przedsięwzięcia termomodernizacyjnego rozpoczętego przed dniem 1 stycznia 2019 r., które zostało zakończone po dniu 31 grudnia 2018 r., jednak nie później niż w okresie 3 kolejnych lat, licząc od końca roku podatkowego, w którym podatnik poniósł pierwszy wydatek. W takim przypadku odliczeniu podlegają wydatki poniesione w okresie od 1 stycznia 2019 r., maksymalnie do dnia, w którym upływa wyżej wskazany termin. </b></p>
            </div>
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-text">   
                <h3>Ile można odliczyć</h3>       
                <p>Kwota odliczenia nie może przekroczyć <strong>53 000 zł</strong> w odniesieniu do wszystkich realizowanych przedsięwzięć termomodernizacyjnych w poszczególnych budynkach, których podatnik jest właścicielem lub współwłaścicielem.</p> 
            </div>
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-text">   
                <h3>Utrata prawa do ulgi</h3>       
<p>Jeśli podatnik nie zrealizuje przedsięwzięcia termomodernizacyjnego w terminie trzyletnim, jest on obowiązany do zwrotu ulgi, co oznacza doliczenie kwot uprzednio odliczonych z tego tytułu do dochodu (przychodu) za rok podatkowy, w którym upłynął trzyletni termin.</p>           
<p>Podatnik, który po roku, w którym skorzystał z ulgi, otrzymał zwrot odliczonych wydatków na realizację przedsięwzięcia termomodernizacyjnego, jest obowiązany doliczyć odpowiednio kwoty uprzednio odliczone do dochodu (przychodu) w zeznaniu składanym za rok podatkowy, w którym otrzymał ten zwrot.</p> </div>
          </div>
          

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


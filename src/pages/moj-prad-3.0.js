import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Rodzajepomp from "../components/Rodzajepomp"
import Contact from "../components/contact"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import resun from "../images/re-sun.svg"
import returnon from "../images/re-turnon.svg"
import rewater from "../images/re-water.svg"
import rewind from "../images/re-wind.svg"
import reenergy from "../images/re-energy.svg"

import "./../components/pompy-ciepla.css"
import './../components/Realisation.css';

const IndexPage = () => { 
  
  return(
  <Layout>
    <SEO title="Zielone Technologie - Mój prąd 3.0" />
    <section id="moj-prad">
      <div className="container">
        <div className="section-title">
          <h1>Mój prąd 3.0</h1>
          <p>Program dofinansowania mikroinstalacji fotowoltaicznych</p>
        </div>
        <div className="section-title">
          <h2>Jak uzyskać dofinansowanie?</h2>
        </div>
        <div className="steps_content prad">
        
        <div className="steps_item">    
            <div className="number">1</div>
            <div className="steps_item_title">Kup i zamontuj mikroinstalację fotowoltaiczną</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">2</div>
            <div className="steps_item_title">Poczekaj na instalację przez zakład energetyczny licznika dwukierunkowego.
<div><em>Ważne!
Instalacja nie może być przyłączona
przed 23.07.2019 r.</em></div></div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">3</div>
            <div className="steps_item_title">Podpisz umowę dwustronną z dystrybutorem energii o przyłączeniu mikroinstalacji do sieci elektrycznej.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">4</div>
            <div className="steps_item_title">
            Złóż wniosek w II naborze od 13.01.2020 r. do 06.12.2020 r. - ZAKOŃCZONY
               
            </div>
        </div>
        <div className="steps_item " style={{width: '100%'}}>    
            <div className="number">5</div>
            <div className="steps_item_title">O wyniku oceny wniosku zostaniesz poinformowany mailem.
Aktualny status wniosku możesz sprawdzić online.<div><em>Wnioski odrzucone można składać ponownie po usunięciu powodu odrzucenia.</em></div></div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item green_gradient" style={{width: '100%'}}>    
            <div className="number">6</div>
            <div className="steps_item_title">Wypłata dotacji do 5000 zł.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item outside" style={{width: '100%'}}>    
            <h3>Potrzebujesz porady?</h3>
            <div className="steps_item_title">Szczegółowych informacji o programie udzielają Doradcy Energetyczni za pośrednictwem strony  <a herf='https://doradztwo-energetyczne.gov.pl'>https://doradztwo-energetyczne.gov.pl</a></div>
        </div>
    </div>
          
        
      
      </div>
    </section>
    <section id="pompy-about">
      <div className="container">
        <div className="pompy__about">
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={returnon} />
            </div>
            <div className="pompy__about-text">   
            <h3>Kto może skorzystać z programu?</h3>       
<p>Program skierowany jest do osób fizycznych wytwarzających energię elektryczną na własne potrzeby, które mają zawartą umowę kompleksową
(z Operatorem Sieci Dystrybucyjnej – OSD, zakładem energetycznym) regulującą kwestie związane z wprowadzeniem do sieci energii elektrycznej wytworzonej w mikroinstalacji.</p>            </div>
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={resun} />
            </div>
            <div className="pompy__about-text">   
            <h3>O dotację w programie Mój Prąd możesz ubiegać się jeśli:</h3>       
<p>Twoja instalacja jest już wykonana i podłączona do sieci elektroenergetycznej
(m.in. posiadasz licznik dwukierunkowy);
Twoja instalacja fotowoltaiczna jest o mocy 2-10 kW i jest przeznaczona na cele mieszkaniowe;
Wydatki poniosłeś od 23 lipca 2019 r. i instalacja nie została zakończona przed tą datą;
Twoja inwestycja nie jest rozbudową już istniejącej instalacji;</p>            </div>
            
          </div>
          <div className="pompy__about-card">
            <div className="pompy__about-icon">
              <img src={reenergy} />
            </div>
            <div className="pompy__about-text">  
            <h3>Co zyskasz?</h3>        
<p>Zwrot do 50% kosztów inwestycji, maksymalnie 5000 zł na instalację.

Dotacja jest zwolniona z podatku PIT.

Koszty inwestycji, które nie zostały pokryte wsparciem
możesz odliczyć od podatku (ulga termomodernizacyjna).

Instalacja paneli fotowoltaicznych zwraca się
średnio po 6-8 latach od zainstalowania.</p>            </div>
            
          </div>
          
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


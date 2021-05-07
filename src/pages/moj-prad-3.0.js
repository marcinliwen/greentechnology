import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fcalc from "../components/fcalc"
import Welcome from "../components/Welcome"
import Realisation from "../components/Realisation"
import Rodzajepomp from "../components/Rodzajepomp"
import Contact from "../components/contact"

import Box from '@material-ui/core/Box';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Faqimg from "../components/Faqimg"

import resun from "../images/re-sun.svg"
import returnon from "../images/re-turnon.svg"
import rewater from "../images/re-water.svg"
import rewind from "../images/re-wind.svg"
import reenergy from "../images/re-energy.svg"

import iconCalendar from "../images/moj-prad/icon_calendar.svg"
import iconCoins from "../images/moj-prad/icon_coins.svg"
import iconIndicator from "../images/moj-prad/icon_indicator.svg"
import iconLetter from "../images/moj-prad/icon_letter.svg"
import iconSign from "../images/moj-prad/icon_sign.svg"
import iconPanel from "../images/moj-prad/icon_panel.svg"

import "./../components/pompy-ciepla.css"
import './../components/Realisation.css';

const IndexPage = () => { 
  
  return(
  <Layout>
    <SEO title="Zielone Technologie - Mój prąd 3.0" />
    <section>
      <div className="container">
      <div className="section-title">
          <h1>Mój prąd 3.0</h1>
          <p>Program dofinansowania mikroinstalacji fotowoltaicznych</p>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="section-title">
          <h2>Kiedy rozpocznie się program ,,Mój Prąd”?</h2>
        </div>
    <Box my={{xs:2, md:4}}>
      <blockquote className="alert-info">
        <div>
          <em style={{fontSize:"14px", marginBottom: "10px"}}>Aktualizacja 26 luty 2021</em>
        </div>
        <div>Według strony internetowej NFOŚiGW kolejny nabór wniosków ma rozpocząć się 1 lipca 2021 roku, a zakończyć się 22 grudnia 2021.</div>
      </blockquote>
    </Box>
    <Box my={{xs:2, md:8}} className="important">
        <div>
          <b>P: </b><em style={{marginBottom: "10px"}}> Czy inwestować w fotowoltaikę, czy czekać na więcej szczegółów?</em>
        </div>
        <div><b>O: </b><strong style={{color: '#4ab75e'}}>To najlepszy czas, by zainwestować w fotowoltaikę.</strong></div>
    </Box>
    <Box my={{xs:2, md:8}}>
      <div className="pompy__about">
        <div className="pompy__about-card">
          <div className="pompy__about-icon">
            <img src={returnon} />
          </div>
          <div className="pompy__about-text">   
            <h3>Dlaczego?</h3>                 
            <ul>
              <li>Program “Mój Prąd' został potwierdzony i ma datę rozpoczęcia.</li>
              <li>Fotowoltaika zwróci się nawet <b>BEZ DOTACJI</b>.</li>
              <li>Program “Mój Prąd” zwraca tylko istniejące instalacje, czyli osoba musi mieć skończoną instalację fotowoltaiczną, żeby złożyć wniosek i dostać pieniądze.</li>
              <li>Jeśli zainwestujesz w fotowoltaikę <b>TERAZ</b>, Twoja instalacja będzie gotowa w lipcu na nabór wniosków z dotacji.</li>
              <li>Gdy wszystkie szczegóły staną się znane, wtedy nastąpi kolejny <b>BOOM</b> i ciężej będzie Państwu znaleźć dobrego instalatora, a wnioski są rozpatrywane od pierwszego złożonego, czyli <b>KTO PIERWSZY TEN LEPSZY</b>.</li>
            </ul>                  
          </div>
        </div>
        <div className="pompy__about-card">
          <div className="pompy__about-icon">
            <img src={resun} />
          </div>
          <div className="pompy__about-text">   
            <h3>O dotację w programie Mój Prąd możesz ubiegać się jeśli:</h3>                 
            <ul>
              <li>Twoja instalacja jest już wykonana i podłączona do sieci elektroenergetycznej(m.in. posiadasz licznik dwukierunkowy).</li>
              <li>Twoja instalacja fotowoltaiczna jest o mocy <b>2-10 kW</b> i jest przeznaczona na cele mieszkaniowe.</li>
              <li>Wydatki poniosłeś <b>od 23 lipca 2019 r.</b> i instalacja nie została zakończona przed tą datą.</li>
              <li>Twoja inwestycja <b>nie jest rozbudową</b> już istniejącej instalacji.</li>
            </ul>                  
          </div>
        </div>
        <div className="pompy__about-card">
          <div className="pompy__about-icon">
            <img src={reenergy} />
          </div>
          <div className="pompy__about-text">   
            <h3>Co zyskasz?</h3>                 
            <ul>
              <li>Zwrot do <b>50% kosztów inwestycji, maksymalnie 5000 zł</b> na instalację.</li>
              <li>Dotacja jest <b>zwolniona z podatku PIT</b>.</li>
              <li>Koszty inwestycji, które nie zostały pokryte wsparciem <b>możesz odliczyć od podatku</b> (ulga termomodernizacyjna).</li>
              <li>Instalacja paneli fotowoltaicznych zwraca się średnio <b>po 6-8 latach</b> od zainstalowania.</li>
            </ul>                  
          </div>
        </div>
      </div>
    </Box>
      </div>
    </section>
    <section id="moj-prad">
      <div className="container">
        <div className="section-title">
          <h2>Jak uzyskać dofinansowanie?</h2>
        </div>
        <div className="steps_content prad">
        
        <div className="steps_item">    
            <div className="number">1</div>
            <div className="icon"><img src={iconPanel} width="auto" height="84px"/></div>
            <div className="steps_item_title">Kup i zamontuj mikroinstalację fotowoltaiczną</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">2</div>
            <div className="icon"><img src={iconIndicator} width="auto" height="84px"/></div>
            <div className="steps_item_title">Poczekaj na instalację przez zakład energetyczny licznika dwukierunkowego.<div>
          </div></div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">3</div>
            <div className="icon"><img src={iconSign} width="auto" height="84px"/></div>
            <div className="steps_item_title">Podpisz umowę dwustronną z dystrybutorem energii o przyłączeniu mikroinstalacji do sieci elektrycznej.</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">4</div>
            <div className="icon"><img src={iconLetter} width="auto" height="84px"/></div>
            <div className="steps_item_title">
            Złóż wniosek w II naborze od 13.01.2020 r. do 06.12.2020 r. - ZAKOŃCZONY
               
            </div>
        </div>
        <div className="steps_item " style={{width: '100%'}}>    
            <div className="number">5</div>
            <div className="icon"><img src={iconCalendar} width="auto" height="84px"/></div>
            <div className="steps_item_title">
              O wyniku oceny wniosku zostaniesz poinformowany mailem. Aktualny status wniosku możesz sprawdzić online.
              <div><em style={{fontSize: '16px', lineHeight: '18px', display: 'block', marginTop: '15px'}}>Wnioski odrzucone można składać ponownie po usunięciu powodu odrzucenia.</em></div>
            </div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item green_gradient" style={{width: '100%'}}>    
            <div className="number">6</div>
            <div className="icon"><img src={iconCoins} width="auto" height="84px"/></div>
            <div className="steps_item_title">Wypłata dotacji do 5000 zł.</div>
            <div className="steps_item_desc"></div>
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


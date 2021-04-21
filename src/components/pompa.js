import React ,{useState} from "react"
import "./pompy.css"


const Pompa = () =>{
    return(
        <section id="pompa" className="b_white">
        <div className="container">
            <div className="section-title">
              <h2>Powietrzne pompy ciepła</h2>
            </div>
            <div className="pompa-content">
                <div className="pompa-element">
                    <div className="pompa-power">4.0 kW</div>
                    <div className="pompa-value"> 19 000 zł <div>/brutto</div></div>
                </div>
                <div className="pompa-element">
                    <div className="pompa-power">5.0 kW</div>
                    <div className="pompa-value"> 20 000 zł <div>/brutto</div></div>
                </div>
                <div className="pompa-element">
                    <div className="pompa-power">7.0 kW</div>
                    <div className="pompa-value"> 25 000 zł <div>/brutto</div></div>
                </div>
                <div className="pompa-element">
                    <div className="pompa-power">9.0 kW</div>
                    <div className="pompa-value"> 29 000 zł <div>/brutto</div></div>
                </div>
            </div>
            <div>
                <p>Cena obejmuje: montaż jednostki wewnętrznej i zewnętrznej (do 5m instalacji zewnętrznej), montaż i uruchomienie instalacji.</p>
                <p>Pompy spełniają warunki programu "Czyste powietrze" i dotacji do modernizacji systemów grzewczych prowadzonych przez urzędy miast i gmin</p>
            </div>
          </div>
        </section>
    )
}

export default Pompa
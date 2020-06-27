import React from 'react';
import './Realisation.css'
export default function CustomizedTimeline() {
  

  return (
    <div>
        <div className="steps_item">    
            <div className="number">1</div>
            <div className="steps_item_title">Oględziny i konsultacja</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">2</div>
            <div className="steps_item_title">Koncepcja i projekt instalacji, podpisanie umow</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">3</div>
            <div className="steps_item_title">Przygotowanie dokumentacji z wnioskiem kredytowym</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">4</div>
            <div className="steps_item_title">Wykonanie instalacji „pod klucz”</div>
            <div className="steps_item_desc">
                <ul>
                    <li>przygotowanie projektu wykonawczego instalacji</li>
                    <li>wykonanie instalacji fotowoltaicznej</li>
                    <li>prace montażowe niezbędne do przyłączenia instalacji do sieci energetycznej</li>
                    <li>programowanie inwertera i urządzeń monitorujących</li>
                    <li>transport</li>
                    <li>przygotowanie kompletu dokumentów niezbędnych do przyłączenia instalacji do sieci</li>
                </ul>
            </div>
        </div>
        <div className="steps_item">    
            <div className="number">5</div>
            <div className="steps_item_title">Zgłoszenie instalacji do Zakładu Energetycznego</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">6</div>
            <div className="steps_item_title">Konsultacje w sprawie umowy z operatorem sieci elektroenergetycznej</div>
            <div className="steps_item_desc"></div>
        </div>
        <div className="steps_item">    
            <div className="number">7</div>
            <div className="steps_item_title">Wszystko juz gotowe</div>
            <div className="steps_item_desc"></div>
        </div>
    </div>
    
  );
}

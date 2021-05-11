import React from 'react';
import './brands.css'
import { Link } from "gatsby"


 const tileData = [
    {
      img: 'img/brands/oldor-logo.png',
      link: 'http://www.oldor.pl/',
      title: 'Oldor'
    },
    {
      img: 'img/brands/mm-logo.png',
      link: 'http://www.meblemilan.pl/',
      title: 'Meble Milan'
    },
    {
        img: 'img/brands/kacper-logo.png',
        link: 'https://szklarzzielonagora.pl/ ',
        title: 'Szklarz Zielona Góra'
    },
    {
        img: 'img/brands/askeko-logo.png',
        link: 'https://as-eko.eu/',
        title: 'AS-Eko'
    },
    {
        img: 'img/brands/kwtech-logo.png',
        link: 'http://kw-tech.eu/',
        title: 'kw-tech'
    },
    {
        img: 'img/brands/hemibau-logo.png',
        link: 'http://hemibau.pl/hemibau-pl/',
        title: 'Hemibau'
    }
  ];
 
export default function Brands() {

  return (
    <div className="brand-wrapper">
      <div className="brand-list"  >
        {tileData.map((tile) => (
          <div key={tile.img} className="brand-element">
              <Link to={tile.link}>
                <img src={tile.img} alt={tile.title} />
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

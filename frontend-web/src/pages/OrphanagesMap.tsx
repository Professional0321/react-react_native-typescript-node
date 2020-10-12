import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

import mapMarker from '../img/marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img
                        src={mapMarker}
                        alt="Marker"
                    />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando pela usa visita :)</p>
                </header>

                <footer>
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>

            <div></div>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;

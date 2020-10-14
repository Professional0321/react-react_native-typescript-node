import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarker from '../img/marker.svg';
import mapIcon from '../utils/mapIcon';

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

            <Map 
                center={[-15.8138368,-47.9110414]}
                zoom={14}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker
                    icon={mapIcon}
                    position={[-15.8138368,-47.9110414]}
                >
                    <Popup
                        closeButton={false}
                        minWidth={248}
                        maxWidth={248}
                        className="map-popup"
                    >
                        Orfanato
                        <Link to="/orphanage/1">
                            <FiArrowRight 
                                size={20}
                                color="#FFF"
                            />
                        </Link>
                    </Popup>
                </Marker>
            </ Map>

            <Link to="/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;

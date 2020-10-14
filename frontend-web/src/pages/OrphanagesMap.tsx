import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

import mapMarker from '../img/marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap() {

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);

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

                {
                    orphanages.map(orphanage => {
                        return (
                            <Marker 
                                key={orphanage.id}
                                icon={mapIcon}
                                position={[orphanage.latitude, orphanage.longitude]}
                            >
                                <Popup
                                    closeButton={false}
                                    minWidth={248}
                                    maxWidth={248}
                                    className="map-popup"
                                >
                                    {orphanage.name}
                                    <Link to={`/orphanage/${orphanage.id}`}>
                                        <FiArrowRight 
                                            size={20}
                                            color="#FFF"
                                        />
                                    </Link>
                                </Popup>
                            </Marker>
                        )
                    })
                }


            </ Map>

            <Link to="/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;

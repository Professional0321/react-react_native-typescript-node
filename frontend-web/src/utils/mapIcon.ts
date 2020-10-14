import Leaflet from 'leaflet';

import mapMarker from '../img/marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [178, 2]
})

export default mapIcon;
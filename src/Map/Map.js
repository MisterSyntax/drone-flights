import React from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './Map.module.css';
import './Map.css';

/** components */
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import Drones from './Drones/Drones';

export const Map = () => {
    return (
        <LeafletMap
            center={[33.7, -117.9]}
            zoom={6}
            maxZoom={10}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
            <Drones Marker={Marker} />
        </LeafletMap>
    );
};

Map.propTypes = {

};

Map.defaultProps = {

};

export default Map;

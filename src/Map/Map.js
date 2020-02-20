import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './Map.module.css';
import './Map.css';

/** components */
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import Drones from './Drones/Drones';
import { AppContext } from '../App';

export const Map = () => {
    const appContext = useContext(AppContext);

    return (
        <LeafletMap
            animate={true}
            attributionControl={true}
            center={[33.7, -117.9]}
            doubleClickZoom={false}
            dragging={true}
            easeLinearity={0.35}
            maxZoom={10}
            onClick={e => appContext.setNewDroneLocation({
                lat: e.latlng.lat,
                lon: e.latlng.lng
            })}
            scrollWheelZoom={true}
            zoom={9}
            zoomControl={true}
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

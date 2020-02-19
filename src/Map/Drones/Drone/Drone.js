import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './Drone.module.css';

/** components */
import { Popup, Marker } from 'react-leaflet';

/** helpers */
import { getCurrentLocation } from './helpers';

export const Drone = ({
    droneId,
}) => {
    const [latLongAltitude, setLatLongAltitude] = useState({});
    useEffect(() => {
        async function fetchData() {
            const newLatLongAltitude = await getCurrentLocation(droneId);
            setLatLongAltitude(newLatLongAltitude);
        }

        fetchData();
    }, [droneId]);

    if(!latLongAltitude.lat || !latLongAltitude.lon) {
        return null;
    }

    return (
        <Marker position={[latLongAltitude.lat, latLongAltitude.lon]}>
            <Popup>
            <b>lat</b> {latLongAltitude.lat}
            <b>long</b> {latLongAltitude.lon}
            </Popup>
        </Marker>
    );
};

Drone.propTypes = {
    droneId: PropTypes.number,
};

Drone.defaultProps = {

};

export default Drone;

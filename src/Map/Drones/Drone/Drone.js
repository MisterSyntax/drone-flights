import React, { useContext } from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './Drone.module.css';

/** components */
import { Popup, Marker } from 'react-leaflet';
import { AppContext } from '../../../App';

/** helpers */
import { getCurrentLocation } from './helpers';

export const Drone = ({
    droneId,
}) => {
    const [latLngAltitude, setLatLngAltitude] = React.useState({});
    const appContext = useContext(AppContext);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const newLatLngAltitude = await getCurrentLocation(droneId);
                setLatLngAltitude(newLatLngAltitude);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
        const getDroneData = setInterval(fetchData, 3000);

        return (() => {
            clearInterval(getDroneData);
        })
    }, [droneId]);

    if (!latLngAltitude.lat || !latLngAltitude.lon) {
        return null;
    }

    return (
        <Marker
            position={[latLngAltitude.lat, latLngAltitude.lon]}
            onClick={() => appContext.setActiveDroneId(droneId)}
        >
            <Popup>
                <div><b>latitude</b> {latLngAltitude.lat} {' '}</div>
                <div><b>longitude</b> {latLngAltitude.lon} {' '}</div>
                <div><b>altitude</b> {latLngAltitude.alt}</div>
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

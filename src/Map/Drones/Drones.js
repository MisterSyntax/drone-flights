import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './Drones.module.css';

/** components */
import Drone from './Drone/Drone';

export const Drones = ({
    Marker
}) => {
    return (
        <Fragment>
            <Drone droneId={1} />
            <Drone droneId={2} />
            <Drone droneId={3} />
        </Fragment>
    );
};

Drones.propTypes = {

};

Drones.defaultProps = {

};

export default Drones;

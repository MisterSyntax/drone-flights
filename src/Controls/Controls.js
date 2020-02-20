import React from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './Controls.module.css';

/** components */
import NavigateForm from './NavigateForm/NavigateForm';
import { AppContext } from '../App';

export const Controls = () => {
    const appContext = React.useContext(AppContext);

    if(!appContext.activeDroneId) {
        return (
            <section className={styles.controls}>
                <h2 className={styles.header}>Controls - Click a Drone to start</h2>
            </section>
        );
    }

    return (
        <section className={styles.controls}>
            <h2 className={styles.header}>Controls for Drone {appContext.activeDroneId}</h2>
            <NavigateForm />
        </section>
    );
};

Controls.propTypes = {

};

Controls.defaultProps = {

};

export default Controls;

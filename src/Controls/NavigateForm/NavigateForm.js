import React from 'react';
import PropTypes from 'prop-types';

/** styles */
import styles from './NavigateForm.module.css';

/** components */
import { AppContext } from '../../App';
import ConfirmButton from './ConfirmButton/ConfirmButton';

export const NavigateForm = () => {
    const appContext = React.useContext(AppContext);

    if(appContext.newDroneLocation && appContext.newDroneLocation.lat && appContext.newDroneLocation.lon) {
        return (
            <div className={styles['navigate-form']}>
                <div className={styles['confirmation-text']}>
                    You've selected <b>latitude:</b>{appContext.newDroneLocation.lat}, <b>longitude:</b>{appContext.newDroneLocation.lon}
                </div>
                <ConfirmButton />
            </div>
        )
    }

    return (
        <div className={styles['navigate-form']}>
            <div className={styles['instruction-text']}>
                Click the map to select a new location!
            </div>
        </div>
    );
};

NavigateForm.propTypes = {

};

NavigateForm.defaultProps = {

};

export default NavigateForm;

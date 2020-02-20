import React from 'react';
import PropTypes from 'prop-types';
import deep from 'deep-get-set';

/** styles */
import styles from './ConfirmButton.module.css';

/** components */
import { AppContext } from '../../../App';

/** helpers */
import { setCurrentLocation } from './helpers';

export const ConfirmButton = () => {
    const appContext = React.useContext(AppContext);
    const [confirmed, setConfirmed] = React.useState(false);

    React.useEffect(() => {
        if(confirmed){
            setTimeout(() => {
                setConfirmed(false);
                appContext.setNewDroneLocation({});
            }, 3000);
        }
    }, [confirmed, appContext]);

    if (confirmed) {
        return (
            <div className={styles['confirmation-text']}>
                The drone is traveling to its new position.
            </div>
        );
    }

    return (
        <button
            className={styles['confirm-button']}
            onClick={async () => {
                try {
                    console.log(appContext.activeDroneId, {
                        Lat: deep(appContext, 'newDroneLocation.lat'),
                        Lon: deep(appContext, 'newDroneLocation.lon'),
                        alt: 0
                    });
                    await setCurrentLocation(appContext.activeDroneId, {
                        Lat: deep(appContext, 'newDroneLocation.lat'),
                        Lon: deep(appContext, 'newDroneLocation.lon'),
                        alt: 0
                    });
                    setConfirmed(true);
                } catch (err) {
                    console.error(err);
                }
            }}
        >
            Confirm Location Update
        </button>
    );
};

ConfirmButton.propTypes = {

};

ConfirmButton.defaultProps = {

};

export default ConfirmButton;

import React, { useState } from 'react';
import './App.css';

/** Components */
import Controls from './Controls/Controls';
import Map from './Map/Map';

export const AppContext = React.createContext({});

function App() {
    const [activeDroneId, setActiveDroneId] = useState('');
    const [newDroneLocation, setNewDroneLocation] = useState({});

    const contextValue = {
        activeDroneId,
        newDroneLocation,
        setActiveDroneId,
        setNewDroneLocation,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <main className="App">
                <h1>Let's fly some drones</h1>
                <Map />
                <Controls />
            </main>
        </AppContext.Provider>
    );
}

export default App;

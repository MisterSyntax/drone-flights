import React from 'react';
import { Popup, Marker } from 'react-leaflet';

import { shallow } from 'enzyme';
import { Drone } from './Drone';
import * as helpers from './helpers';

describe('Drone', () => {
    beforeEach(() =>{
        const setState = jest.fn((x) => console.log('setState', x));
        jest.spyOn(React, 'useState').mockImplementation(init => [init, setState]);
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    })
    it('should render null when there is no lat/lon', async () => {
        const wrapper = shallow(<Drone droneId={1} />);
        expect(wrapper.type()).toEqual(null);
    });
    it('should render a drone when there is a latLngAltitude for the drone', async () => {
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [{
            'lat': 33.72,
            'lon': -117.95,
            'alt': 0
        }, jest.fn()]);
        const wrapper = shallow(<Drone droneId={1} />);
        expect(wrapper.find(Marker).length).toEqual(1);
    });
});

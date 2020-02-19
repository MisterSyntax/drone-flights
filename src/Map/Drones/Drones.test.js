import React from 'react';
import { shallow } from 'enzyme';
import { Drones } from './Drones';
import { Drone } from './Drone/Drone'

describe('Drones', () => {
    it('renders 3 drones', () => {
        const wrapper = shallow(<Drones shouldShowComponentVar={true} />);
        expect(wrapper.find(Drone).length).toEqual(3);
    });
});

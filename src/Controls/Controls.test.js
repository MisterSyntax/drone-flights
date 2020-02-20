import React from 'react';
import { shallow } from 'enzyme';
import { Controls } from './Controls';

import NavigateForm from './NavigateForm/NavigateForm';

describe('Controls', () => {
    it('should render an experience with no nav button when no active droneId', () => {
        jest.spyOn(React, 'useContext').mockImplementationOnce(() => ({activeDroneId: ''}));
        const wrapper = shallow(<Controls />);
        expect(wrapper.find(NavigateForm).length).toEqual(0);
    });

    it('should render an experience with no nav button when no active droneId', () => {
        jest.spyOn(React, 'useContext').mockImplementationOnce(() => ({activeDroneId: 1}));
        const wrapper = shallow(<Controls />);
        expect(wrapper.find(NavigateForm).length).toEqual(1);
    });
});

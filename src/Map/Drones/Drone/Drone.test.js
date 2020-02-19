import React from 'react';
import { shallow } from 'enzyme';
import { Drone } from './Drone';

describe('Drone', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<Drone shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<Drone shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

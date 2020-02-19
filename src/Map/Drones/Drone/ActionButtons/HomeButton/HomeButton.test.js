import React from 'react';
import { shallow } from 'enzyme';
import { HomeButton } from './HomeButton';

describe('HomeButton', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<HomeButton shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<HomeButton shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

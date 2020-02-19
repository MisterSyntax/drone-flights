import React from 'react';
import { shallow } from 'enzyme';
import { HomeForm } from './HomeForm';

describe('HomeForm', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<HomeForm shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<HomeForm shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ActionButtons } from './ActionButtons';

describe('ActionButtons', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<ActionButtons shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<ActionButtons shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

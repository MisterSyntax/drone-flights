import React from 'react';
import { shallow } from 'enzyme';
import { NavigateButton } from './NavigateButton';

describe('NavigateButton', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<NavigateButton shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<NavigateButton shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

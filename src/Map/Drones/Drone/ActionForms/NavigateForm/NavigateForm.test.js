import React from 'react';
import { shallow } from 'enzyme';
import { NavigateForm } from './NavigateForm';

describe('NavigateForm', () => {
    it('should render null when  is not supposed to render', () => {
        const wrapper = shallow(<NavigateForm shouldShowComponentVar={false} />);
        expect(wrapper.type()).toEqual(null);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<NavigateForm shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

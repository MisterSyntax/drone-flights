import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmButton } from './ConfirmButton';

describe('ConfirmButton', () => {
    it.only('should render the confirmation text when completed updating', () => {
        const setState = jest.fn();
        jest.spyOn(React, 'useState').mockImplementation(() => [true, setState]);
        const wrapper = shallow(<ConfirmButton  />);
        expect(wrapper.find('.confirmation-text').length).toEqual(1);
    });

    it('when it successfully renders it renders an element with the appropriate class-name', () => {
        const wrapper = shallow(<ConfirmButton shouldShowComponentVar={true} />);
        expect(wrapper.find('.class-name').length).toEqual(1);
    });
});

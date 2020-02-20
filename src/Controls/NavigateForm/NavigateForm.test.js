import React from 'react';
import { shallow } from 'enzyme';
import { NavigateForm } from './NavigateForm';

describe('NavigateForm', () => {
    it('should render the form ', () => {
        jest.spyOn(React, 'useContext').mockImplementationOnce(() => ({
            newDroneLocation: {lat: 1, lon: 1}
        }));
        const wrapper = shallow(<NavigateForm />);
        expect(wrapper.find('.confirmation-text').length).toEqual(1);
    });

    it('should render the instruction text', () => {
        const wrapper = shallow(<NavigateForm />);
        expect(wrapper.find('.instruction-text').length).toEqual(1);
    });

});

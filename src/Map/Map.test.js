import React from 'react';
import { shallow } from 'enzyme';
import { Map } from './Map';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

describe('Map', () => {
    it('renders a LeafletMap and a TileLayer', () => {
        const wrapper = shallow(<Map />);
        expect(wrapper.find(LeafletMap).length).toEqual(1);
        expect(wrapper.find(TileLayer).length).toEqual(1);
    });
});

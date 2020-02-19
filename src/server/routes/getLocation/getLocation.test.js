import getLocation from './getLocation.js';
import * as request from 'request-promise-native';

jest.mock('request-promise-native', () => () => Promise.resolve({"lat":33.69,"lon":-116.66,"alt":0}));
jest.spyOn(request, 'default').mockImplementation(x => x);

describe('getLocation', () => {
    it('makes a request for the location of the drone', async () => {
        const req = {
            query: {
                droneId: '1'
            }
        };
        const res = {
            json: jest.fn(x => x),
        };
        await getLocation(req, res);

        expect(res.json).toBeCalledWith({"lat":33.69,"lon":-116.66,"alt":0});
    });
});

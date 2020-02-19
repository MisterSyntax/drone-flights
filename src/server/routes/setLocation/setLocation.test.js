import getLocation from './setLocation.js';
import * as request from 'request-promise-native';

jest.mock('request-promise-native', () => () => Promise.resolve());
jest.spyOn(request, 'default').mockImplementation(x => x);

describe('getLocation', () => {
    it('makes a request for the location of the drone', async () => {
        const req = {
            query: {
                droneId: '1'
            }
        };
        const res = {
            sendStatus: jest.fn(x => x),
        };
        await getLocation(req, res);

        expect(res.sendStatus).toBeCalledWith(200);
    });
});

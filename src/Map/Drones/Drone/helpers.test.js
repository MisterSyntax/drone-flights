import { getCurrentLocation } from './helpers';

const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
});
const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

describe('getCurrentLocation', () => {
    it('makes a get call for the location of the given drone', async () => {
        fetchSpy.mockClear();

        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        await getCurrentLocation(1);
        expect(global.fetch.mock.calls[0][0]).toEqual("http://localhost:8000/getLocation?droneId=1");
    })
});

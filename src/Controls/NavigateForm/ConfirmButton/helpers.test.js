import { setCurrentLocation } from './helpers';

const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
});
const fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

describe('setCurrentLocation', () => {
    it('makes the request to set the current location', async () => {
        await setCurrentLocation(1, { lla: 'lla' });
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch.mock.calls[0]).toEqual(["http://localhost:8000/setLocation", {"body": "{\"droneId\":\"1\",\"lla\":{\"lla\":\"lla\"}}", "headers": {"Accept": "application/json", "Content-Type": "application/json"}, "method": "POST"}]);
    });
});

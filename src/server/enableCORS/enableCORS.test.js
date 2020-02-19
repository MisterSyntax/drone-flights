import enableCORS from './enableCORS.js';

describe('enableCORS', () => {
    it('sets up response headers for CORS, and calls next', () => {
        const res = {
            header: jest.fn(x => x),
        };
        const next = jest.fn(x => x);
        enableCORS(undefined, res, next);

        expect(res.header.mock.calls[0]).toEqual(["Access-Control-Allow-Origin", "http://localhost:3000"]);
        expect(res.header.mock.calls[1]).toEqual(["Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"]);
        expect(next).toHaveBeenCalledTimes(1);
    });
});

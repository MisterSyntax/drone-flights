import express from 'express';
import routes from './routes.js';

jest.mock('express', () => ({
    Router: () => ({
        use: jest.fn(x => x),
        get: jest.fn(x => x),
        post: jest.fn(x => x),
    })
}));

describe('routes', () => {
    it('sets up gets/posts for te appropriate routes', () => {
        const router = express.Router();

        router.use(routes);
        expect(router.use.mock.calls[0][0].get.mock.calls[0][0]).toEqual('/getLocation');
        expect(router.use.mock.calls[0][0].post.mock.calls[0][0]).toEqual('/setLocation');
    });
});

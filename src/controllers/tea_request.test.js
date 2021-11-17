const request = require('supertest');
const app = require('../app');

describe('Test tea API endpoint request', () => {
    test('GET /tea with no param should return correct object', async () => {
        const res = await request(app).get('/tea');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Black',
        });
    });

    test('GET /tea with param should return correct object', async () => {
        const res = await request(app)
            .get('/tea')
            .query({ teaName: 'Green' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Green',
        });
    });

    test('GET /tea with different param should return correct object', async () => {
        const res = await request(app)
            .get('/tea')
            .query({ teaName: 'Rooibos' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Rooibos',
        });
    });
});
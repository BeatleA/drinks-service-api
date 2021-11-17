const request = require('supertest');
const app = require('../app');

describe('Test coffeelover API endpoint request', () => {
    test('GET should return correct message', async () => {
        const res = await request(app).get('/coffeelover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });
});

describe('Test coffee API endpoint request', () => {
    test('GET /coffee should return correct object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Latte' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    });

    test('GET /coffee should return correct object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Espresso' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Espresso',
        });
    });

    test('GET /coffee should return correct object', async () => {
        const res = await request(app).get('/coffee');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        });
    });
});
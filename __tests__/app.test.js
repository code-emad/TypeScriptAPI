const request = require('supertest')
const app = require('../app.cjs')
const db = require ('../db/connection.cjs')
const seed = require('../db/seed/seed.cjs')
const testData = require('../db/data/data-test/index.ts')

console.log({app: app}, {db: db}, seed, testData)

// beforeEach(() => seed(testData));

// afterAll(() => {db.end()})

describe('GET/api/names', () => {
    test('should return a status code of 200', () => {
        return request(app).get('/api/names').expect(200)
    })
});
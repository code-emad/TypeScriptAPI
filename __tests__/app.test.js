const request = require('supertest')
const app = require('../app.cjs')
const db = require ('../db/connection.cjs')
const seed = require('../db/seed/seed.cjs')
const testData = require('../db/data/data-test/index.cjs')


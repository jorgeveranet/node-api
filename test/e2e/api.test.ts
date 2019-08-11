import request from 'supertest'
import app from '../../src/server'

describe('api', () => {
  describe('GET /', () => {
    it('responds with 200 status code and body message', async () => {
      const response = await request(app).get('/')
      expect(response.status).toEqual(200)
      expect(response.body).toEqual({ message: 'Hello World' })
    })
  })
})

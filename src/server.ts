import express from 'express'
const app = express()

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

if (app.get('env') !== 'test') {
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
}

export default app

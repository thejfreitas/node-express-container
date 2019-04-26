const express = require('express')
const app = express()
const port = 8083
const author = 'J de Freitas'

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/j-de-freitas', (req, res) => res.send(`${author} was here!`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
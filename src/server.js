const express = require('express')

const app = express()

app.use(express.json())

app.post('/users', (request, response) => {
  const { name, email, password } = request.body

  // response.send(`
  //   User: ${name} - Email: ${email} - Password: ${password}
  // `)

  response.json({ name, email, password })
})

const PORT = 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
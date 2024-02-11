const express = require('express')
const { createTable, insertPerson, selectPerson } = require("./repositories/index")

const PORT = 3000

const app = express()

app.get('/', async (req, res) => {
  await createTable()
  await insertPerson()

  const [people] = await selectPerson()

  res.send(`
  <div>
    <h1>Full Cycle</h1>
    <ul>
      ${people.map((person) => `<li>${person.name}</li>`).join('')}
    </ul>
  </div>`
  )
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
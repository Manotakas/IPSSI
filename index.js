const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
    )

    app.use(express.json())
    app.get('/', (req, res) => {
    res.json({ message: 'Hallo express, ich bin Davi!'})
})

app.listen(3000)

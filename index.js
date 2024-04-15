const express = require("express")
const app = express()
app.use(express.json())
const URL = '127.0.0.1'
const PORT = 8000

const server = app.listen(PORT, URL, () => {
    console.log("https://" + server.address().address)
    console.log(server.address().port)
})

let companions = [

    {
        "name": "Minthara",
        "class": "Paladin",
        "id": 0
    },
    {
        "name": "Jaheira",
        "class": "Druid / Fighter",
        "id": 1
    },
    {
        "name": "Shadowshart",
        "class": "Emo cleric",
        "id": 2
    },
    {
        "name": "Lae'zel",
        "class": "The Chad Fighter",
        "id": 3
    },
    {
        "name": "Minsc",
        "class": "Barbarian / Ranger",
        "id": 4
    },
    {
        "name": "Wyll",
        "class": "Warlock",
        "id": 5
    },
    {
        "name": "Gayle",
        "class": "Wizarad",
        "id": 6
    },
    {
        "name": "Daddy Halsin",
        "class": "Bear",
        "id": 7
    },
    {
        "name": "Daddy Durge",
        "class": "Morderhobo Sorc",
        "id": 8
    },]

app.get('/', (request, resopnse) => {
    let result = "GET ALL: /companions<br>GET BY ID: /companions/id"
    resopnse.send(JSON.stringify(result))
})
//GET
app.get('/companions', (request, response) => {
    response.send(companions)
})

app.get('/companions/:id', (request, response) => {
    const companionId = request.params.id;
    const companion = companions.find(companion => companion.id == companionId);

    if (companion) {
        response.send(companion);
    } else {
        response.status(404).send("Companion not found");
    }
})
// Post
app.post('/companions', (request, response) => {
    const newCompanion = request.body

    companions.push(newCompanion)
    response.status(201).send("Companion added successfully")
})
//UPDATE / PUT
app.put('/companions/:id', (request, response) => {
    const companionId = request.params.id
    const updatedCompanion = request.body

    const index = companions.findIndex(companion => companion.id == companionId)

    if (index !== -1) {
        companions[index] = updatedCompanion;
        response.send("Companion updated successfully")
    } else {
        response.status(404).send("Companion not found")
    }
})
//DELETE
app.delete('/companions/:id', (request , response) => {
const companionId = request.params.id
const index = companions.findIndex( companion => companion.id == companionId)
if (index !== -1) {
    companions.splice(index, 1);
    response.send("Companion deleted successfully");
} else {
    response.status(404).send("Companion not found");
}
})
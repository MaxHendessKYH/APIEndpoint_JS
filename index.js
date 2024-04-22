const express = require("express")
const app = express()
app.use(express.json())
const URL = '127.0.0.1'
const PORT = 8000

const server = app.listen(PORT, URL, () => {
    console.log("https://" + server.address().address + ":8000")
    console.log(server.address().port)
})
let notes = [
    {
    "filename": "",
    "text": "hello world",
    "id": 0
}
]
// Noted crud
app.post('/notes', (request, response) => {
    const newNote = {
        "filename": request.body.filename,
        "text": request.body.filetext,
        "id": notes.length + 1
    }

    notes.push(newNote)
    response.status(201).send("Note added successfully")
})
app.get('/notes', (request, response) => {
    response.send(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = request.params.id;
    const note = notes.find(note => note.id == id);

    if (note) {
        response.send(note);
    } else {
        response.status(404).send("Note not found");
    }
})

app.put('/notes/:id', (request, response) => {
    const id = request.params.id
    const updatedNote = request.body
    updatedNote.id = id

    const index = notes.findIndex(note => note.id == id)

    if (index !== -1) {
        notes[index] = updatedNote;
        response.send("Note updated successfully")
    } else {
        response.status(404).send("Note not found")
    }
})
app.delete('/notes/:id', (request , response) => {
    const id = request.params.id
    const index = notes.findIndex(note => note.id == id)
    if (index !== -1) {
        notes.splice(index, 1);
        response.send("Note deleted successfully");
    } else {
        response.status(404).send("Note not found");
    }
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
    let result = "List of Requests:<br>GET ALL: /notes<br>GET BY ID: /notes/id<br>DELETE: /notes/:id <br><br>Requests with body:<br>POST: /notes<br>PUT: /notes/:id" +
    "<br><br>Body Example:<br>{ <br>''filenamename'': '' '' <br>''filetext'': '' ''<br>}"
    resopnse.send(result)
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
    const newCompanion = {
        "name": request.body.name,
        "class": request.body.class,
        "id": companions.length + 1
    }

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
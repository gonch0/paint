const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()
const cors = require('cors')
const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())


app.ws('/', (ws, req) => {
    console.log('connected')
    ws.send('success 123')
    ws.on('message', (msg) => {
        console.log('ws on')
        msg = JSON.parse(msg)
        switch (msg.method) {
            case 'connection':
                connectionHandler(ws, msg)
                break
        }
    })
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))


const connectionHandler = (ws, msg) => {
    console.log(msg)

    ws.id = msg.id
    broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(`User ${msg.username} connected`)
        }
    })
}

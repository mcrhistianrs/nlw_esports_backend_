import express from 'express'

const app = express();

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1' },
        { id: 1, name: 'Anúncio 2' },
        { id: 1, name: 'Anúncio 3' }
    ])
})
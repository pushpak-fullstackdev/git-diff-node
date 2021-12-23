require('dotenv').config()
const express = require('express')
const cors = require('cors');
const { getAcessToken, getRepos, getBranches, compareBranches } = require('./integration');
const { json } = require('express');
const app = express()
const port = 3001
app.use(cors())
app.use(json())
app.post('/acess-token', async (req, res) => {
    console.log('asdasdasdasdasd', req.body);
    const { data } = await getAcessToken(req.body);
    console.log('data', data);
    if (data && data.access_token) {
        res.status(200).json(data);
    } else {
        res.status(400).json({error: 'Acess token not recived'});
    }
})

app.get('/repos', async (req, res) => {
    const auth = req.headers.authorization;
    const { data } = await getRepos(auth);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(400).json({error: 'Acess token not recived'});
    }
})

app.post('/getBranches', async (req, res) => {
    const auth = req.headers.authorization;
    const { data } = await getBranches(req.body, auth);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(400).json({error: 'Acess token not recived'});
    }
})

app.post('/compareBranches', async (req, res) => {
    const auth = req.headers.authorization;
    const { data } = await compareBranches(req.body, auth);
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(400).json({error: 'Acess token not recived'});
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
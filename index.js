const Axios = require('axios')
const express = require('express')
const app = express()
const port = 3010

app.get('/users/gender/get', (req, res) => {
    const nameValue = req.query.name
    const genderApi = `https://gender-api.com/get?name=${nameValue}&key=qwertyuiortyui`
    Axios.get(genderApi)
        .then(response => {
            const name = response.data.name
            const gender = response.data.gender
            const error='name not specified'
            if(name == ''){
                res.json({error})
            }
            console.log(response.data)
            res.json({ name, gender })
        })
        .catch(err => {
            console.log(err)
            res.json('name not found')
        })
})

app.listen(port, () => { console.log(`port is ${port}`) })
const express = require('express');


const app = express();

const rootCall = (req, res) => {
    res.send('Thank U so much')
}

app.get('/', rootCall)

app.listen(4000, console.log('listening to port 4000'));
const express = require('express')
const port = 3000;
const rootRouter = require('./routes/index');
const cors = require('cors');

const app = express(); 


app.use(cors());
app.use(express.json());


app.use('/api/v1', rootRouter);
    

app.listen(port, () => (console.log(`Example app listening on port ${port}!`)));


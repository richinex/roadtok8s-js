const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello Express World</h1>");
})

app.get('/api/v2/rocket-man1/', (req, res) => {
    const myObject = {who: "rocket man", where: "mars"};
    const jsonString = JSON.stringify(myObject);
    return res.send(jsonString);
})

app.listen(port, () => {
    const appId = path.resolve(__dirname, 'app.pid');
    fs.writeFileSync(appId, `${process.pid}`);
    console.log(`Server is running on port http://127.0.0.1:${port}`)
})
const express = require ('express');
const app = express();

  
app.get('/list', (req, res) => {
    let list = [
        {
            name: 'l'
        },
        {
            name: 'y'
        },
        {
            name: 'z'
        }
    ];
    res.header("Access-Control-Allow-Origin", "*");
    res.json(list);

    console.log('在main里修改，这里是dev');
})

app.listen('2021', () => {
    console.log('Example app listening at http://localhost:2021/list}');
})
const express = require("express");

const app= express();

app.get('/', (req, res) => {
res.send('<h1>Ok</h1>');
});

app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"});
    });
    
app.get('/time', (req, res) => {
        var time = new Date ();
        res.send({status:200, message: time.getHours() + ":"+ time.getMinutes() + ":" + time.getSeconds()});
        });
        
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

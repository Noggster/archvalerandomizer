/**/

const express = require('express');
const cors = require('cors');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec


const app = express();

app.use(cors())

app.get('/', (req, res) => {
    console.log('request gotten');

    var item = []

    exec('python parseData.py', (error, stdout, stderr) => {
        if(error) {
            console.log(error);
            return;
        }

        res.end(stdout);
    });

    /*const process = spawn('python', ['parseData.py']);

    process.stdout.on('data', (myData) => {
        // Do whatever you want with the returned data.
        // ...
        item.push(myData)
    })
    process.stderr.on('data', (myErr) => {
        console.log(myErr)
        // If anything gets written to stderr, it'll be in the myErr variable
    })
    

    console.log(item);
    res.end(item.toString())*/
});

app.listen(2020, () => {
    console.log('server is listening on port 2020');
});
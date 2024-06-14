import express from 'express' 
import cors from 'cors'
import fs from 'node:fs'

const app = express(); 
const port = 3000; 

app.use(cors()); 

app.get('/', (req, res) => { 
res.send('Hello World!'); 
}); 

// Rockstar
app.get('/rstar', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/rockstar.json', function(err, data){
        res.send(data);
    });
});

// Nintendo
app.get('/switch-games', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/switch-games.json', function(err, data){
        res.send(data);
    });
}); 

app.get('/wiiu-games', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/wiiu-games.json', function(err, data){
        res.send(data);
    });
}); 

app.get('/wii-games', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/wii-games.json', function(err, data){
        res.send(data);
    });
}); 

// Space photos
app.get('/planeten', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/planets.json', function(err, data){
        res.send(data);
    });
});

app.get('/wide', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/wide.json', function(err, data){
        res.send(data);
    });
});

app.get('/deep', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/deep.json', function(err, data){
        res.send(data);
    });
});

// Contact form
 app.get('/contact', (req, res) => { 
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
        res.send(data);
});

app.listen(port, () => { 
console.log(`Example app listening on port ${port}`); 
}); 
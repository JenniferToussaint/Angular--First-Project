const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const { isForOfStatement } = require('typescript');
const app = express();

const distDir = '../dist';
//Connexion a mongoose
const uri = "mongodb+srv://Jennifer:3004@cluster0.lcbpv.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.set('useUnifiedTopology', true);
const Film = require('./model/film.model');


app.use(express.static(path.join(__dirname, distDir))); // Quelque soit le lien je viens dans le dossier distant 
app.use(/^((?!(api)).)*/, (req, res) =>{ //Quand tu tappe autre chose que /api je lui envoie le fichier index.html du dossier dist
    res.sendFile(path.join(__dirname, distDir + '/index.html'));

});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 var promise = mongoose.connect(uri, {useNewUrlParser: true});
 promise.then((db) =>{
     console.log('DB connected');
    app.listen(3000, () =>{

        //A l'ouverture du serveur je mets ce message d'accueil
        console.log('Server Launch!');
    });
});





/*ROUTES*/

app.post('/api/movies', (req,res) =>{
    var newFilm = new Film(req.body);

    newFilm.save((err,obj) =>{
        if(err){
            console.log(err);
            return res.send(500);

        }
        res.send(obj);
    });
});

app.get('/api/movies', (req, res) =>{
    Film.find({}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.get('/api/movies/:id', (req, res) =>{
    Film.findOne({_id: req.params.id}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.put('/api/movies/:id', (req, res) =>{
    Film.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.delete('/api/movies/:id', (req, res) =>{
    Film.deleteOne({_id: req.params.id}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        res.status(204).end();
    });
});


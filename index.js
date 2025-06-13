const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection= require("./database/database");
const perguntaModel = require("./database/Pergunta") ;

connection
    .authenticate()
    .then(()=>{
        console.log("conexão feita com banco de dados");
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/perguntas', (req, res) => {
    res.render('perguntas');
});

app.post("/salvarpergunta", (req,res)=>{
     var titulo = req.body.titulo;
     var descricao = req.body.descricao;
    res.send("Formulario Recebido com sucesso titulo"+ titulo + " " + "descricao" + descricao);
});

app.listen(8080, () => {
    console.log('App rodando');
});
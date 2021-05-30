const app  = require("./SpeedTest");
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//config
// Body Parser
    app.use(bodyParser.urlencoded({extends: false}))
    app.use(bodyParser.json())
//Rotas
    app.get("/login",function(req,res){
        res.sendFile(__dirname+"/public/login.html");
    })

    app.get("/register",function(req,res){
        res.sendFile(__dirname+"/public/register.html");
    })

    app.get("/perfil",function(req,res){
        res.sendFile(__dirname+"/public/perfil.html");
    })

    app.post("/data_reg",function(req,res) {
        req.body.user
        res.send(req.body.user+ " registered Success!!WELCOME");
    })
    app.post("/data_login",function(req,res) {
        res.send('Login on');
    })

//window.addEventListener('load', () =>{
//   registerSW()
//})

async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        } catch(e){
            console.log(`SW registration failed`);
        }
    }
}

const port = process.env.PORT || 8888;
app.listen(port, function () {
    console.log('Speedtest Server is up and running!');
});

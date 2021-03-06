const app  = require("./SpeedTest");
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/User')
app.set('view engine', 'handlebars');
const Window = require('window');
const window = new Window();

window.addEventListener('load', () =>{
    registerSW()
 })
 
 async function registerSW(){
     if('serviceWorker' in navigator){
         try{
             await navigator.serviceWorker.register('./sw.js')
         } catch(e){
             console.log(`SW registration failed`);
         }
     }
 }
//config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
// Body Parser
    app.use(bodyParser.urlencoded({extends: false}))
    app.use(bodyParser.json())
//Rotas
    app.get("/",function(req,res){
    res.render('home');
    })
    app.get("/home",function(req,res){
        res.render('home');
        })
    app.get("/login",function(req,res){
        res.render('login');
    })

    app.get("/register",function(req,res){
        res.render('register');
    })
    app.get("/perfil",function(req,res){
        res.render('perfil');
    })
    app.get("/about",function(req,res){
        res.render('about');
    })
//postagens
    app.post("/data_reg",function(req,res) {
        User.create({
            user: req.body.user,
            email: req.body.email,
            senha: req.body.senha
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro) {
            res.send("Error : "+ erro)
            
        })
    })
    app.post("/data_login",function(req,res) {
        User.findAll().then(function(post){
        res.render('perfil', {post: post})
        })
    })
    app.post("/speed",function(req,res){
        User.create({
            plano: req.body.plano,
            speed_dl: req.body.dlText,
            speed_ul: req.body.ulText
        })

    })

const port = process.env.PORT || 8888;
app.listen(port, function () {
    console.log('Speedtest Server is up and running!');
});

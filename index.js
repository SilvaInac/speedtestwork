const app  = require("./SpeedTest");
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

//config
    //Conexão com o MySql
    const sequelize = new Sequelize('connection','root','Du190401',{
        host:"localhost",
        dialect: 'mysql'
    })
//Rotas
    app.get("/login",function(req,res){
        res.sendFile(__dirname+"/public/login.html");
    })

    app.get("/register",function(req,res){
        res.sendFile(__dirname+"/public/register.html");
    })

    app.get("/about",function(req,res){
        res.send("This project");
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

const app  = require("./SpeedTest");


app.get("/login",function(req,res){
    res.send("LOGIN");
})

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
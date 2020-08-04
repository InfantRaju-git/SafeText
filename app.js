const express=require('express')
var operator=require('./encrypt_decrypt.js')
const app=express()

app.listen(process.env.PORT || 3000,function (req,res)
{
console.log("Running...")
});

app.get('/',function(req,res){
    res.send("<html><center><body><h1>SafeText API Documentation</h1><hr><p>Usage for Encryption : https://safetextapi.herokuapp.com/encrypt/<code>place your message</code>/<b>key</b></p><p>Usage for Decryption : https://safetextapi.herokuapp.com/decrypt/<code>place your encrypted message</code>/<b>key</b></p><u>Note:</u> key can take any value between 1-500</p><p><b>Happy Encryption !</b></p></body></center></html>")
});

app.get('/encrypt/:data/:key',function(req,res){
    const data=req.params.data
    const key=req.params.key
    code=operator.encrypt(data,key)
    res.send(code)
});


app.get('/decrypt/:data/:key',function(req,res){
    const data=req.params.data
    const key=req.params.key
    decode=operator.decrypt(data,key)
    res.send(decode)
});
const express=require('express')
var operator=require('./encrypt_decrypt.js')
const app=express()

app.listen(process.env.PORT || 3000,function (req,res)
{
console.log("Running...")
});

app.get('/',function(req,res){
    res.send("<html><center><body><h1>SafeText API Documentation</h1><hr><p>Usage=> http://appname.com/encrypt(or)decrypt/placeyour<b>to_be_encrypted_message(or)to_be_decrypted_message</b>here/placeyour<b>key</b>here</p><p><u>Note:</u> key can take any value between 32-500</p><p><b>Happy Encryption !</b></p></body></center></html>")
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
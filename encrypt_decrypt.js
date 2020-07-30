function encrypt(data,key){
    var i
    var data=data.toLowerCase()
    var key=parseInt(key)
    var coded=[]
    for(i=0;i<data.length;i++){
        coded.push(data.charCodeAt(i)-key)
    }
    // for(i=0;i<coded.length;i++){console.log(coded[i])}
    var tobesend=""
    for(i=coded.length-1;i>=0;i--){
        if(coded[i]==47){coded[i]+=1}
        tobesend+=String.fromCharCode(coded[i])
    }
    var msg={"status":"Success","message":tobesend,"key":key}
    obj=JSON.parse(JSON.stringify(msg))
    console.log("Encryption successfull...")
    return obj
}

function decrypt(data,key){
    var i
    op=[]
    key=parseInt(key)
    for(i=data.length-1;i>=0;i--){
        op.push(data.charCodeAt(i)+key)
    }
    // for(i=0;i<op.length;i++){console.log(op[i])}

    var output=""
    for(i=0;i<op.length;i++){
        if(op[i]==47){op[i]+=1}
        output+=String.fromCharCode(op[i])
    }
    output=output.toLowerCase()
    var msg={"status":"Success","message":output,"key":key}
    obj=JSON.parse(JSON.stringify(msg))
    console.log("Decryption successfull...")
    return obj
}

module.exports.encrypt=encrypt
module.exports.decrypt=decrypt
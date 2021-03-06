const express = require("express");
const app  = express();

app.get('/',function (request,response){
    console.log('Petición recibida por el cliente');
    console.log('Request url ' + request.url);
    console.log('Request Method '  + request.method);
    console.log('Request user-agent ' + request.headers['user-agent']);
    console.log('Response status code ' + response.statusCode);
    
    response.statusCode = 200;
    response.setHeader('Content-type' , 'application/json');
    response.json('{ok:true,message:"Recibido!"}');    
});

app.get("/bye",function (request,response){
    console.log('Petición recibida por el cliente');
    console.log('Request url ' + request.url);
    console.log('Request Method ' + request.method);
    console.log('Request user-agent ' + request.headers['user-agent']);
    console.log('Response status code ' + response.statusCode);
    
    response.statusCode = 200;
    response.setHeader('Content-type' , 'application/json');
    response.write('{ok:true,message:"Adios!"}');
    response.end();
});

app.listen(3000);
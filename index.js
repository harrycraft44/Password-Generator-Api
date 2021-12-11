var express = require('express');
var app = express();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

app.get('/', function(req, res){

       var cha =[];
    var output ="";

    if(req.query.specialcharacters="true"){
        cha.push("~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\","/",":",";",`"`,"'","<",">",",",".","?")
    }
    if(req.query.numbers="true"){
        cha.push("1","2","3","4","5","6","7","8","9")

    }
    if(req.query.lowercase="true"){
        cha.push("a" ,"b" ,"c", "d", "e", "f" ,"g", "h", "i" ,"j" ,"k" ,"l", "m", "n" ,"o" ,"p" ,"q", "r" ,"s", "t","u" ,"v" ,"w ","x" ,"y" ,"z")

    }
    
    if(req.query.uppercase== "true"){
        cha.push("A" ,"B" ,"C", "D", "E", "F" ,"G", "H", "I" ,"J" ,"K" ,"L", "m", "n" ,"o" ,"p" ,"q", "r" ,"s", "t","u" ,"v" ,"w ","x" ,"y" ,"z")

    }
    for(let i = 0; i < parseInt(req.query.length); i++){
        output=output+cha[getRandomInt(0,cha.length)]
    }
    res.end(output.replace(" ",""));
});

app.listen(80);

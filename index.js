var express = require('express');
var app = express();
var number = [1,2,3,4,5,6,7,8,9]
var sc = ["~","`","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|","\\","/",":",";",`"`,"'","<",">",",",".","?"]
var lowerletters = ["a" ,"b" ,"c", "d", "e", "f" ,"g", "h", "i" ,"j" ,"k" ,"l", "m", "n" ,"o" ,"p" ,"q", "r" ,"s", "t","u" ,"v" ,"w ","x" ,"y" ,"z"]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function scc(){
    return sc[getRandomInt(0,sc.length)];
      
}
function Numbers(){
    return number[getRandomInt(0,8)];
      
}
function lowerletter(){
  return lowerletters[getRandomInt(0,26)];

}
app.get('/', function(req, res){
    var output ="";
    var Length = parseInt(req.query.length)
    while (Length != 0){
        console.log(getRandomInt(0,2))

        switch(getRandomInt(0,6)){
            case 0:
                if(req.query.lowercase == "true"){
                    res.write(lowerletter(req.query.lowercase).replace(" ",""))
                    Length = Length - 1

                    }else{                
                    }
                break;
            case 1:
                if(req.query.uppercase == "true"){
                res.write(lowerletter().toUpperCase().replace(" ",""))
                Length = Length - 1

                }else{                
                }
                break;
            case 2:
                if(req.query.uppercase == "true"){
                    res.write(lowerletter().toUpperCase().replace(" ",""))
                                       Length = Length - 1

                }else{                
                }
                break;
            case 3:
                if(req.query.numbers == "true"){
                    res.write(Numbers().toString().replace(" ",""))
                    Length = Length - 1
                }else{                
                }
                break;
            case 4:
                if(req.query.numbers == "true"){ 
                        res.write(Numbers().toString().replace(" ",""))
                        Length = Length - 1
                }else{                
                }
                break;
            case 5:
                if(req.query.specialcharacters == "true"){ 
                        res.write(scc().toString().replace(" ",""))
                        Length = Length - 1
                }else{                
                }
                break;    
            case 5:
                if(req.query.specialcharacters == "true"){ 
                        res.write(scc().toString().replace(" ",""))
                        Length = Length - 1
                }else{                
                }
                break;              
        }
  
}
res.end()
});

app.listen(80);

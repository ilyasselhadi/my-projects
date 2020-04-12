 let buttons ;
let oper = "";
let x , y ,r = 0 ;
let patt = /^[0-9]+$/
let b ;
 function setup(){
     //styling buttons
     buttons = selectAll(".style");
  for(i=0 ; i<buttons.length;i++){
    buttons[i].mouseOver(over);
    buttons[i].mouseOut(out);
  }
 
}



function numbersclick(n){
document.getElementById("screen").value += n ;
}



function plus (){
x = parseInt(document.getElementById("screen").value)  ;
b= patt.test(document.getElementById("screen").value);
if(b){
 document.getElementById("screen").value = null ;
   oper = '+';
}
else {
    alert("this is not a numberrr !!! ");
    x= 0 ;
    document.getElementById("screen").value = null ;
    oper = "";

}

}
function minus (){
 x = parseInt(document.getElementById("screen").value)  ;
 b= patt.test(document.getElementById("screen").value);
if(b){
 document.getElementById("screen").value = null ;
   oper = '-';
}
else {
    alert("this is not a numberrr !!! ");
    x= 0 ;
    document.getElementById("screen").value = null ;
    oper = "";

}

    }
function multiplay (){
 x = parseInt(document.getElementById("screen").value)  ;
 b= patt.test(document.getElementById("screen").value);
 if(b){
  document.getElementById("screen").value = null ;
    oper = '*';
 }
 else {
     alert("this is not a numberrr !!! ");
     x= 0 ;
     document.getElementById("screen").value = null ;
     oper = "";
 
 }
 }

function devide(){
 x = parseInt(document.getElementById("screen").value)  ;
 b= patt.test(document.getElementById("screen").value);
 if(b){
  document.getElementById("screen").value = null ;
    oper = '/';
 }
 else {
     alert("this is not a numberrr !!! ");
     x= 0 ;
     document.getElementById("screen").value = null ;
     oper = "";
 
 }
}

function cclear(){
    x= 0 ;
    document.getElementById("screen").value = null ;
    oper = "";
    
}

function equal(){
     
    y = parseInt(document.getElementById("screen").value)  ;
    
    if(oper == '+'){
        r= x+y ;
        document.getElementById("screen").value = r ;
        y= 0;
        oper="";
    }
    else if( oper == '-') {
        r= x-y ;
        document.getElementById("screen").value = r ;
        y= 0;
        oper="";
    }
    else if( oper == '*') {
        r= x*y ;
        document.getElementById("screen").value = r ;
        y= 0;
        oper="";
    }
    else if( oper == '/') {
        r= x/y ;
        document.getElementById("screen").value = r ;
        y= 0;
        oper="";
    }
    else{
       alert("enter an operation please");
       x= 0 ;
       document.getElementById("screen").value = null ;
       oper = "";
    }
   
  
}



function over(){
    this.style("background-color","#303979");
}
function out(){
    this.style("background-color","rgba(42,50,113, .28)");
}
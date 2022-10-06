//#region 
var nombre1="El tiempo que se";
console.log(nombre1);
let nombre2="disfuta es el verdadero";
console.log(nombre2);
const nombre3="tiempo vivido";
console.log(nombre3);
//#endregion

//#region 
function suma(num1,num2){
    
    var suma=num1+num2;
    return (suma);
  }
  try{
    var num1= 120;
    var num2= 110;
    console.log (suma(num1,num2));
  } catch{
    const mensaje='los digitos ingresados no son numeros';
    console.log (mensaje);
  }  
  
  function resta(num1,num2){
    
    var resta=num1-num2;
    return (resta);
  }
  try{
    var num1= 120;
    var num2= 85;
    console.log (resta(num1,num2));
  } catch{
    const mensaje='los digitos ingresados no son numeros';
    console.log (mensaje);
  }
  
  
  function divi(num1,num2){
    
    let divi=num1/num2;
    return (divi);
  }
  try{
    let num1= 120;
    let num2= 5;
    console.log (divi(num1,num2));
  } catch{
    const mensaje='los digitos ingresados no son numeros';
    console.log (mensaje);
  }
  
  function multi(num1,num2){
    
    let multi=num1*num2;
    return (multi);
  }
  try{
    let num1= 23;
    let num2= 55;
    console.log (multi(num1,num2));
  } catch{
    const mensaje='los digitos ingresados no son numeros';
    console.log (mensaje);
  }
  
  //#endregion
  
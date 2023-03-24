//funciones

function sayHello (){

};

function twoSum (num1, num2){
    if (typeof num1 === "number" && typeof num2 === "number")
    {console.log (num1 + num2);} else {
        console.error( "la funcion espera dos numeros")
    };
    return "la funcion espera dos numeros";
    function twoSumConretorno (num1, num2){
        if (typeof num1 === "number" && typeof num2 === "number")
       return "el resultado es:" (num1 + num2);
           return  "la funcion espera dos numeros";
        };
               
}
//let num1 = 56;
//let num2 = 5;
//sayHello();
//twoSum("feliz", 56);
//twoSum(5, 9)
//twoSumConretorno(89,8);
//console.log (twoSumConretorno (9, 8));

//arreglos o vectores arrays

let clientes =[];
console.log (clientes);
clientes[0]= "Rosario";
clientes[1]= "Ramon";
clientes [5]= "Pepito";
console.log(clientes);

clientes[clientes.length] = "Felipe";
console.log(clientes);

clientes.push("Felipe", "Roberto", "Carla");
clientes.pop ();
console.log(clientes);
clientes.unshift ("Pedro");
console.log(clientes);
clientes.shift();
console.log (clientes);


console.log (clientes(0));
console.log (clientes (1));
console.log (clientes (2));
console.log (clientes (3));
console.log (clientes (4));


for (let i =0; i < clientes.length; i++) {
    console.log(clientes);
}
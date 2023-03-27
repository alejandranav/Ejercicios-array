
console.log("******* EJERCICIO1 ********");
// Part 1 Array 3 people
let fila= ["Sofia", "David", "Juan"];
let divAlert=document.getElementById("divAlert");
//Part 2 add 2 people, the first one is out
fila.push("Sara");
fila.push("Agustín");
fila.shift("Sofia");
//Part 3 add behind David Renata, add Elena in the line
fila.splice(1,0,"Renata");
fila.push("Elena")
divAlert.innerHTML=fila.length+ " personas en la fila"
divAlert.innerHTML+= "<ol><li>" + fila[0] 
+ "</li>"+"<li>" + fila[1] + "</li>"
+"<li>" + fila[2] + "</li>"
+"<li>" + fila[3] + "</li>"
+"<li>" + fila[4] + "</li>"
+"<li>" + fila[5] + "</li>"
+"<li>" + fila[6] + "</li></ol>";
console.log(fila);


console.log("******* EJERCICIO2 ********");
//Do pattern
let mult=["*", "**", "***", "****", "*****"]
for (let cont = "*"; cont<"******"; cont+="*") {
    console.log(cont); 
}

console.log("******* EJERCICIO3 ********");


/*Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive.
- Print all the odd numbers between 1 - 100.
- Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6]
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190*/










/*divAlert.innerHTML+= "<ol><li>" + libros[0] 
+ "</li>"+"<li>" + libros[1] + "</li>"
+"<li>" + libros[2] + "</li>"
+"<li>" + libros[3] + "</li>"
+"<li>" + libros[4] + "</li>"
+"<li>" + libros[5] + "</li>"
+"<li>" + libros[6] + "</li>"
+"<li>" + libros[7] + "</li></ol>";*/
/*divAlert.innerHTML+="<li>" + libros[1] + "</li>"
divAlert.innerHTML+="<li>" + libros[2] + "</li>"
divAlert.innerHTML+="<li>" + libros[3] + "</li>"
divAlert.innerHTML+="<li>" + libros[4] + "</li>"
divAlert.innerHTML+="<li>" + libros[5] + "</li>"
divAlert.innerHTML+="<li>" + libros[6] + "</li>"
divAlert.innerHTML+="<li>" + libros[7] + "</li>" +"</ol>";*/
/*let nums=[1, 30, 4, 21, 100000]
console.log(nums);
console.log(nums.sort());
console.log(nums.sort(compareNumbers));
console.log(libros.join(", ").toUpperCase)
let strLibros= libros.join(", ");
console.log (strLibros)
let arregloLibros= strLibros.split(", ")
console.log(arregloLibros.length);
function  compareNumbers
(a,b) {return a-b}*/

/*console.log("*************************** FOR *******************");
for (let cont = 0; cont<100; cont+=5) {
    console.log(cont); 
}
console.log("*************************** WHILE *******************");
cont=0;
while (cont<100){
    console.log(cont);
    cont+=5;
}

console.log("*************************** DO WHILE *******************");
cont=0;
do {
    console.log(cont);
    cont+=5;
} while (cont<100);*/

/*console.log("***** Libros ********")

for (let index=0; index<libros.length; index++){
    console.log(libros[index])
}
console.log("******* While ********")
index=0
while (index<libros.length) {
    console.log(libros[index]);
    index++;
}

console.log("********* Do *********")
index=0
do {
    console.log(libros[index]);
    index++;
} while (index<libros.length);

console.log("********* Reverse *********")
for (index=libros.length-1;index>=0; index--){
    console.log(libros[index])}*/


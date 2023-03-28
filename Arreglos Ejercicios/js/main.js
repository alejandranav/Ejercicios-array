
console.log("******* EJERCICIO1 ********");
// Part 1 Array 3 people
let acomodo=""
let fila= ["Sofia", "David", "Juan"];
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
console.log(fila.length);
console.log(acomodo+fila);




console.log("******* EJERCICIO2 ********");
//Do pattern
let mult=["*", "**", "***", "****", "*****"]
for (let cont = "*"; cont<"******"; cont+="*") {
    console.log(cont); 
}




console.log("******* EJERCICIO3 ********");
console.log("decreasing 0.5")
//decrease 0.5 
let decr=100
do {
    console.log(decr);
    decr-=.5;
} while (decr>0);


console.log("brakets")
let varios= ("")
let nu=0;
while (nu<6) {
    nu ++;
    console.log("["+nu+"]");
}


console.log("suma de n+x")
//loop suma n
let n = 0;
let x = 0;
while (n < 20) {
  n ++;
  console.log(x += n);
};

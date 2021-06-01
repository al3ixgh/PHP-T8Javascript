function miFunc() {
    var d1,d2;
    var cadena=[];
    const TIRADAS=36000
    var suma
    console.log("d1 =",d1);
    console.log("d2 =",d2);

    for(i=0;i<TIRADAS;i++){
        suma=(Math.round(Math.random() * (6 - 1) + 1))+(Math.round(Math.random() * (6 - 1) + 1));
        cadena.push(suma)
        

    }
    console.log(cadena);
}
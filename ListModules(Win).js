const modarray = Process.enumerateModules();

console.log("\n");

for(var i=0; i<modarray.length; i++){
    console.log(modarray[i].name);
}
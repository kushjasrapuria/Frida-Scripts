// Edit for desired program for which you want to list functions for

const module = Module.load("<Program Name>");

var functions = module.enumerateImports();

console.log("\n");

for(var i=0; i < functions.length; i++){
    console.log(functions[i].name);
}

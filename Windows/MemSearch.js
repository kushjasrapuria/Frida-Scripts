// Edit with mem perms you need 
const memoryrange = Process.enumerateRanges("<Perms>");

// The string to search in ascii
var searchStr = "<Ascii String>";

console.log("\n");

for( var i=0; i<memoryrange.length; i++){
    var memory = Memory.scan(memoryrange[i].base, memoryrange[i].size, searchStr,{
        onMatch: function(address, size){
            console.log(address);
            console.log(address.readUtf8String());
        },

        onError: function(reason){
            console.log("Error: " + reason);
        },

        onCompete: function(){
            console.log("Pwned");
        },
    });
}

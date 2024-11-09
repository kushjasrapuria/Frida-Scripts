Java.perform(()=>{
        console.log("\n");
        Java.enumerateLoadedClasses({
                onMatch : function(name, handle){
                        if (name.includes("<Package Name>")){
                                console.log(name);
                        }
                },
                onComplete : function(){
                        console.log("-- Done --");
                }
        });
});

Java.perform(()=>{
        Java.enumerateLoadedClasses({
                onMatch : function(name, handle){
                        if (name.includes("<package-name>")){
                                console.log(name);
                        }
                },
                onComplete : function(){
                        console.log("-- Done --")
                }
        });
});

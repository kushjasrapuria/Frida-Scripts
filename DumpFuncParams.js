Java.perform(() => {

	const classa = Java.use("<Class Name>")

  // This is a example for a string parameter
  
	classa.a.overload("java.lang.String").implementation = function(s){
		console.log("\n")
		console.log(s.toString());
		return true;
	}
});

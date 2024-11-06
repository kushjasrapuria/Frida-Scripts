Java.perform(()=>{
	const actclass = Java.use("<Class Name>");
	console.log(actclass);
	console.log(Object.getOwnPropertyNames(actclass).join("\n"))
});

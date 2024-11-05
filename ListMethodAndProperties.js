Java.perform(()=>{
	const actclass = Java.use("com.example.helloapp.MainActivity");
	console.log(actclass);
	console.log(Object.getOwnPropertyNames(actclass).join("\n"))
});

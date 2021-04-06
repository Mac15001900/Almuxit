var debugConfig = {
	"allow_debug" : true, //Setting this to false will disable all other debug options
	"dev_server" : true, //Skips room prompt, uses sever 'dev'
	"random_server" : false, //Skips room promt, uses a server with a random name
	"random_username" : true, //Skip username prompt, uses a random username
	"disable_messages" : false, //Disables sending network messages
	"log_messages" : false, //Logs all received messages in console
}

//Handle complete debug disabling
if(!debugConfig.allow_debug){
    Object.entries(debugConfig).forEach(entry=>debugConfig[entry[0]]=false);
}


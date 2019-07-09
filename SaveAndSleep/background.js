chrome.commands.onCommand.addListener(function(command) {
  	if (command == "Save And Sleep") {
chrome.windows.getAll({populate:true},function(windows){
	console.log(windows);
});
  	}
	else if(command=="Restore And Breath"){
		console.log("Restore And Breath");

	}
});

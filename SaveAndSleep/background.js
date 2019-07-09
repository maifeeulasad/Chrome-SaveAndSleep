chrome.commands.onCommand.addListener(function(command) {
  	if (command == "Save And Sleep") {
chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      console.log(tab);
	chrome.tabs.create({ url: tab.url });
    });
  });
});
  	}
	else if(command=="Restore And Breath"){
		console.log("Restore And Breath");

	}
});

chrome.commands.onCommand.addListener(function(command) {
  	if (command == "Save And Sleep") {
	let time_=new Date().toISOString();
chrome.windows.getAll({populate:true},function(windows){
	//console.log(windows);
	windows.forEach(function(window){
	
		let data_= JSON.stringify(window);

		let key_="MUA-Save&Sleep " + time_+" "+window.id;


		chrome.storage.sync.set({key_:data_}, function() {
			console.log(data_+"saved");
		});

	});
});
  	}
	else if(command=="Restore And Breath"){
		//let json_=JSON.parse(JSON.stringify(window));
		


		chrome.storage.sync.get(null, function(items) {
    		var allKeys = Object.keys(items);
    		console.log(allKeys);
		//console.log(allKeys[1]);


		allKeys.forEach(function(key){
		chrome.storage.sync.get([key], function(result) {
          console.log('Value currently is ' + result.key);
        });


	});
	

	
	

});



	}
});

chrome.commands.onCommand.addListener(function(command) {
    if (command == "Save And Sleep") {
        let time_ = new Date().toISOString();
        chrome.windows.getAll({
            populate: true
        }, function(windows) {
            windows.forEach(function(window) {
                let data_ = JSON.stringify(window);
                let key_ = "MUA-S&S " + time_ + " " + window.id;
                var obj = {};
                obj[key_] = data_;
                chrome.storage.sync.set(obj, function() {
					
                });
            });
        });
    } 
	else if (command == "Restore And Breath") {
		
        chrome.storage.sync.get(null, function(items) {
            var allKeys = Object.keys(items);
            allKeys.forEach(function(key) {
                if (key.startsWith("MUA-S&S") == true) 
				{
                    chrome.storage.sync.get([key], function(result) {
						let json_=JSON.parse(JSON.stringify(result));
						console.log(json_);
						console.log(json_.tabs);
						/*
						chrome.windows.create({
							'url':'chrome://newtab'
							});
							*/
                    });
                }
            });
        });
    }
});
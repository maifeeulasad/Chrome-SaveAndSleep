var options = ['','Second Option','Third Option'];

function makeUL(array) {
    var list = document.createElement('ul');

	/*
chrome.storage.sync.get(null, function(items) {
            var allKeys = Object.keys(items);
            allKeys.forEach(function(key) {
				console.log(key);
				options.push(key);
			});
});
*/


    for(var i = 0; i < array.length; i++) {
        var item = document.createElement('li');

        item.appendChild(document.createTextNode(array[i]));

        list.appendChild(item);
    }

    return list;
}

document.getElementById('mList').appendChild(makeUL(options));


function accessData(id) {
	
	// expects data1 to be a json array
	var l = dataa1.length;
	//console.log("got data1 as: " + l);
	
	console.log("id is " + id);
	for(var i=0; i<l; i++) {
		//console.log(dataa1[i].name);
		if(dataa1[i].id == id)
		{	console.log(dataa1[i].data);
			return dataa1[i].data;
		}
	}
	return false;
	
	
}

function accessState(id) {
	
	// expects data1 to be a json array
	var l = dataa1.length;
	//console.log("got data1 as: " + l);
	
	console.log("id is " + id);
	for(var i=0; i<l; i++) {
		//console.log(dataa1[i].name);
		if(dataa1[i].id == id)
		{	console.log(dataa1[i].data);
			return dataa1[i].name;
		}
	}
	return false;
	
	
}
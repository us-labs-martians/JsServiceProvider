var endpoint = "https://jsserviceprovider-itest-dev.azurewebsites.net/posts/";

metadata = {
	"systemName": "JsspITest_ExecuteXhrTest",
	"displayName": "JavaScript Service Provider Execute XHR Test",
	"description": "This is for integration test purposes."
};

ondescribe = function() {
	postSchema({
		objects: {
			"Jssp_XHRTest": {
				displayName: "Jssp_XHRTest",
				description: "Jssp_XHRTest.description",
				isActive: true,
				properties: {
					"Id": { displayName: "Id", description: "Id", type: "number" },
					"Author": { displayName: "Author", description: "Author", type: "string" },
					"Title": { displayName: "Title", description: "Title", type: "string" }
				},
				methods: {
					"GetPostById": {
						displayName: "Get Post by Id",
						description: "Get post by Id",
						type: "read",
						inputs: ["Id"],
						requiredInputs: ["Id"],
						outputs: [ "Id", "Author", "Title" ]
					},
					"PostTest": {
						displayName: "POST Test",
						description: "Simple POST Test",
						type: "create",
						inputs: ["Author", "Title"],
						outputs: ["Id"]
					},
					"PatchTest": {
						displayName: "PATCH Test",
						description: "Simple PATCH Test",
						type: "execute",
						inputs: ["Author", "Id", "Title"],
						requiredInputs: ["Id"],
						outputs: ["Id"]
					},
					"PutTest": {
						displayName: "PUT Test",
						description: "Simple PUT Test",
						type: "update",
						inputs: ["Author", "Id", "Title"],
						requiredInputs: [ "Id" ],
						outputs: ["Id"]
					},
					"DeleteTest": {
						displayName: "Delete Test",
						description: "Simple DELETE Test",
						type: "delete",
						inputs: ["Id"],
						requiredInputs: ["Id"],
						outputs: ["Id"]
					}
				}
			}
		}
	});
}

onexecute = function(objectName, methodName, parameters, properties) {
	switch (objectName)
	{
		case "Jssp_XHRTest":
			executeXHRTest(methodName, parameters, properties);
			break;
		default: 
			throw new Error("the object " + objectName + " is not supported.");
	}
}

function executeXHRTest(methodName, parameters, properties) {
	switch (methodName) {
		case "GetPostById": 
			executeGetPostByIdMethod(parameters, properties);
			break;
		case "PatchTest": 
			executePatchTestMethod(parameters, properties);
			break;
		case "PostTest": 
			executePostTestMethod(parameters, properties);
			break;
		case "PutTest": 
			executePutTestMethod(parameters, properties);
			break;			
		case "DeleteTest": 
			executeDeleteTestMethod(parameters, properties);
			break;
		default: throw new Error("The method " + methodName + " is not supported.");
	}
}

function executeGetPostByIdMethod(parameters, properties) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
		
		var obj = JSON.parse(xhr.responseText);
		postResult({
						"Id": obj.id,
						"Author": obj.author,
            "Title": obj.title
        }); 				
	};
	xhr.open("GET", endpoint + properties["Id"]);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send();	
}

function executePatchTestMethod(parameters, properties) {
	var author = properties["Author"];
	var title = properties["Title"];

	var data;

	if(author){
		if(title){
			data = JSON.stringify({"author": author, "title": title});
		}else{
			data = JSON.stringify({"author": author});
		}
	}else if(title){
		data = JSON.stringify({"title": title});
	}
		
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);			
		
		var obj = JSON.parse(xhr.responseText);
		
		postResult({
			"Id": obj[ 'id' ]
		}); 				
	};
	xhr.open("PATCH", endpoint + properties["Id"]);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(data);
}

function executePostTestMethod(parameters, properties) {
	var data = JSON.stringify({
		"author": properties["Author"],
		"title": properties["Title"]
	});
		
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 201) throw new Error("Failed with status " + xhr.status);			
		
		var obj = JSON.parse(xhr.responseText);
		
		postResult({
			"Id": obj[ 'id' ]
		}); 				
	};
	xhr.open("POST", endpoint);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(data);
}

function executePutTestMethod(parameters, properties) {			
		var data = JSON.stringify({
			"author": properties["Author"],
			"title": properties["Title"]
		});
		
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);			
		
		var obj = JSON.parse(xhr.responseText);
		
		postResult({
			"Id": obj[ 'id' ]
		}); 				
	};
	xhr.open("PUT", endpoint + properties["Id"]);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(data);
}

function executeDeleteTestMethod(parameters, properties) {
	var id = properties["Id"];
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState !==4) return;
		if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
		
	};
	xhr.open("DELETE", endpoint + id);
	xhr.send();
}

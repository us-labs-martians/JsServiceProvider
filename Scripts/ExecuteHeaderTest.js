metadata = {
	"systemName": "JsspITest_ExecuteHeaderTest",
	"displayName": "JavaScript Service Provider Execute Header Test",
	"description": "This is for integration test purposes."
};

ondescribe = function() {
	postSchema({
		objects: {
			"Jssp_HeaderTest": {
				displayName: "Jssp_HeaderTest",
				description: "Jssp_Header.description",
				isActive: true,
				properties: {
					"Key1": { displayName: "Key1", description: "First Header Key to search for", type: "string" },
					"Key2": { displayName: "Key2", description: "Second Header Key to search for", type: "string" },
					"Value1": { displayName: "Value1", description: "Value for first header key", type: "string" },
					"Value2": { displayName: "Value2", description: "Value for second header key", type: "string" }
					
				},
				methods: {
					"GetHeaderValues": {
						displayName: "Get key values",
						description: "Get values for header keys",
						type: "read",
						inputs: [ "Key1", "Key2" ],
						outputs: [ "Value1", "Value2" ]
					}
				}
			}
		}
	});
}

onexecute = function({objectName, methodName, parameters, properties}) {
	switch (objectName)
	{
		case "Jssp_HeaderTest":
			executeHeaderTest(methodName, parameters, properties);
			break;
		default: 
			throw new Error("the object " + objectName + " is not supported.");
	}
}

function executeHeaderTest(methodName, parameters, properties) {
	switch (methodName) {
		case "GetHeaderValues": 
			executeGetHeaderValuesMethod(parameters, properties);
			break;	
		default: throw new Error("The method " + methodName + " is not supported.");
	}
}

function executeGetHeaderValuesMethod(parameters, properties) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);	
		var obj = JSON.parse(xhr.responseText);
		postResult({
            "Value1": xhr.getResponseHeader(properties["Key1"]),
						"Value2": xhr.getResponseHeader(properties["Key2"])
        }); 
	};
	xhr.open("GET", 'https://jsserviceprovider-itest-dev.azurewebsites.net/posts');
	xhr.send();
}

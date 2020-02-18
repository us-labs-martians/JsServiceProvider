metadata = {
	"systemName": "JsspITest_ExecuteAuthTest",
	"displayName": "JavaScript Service Provider Execute Auth Test",
	"description": "This is for integration test purposes."
};

ondescribe = function() {
	postSchema({
		objects: {
			"Jssp_AuthTest": {
				displayName: "Jssp_AuthTest",
				description: "Jssp_Auth.description",
				isActive: true,
				properties: {
					"Result": { displayName: "Result", description: "If authorization is send", type: "boolean" },
					"Value": { displayName: "Value", description: "echoed authorization header value", type: "string" }
				},
				methods: {
					"GetAuthValues": {
						displayName: "Get Auth values",
						description: "Get Auth values",
						type: "read",
						inputs: [],
						outputs: [ "Result", "Value" ]
					}
				}
			}
		}
	});
}

onexecute = function(objectName, methodName, parameters, properties) {
	switch (objectName)
	{
		case "Jssp_AuthTest":
			executeHeaderTest(methodName, parameters, properties);
			break;
		default: 
			throw new Error("the object " + objectName + " is not supported.");
	}
}

function executeHeaderTest(methodName, parameters, properties) {
	switch (methodName) {
		case "GetAuthValues": 
			executeGetAuthValuesMethod(parameters, properties);
			break;	
		default: throw new Error("The method " + methodName + " is not supported.");
	}
}

function executeGetAuthValuesMethod(parameters, properties) {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState !== 4) return;
		if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);	
		var obj = JSON.parse(xhr.responseText);
		postResult({
            "Result": obj["result"],
			"Value": obj["header"]
        }); 
	};
	xhr.open("GET", 'https://jsserviceprovider-itest-dev.azurewebsites.net/needAuthHeader');
	xhr.withCredentials = true;
	xhr.send();
}
metadata = {
    "systemName":"JsspITest_IntegerExecute",
    "displayName":"JavaScript Service Provider Integer Execute Test",
    "description":"This is for integration test purposes."
};

ondescribe = function() {
	postSchema({
		objects: {
			"JsspITest_Test1": {
				displayName: "JsspITest_Test1",
				description: "JsspITest_Test1.description",
				properties: {
					"Val1":{
						displayName: "Val1",
						description: "value #1",
						type: "number"
					},
					"Val2":{
						displayName: "Val2",
						description: "value #2",
						type: "number"
					},
					"Value": {
						displayName: "Value",
						description: "return value",
						type: "number"
					}
				},
				methods: {
					"Add": {
						displayName: "Add",
						description: "add",
						type: "read",
						parameters: {},
						requiredParameters: [],
						inputs: ["Val1","Val2"],
						requiredInputs: ["Val1","Val2"],
						outputs: ["Value"]
					}
				}
			}
		}
	});
}

onexecute = function(objectname, methodname, parameters, properties) {
	switch (objectname)
	{
		case "JsspITest_Test1": onexecutetest1(methodname, parameters, properties); break;
				default: throw new error("the object " + objectname + " is not supported.");
	}
}

function onexecutetest1(methodName, parameters, properties) {
	switch (methodName)
	{
		case "Add": onexecutetest1Add(parameters, properties); break;
		default: throw new Error("The method " + methodName + " is not supported.");
	}
}

function onexecutetest1Add(parameters, properties) {
	var Value = properties["Val1"] + properties["Val2"];
	postResult({"Value": Value});
}
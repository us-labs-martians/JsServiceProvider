metadata = {
	"systemName": "JsspITest_IntegerExecute",
	"displayName": "JavaScript Service Provider Integer Execute Test",
	"description": "This is for integration test purposes."
};

ondescribe = function() {
	postSchema({
		objects: {
			"JsspITest_InActive": {
				displayName: "JsspITest_InActive",
				description: "JsspITest_InActive.description",
				isActive: false,
				"Value": { displayName: "Value", description: "return value", type: "number" },
				methods: {
					"DummyMethod": {
						displayName: "Dummy Method",
						description: "Dummy Method description",
						type: "read",
						outputs: ["Value"]
					}
				}
			},
			"JsspITest_Test1": {
				displayName: "JsspITest_Test1",
				description: "JsspITest_Test1.description",
				properties: {
					"Val1":{ displayName: "Val1", description: "value #1", type: "number" },
					"Val2":{ displayName: "Val2", description: "value #2", type: "number" },
					"Val3":{ displayName: "Val3", description: "value #3", type: "number" },
					"Val4":{ displayName: "Val4", description: "value #4", type: "number" },
					"Val5":{ displayName: "Val5", description: "value #5", type: "number" },
					"Val6":{ displayName: "Val6", description: "value #6", type: "number" },
					"Val7":{ displayName: "Val7", description: "value #7", type: "number" },
					"Val8":{ displayName: "Val8", description: "value #8", type: "number" },
					"Val9":{ displayName: "Val9", description: "value #9", type: "number" },
					"Value": { displayName: "Value", description: "return value", type: "number" }
				},
				methods: {
					"ReadAdd": {
						displayName: "Read Add",
						description: "Read add a bunch of numbers",
						type: "read",
						inputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						requiredInputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						outputs: ["Value"]
					},
					"ListAdd": {
						displayName: "List Add",
						description: "List add a bunch of numbers",
						type: "list",
						inputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						requiredInputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						outputs: ["Value"]
					},
					"ExecuteAdd": {
						displayName: "Execute Add",
						description: "Execute add a bunch of numbers",
						type: "execute",
						inputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						requiredInputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						outputs: ["Value"]
					},
					"UpdateAdd": {
						displayName: "Update Add",
						description: "Update add a bunch of numbers",
						type: "update",
						inputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						requiredInputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						outputs: ["Value"]
					},
					"DeleteAdd": {
						displayName: "Delete Add",
						description: "Delete add a bunch of numbers",
						type: "delete",
						inputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						requiredInputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						outputs: ["Value"]
					},
					"CreateAdd": {
						displayName: "Create Add",
						description: "Create add a bunch of numbers",
						type: "create",
						inputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						requiredInputs: ["Val1", "Val2", "Val3", "Val4", "Val5", "Val6", "Val7", "Val8", "Val9"],
						outputs: ["Value"]
					}
				}
			}
		}
	});
}

onexecute = function({objectName, methodName, parameters, properties}) {
	switch (objectName)
	{
		case "JsspITest_InActive":
			executeInActive(methodName, parameters, properties);
			break;
		case "JsspITest_Test1":
			executeTest1(methodName, parameters, properties); 
			break;
		default: 
			throw new error("the object " + objectName + " is not supported.");
	}
}

function executeInActive(methodName, parameters, properties) {
	switch (methodName) {
		case "DummyMethod": 
			executeDummyMethod(parameters, properties);
			break;
		default: throw new Error("The method " + methodName + " is not supported.");
	}
}

function executeDummyMethod(parameters, properties) {
	postResult({"Value": 1});
}

function executeTest1(methodName, parameters, properties) {
	switch (methodName) {
		case "ReadAdd": 
		case "ListAdd": 
		case "ExecuteAdd": 
		case "UpdateAdd": 
		case "DeleteAdd": 
		case "CreateAdd": 
			executeTest1Add(parameters, properties); 
			break;
		default: throw new Error("The method " + methodName + " is not supported.");
	}
}

function executeTest1Add(parameters, properties) {
	var value = 0;
	for (var i = 1; i < 10; i++) {
		value += properties["Val" + i];
		postResult({"Value": value});
	}
}
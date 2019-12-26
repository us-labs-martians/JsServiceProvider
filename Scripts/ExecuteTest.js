metadata = {
	"systemName": "JsspITest_ExecuteTest",
	"displayName": "JavaScript Service Provider Execute Test",
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
					"Val10":{ displayName: "Val10", description: "bool value #1", type: "boolean"},
					"Val11":{ displayName: "Val11", description: "bool value #2", type: "boolean"},
					"Val12":{ displayName: "Val12", description: "string value #1", type: "string"},
					"Val13":{ displayName: "Val13", description: "string value #2", type: "string"},
					"Val14":{ displayName: "Val14", description: "dateTime value #1", type: "dateTime"},
					"Val15":{ displayName: "Val15", description: "dateTime value #2", type: "dateTime"},
					"Value": { displayName: "Value", description: "return value", type: "number" },
					"Value2": { displayName: "Value2", description: "return value 2", type: "boolean" },
					"Value3": { displayName: "Value3", description: "return value 3", type: "string" },
					"Value4": { displayName: "Value4", description: "return value 4", type: "dateTime" }
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
					},
					"BooleanAnd":{
						displayName: "Boolean And",
						description: "Perform and on two booleans",
						type: "execute",
						inputs: ["Val10", "Val11"],
						requiredInputs: ["Val10", "Val11"],
						outputs: ["Value2"]
					},
					"StringConcat":{
						displayName: "String Concat",
						description: "Perform and on two booleans",
						type: "execute",
						inputs: ["Val12", "Val13"],
						requiredInputs: ["Val12", "Val13"],
						outputs: ["Value3"]
					},
					"DateTimeRead":{
						displayName: "DateTime Read",
						description: "Read a DateTime",
						type: "execute",
						inputs: ["Val14"],
						requiredInputs: ["Val14"],
						outputs: ["Value4"]
					},
					"DateTimeDiff":{
						displayName: "Subtract Date To Number",
						description: "Subtract two dates, return a number.",
						type: "execute",
						inputs: ["Val14","Val15"],
						requiredInputs: [],
						outputs: ["Value"]
					},
					"Throw":{
						displayName: "Throw",
						description: "Perform and on two booleans",
						type: "execute",
						inputs: ["Val12", "Val13"],
						requiredInputs: ["Val12", "Val13"],
						outputs: ["Value3"]
					},
					"ThrowAfterPost":{
						displayName: "ThrowAfterPost",
						description: "Perform and on two booleans",
						type: "execute",
						inputs: ["Val12", "Val13"],
						requiredInputs: ["Val12", "Val13"],
						outputs: ["Value3"]
					},
                    "ThrowException": {
						displayName: "ThrowException",
						description: "Throws exception",
						type: "execute",
						inputs: ["Val12", "Val13"],
						requiredInputs: ["Val12", "Val13"],
						outputs: ["Value3"]
					}
				}
			}
		}
	});
}

onexecute = function(objectName, methodName, parameters, properties) {
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
		case "BooleanAnd":
			executeTest1And(parameters, properties);
			break;
		case "StringConcat":
			executeTest1StrConc(parameters, properties);
			break;
		case "DateTimeRead":
			executeTest1DateTimeRead(parameters, properties);
			break;		
		case "DateTimeDiff":
			executeTest1DateTimeDiff(parameters, properties);
			break;	
		case "ThrowAfterPost":
			executeTest1ThrAftPost(parameters, properties);
            break;
        case "ThrowException":
            executeTestException(parameters, properties);
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

function executeTest1And(parameters, properties) {
    value = properties["Val10"] && properties["Val11"];
    postResult({ "Value2": value });
}

function executeTest1StrConc(parameters, properties) {
	value = properties["Val12"].concat(properties["Val13"]);
    postResult({ "Value3": value });
}

function executeTest1DateTimeRead(parameters, properties) {
	value = properties["Val14"];
    postResult({ "Value4": value });
}

function executeTest1DateTimeDiff(parameters, properties) {
	value = properties["Val14"] - properties["Val15"];
	postResult({"Value": value});
}

function executeTest1ThrAftPost(parameters, properties) {
	value = properties["Val12"].concat(properties["Val13"]);
    postResult({ "Value3": value });
	throw new Error("thrown error");
}

function executeTestException(parameters, properties) {
    var test;
    test.toString();
}
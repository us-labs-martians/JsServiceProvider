metadata = {
    "systemName":"test3",
    "displayName":"test4",
    "description":"test5"
};

ondescribe = function() {
   postSchema({
	   objects: {
		"test1": {
			displayName: "test1",
			description: "A fake object1",
			version: "1",
			isActive: true,
			properties: {
				"Val1":{
					displayName: "Val1",
					description: "description",
					type: "number"
				},
				"Val2":{
					displayName: "Val2",
					description: "description",
					type: "number"
				},
				"Value": {
					displayName: "Value",
					description: "description",
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
		case "test1": onexecutetest1(methodname, parameters, properties); break;
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

function onexecutetest1Add(parameters, properties){
	var Value = properties["Val1"] + properties["Val2"];
	postResult({"Value": Value});
}
metadata = {
    "systemName": "JsspITest_Execute_With_ExtendedType_date",
    "displayName": "JavaScript Service Provider Execute With ExtendedType Date",
    "description": "This is for integration test purposes."
};

ondescribe = function () {
    postSchema({
        objects: {
            "JsspITest_Test1": {
                displayName: "JsspITest_Test1",
                description: "JsspITest_Test1.description",
                properties: {
                    "propDate1": { displayName: "propDate1", type: "extendedDateTime", extendedType: "k2.com/2019/date" },
                    "propDate2": { displayName: "propDate2", type: "extendedDateTime", extendedType: "k2.com/2019/date" },
                    "propDateTime": { displayName: "propDateTime", type: "dateTime" },
					"propNullDate": { displayName: "propDateTime", type: "dateTime" }
                },
                methods: {
                    "ExecuteDateParams": {
                        displayName: "Execute Params",
                        description: "Execute Read method with Params",
                        type: "read",
                        parameters: {
                          "paramDate1": { displayName: "paramDate1", type: "extendedDateTime", extendedType: "k2.com/2019/date"}
                        },
                        requiredParameters: ["paramDate1"],
                        outputs: ["propDate1"]
                    },
                  "ExecuteDateAndDateTimeParams": {
                      displayName: "Execute Multile Params",
                      description: "Execute Read method with Multiple Params",
                      type: "read",
                      parameters: {
                        "paramDate1": { displayName: "paramDate1", type: "extendedDateTime", extendedType: "k2.com/2019/date" },
                        "paramDateTime2": { displayName: "paramDateTime2",  type: "dateTime" }
                      },
                      requiredParameters: ["paramDate1", "paramDateTime2"],
                      outputs: ["propDate1", "propDateTime"]
                    },
                    "ExecuteDateProps": {
                        displayName: "Execute Props",
                        description: "Execute Read method with Properties Only",
                        type: "read",
                        inputs: [ "propDate2"],
                        requiredInputs: ["propDate2"],
                        outputs: ["propDate1"]
                    },
					"ExecuteDateAndDateTimeOptional": {
                      displayName: "Execute Optinal Params",
                      description: "Execute Read method with Optional Params",
                      type: "read",
                      parameters: {
                        "paramDate1": { displayName: "paramDate1", type: "extendedDateTime", extendedType: "k2.com/2019/date" },
                        "paramDateTime2": { displayName: "paramDateTime2",  type: "dateTime" }
                      },
                      outputs: ["propDate1", "propDateTime"]
                    },
					"ExecuteNanDate": {
                      displayName: "Execute Nan Date",
                      description: "Execute Read method with NaN",
                      type: "read",
                      outputs: ["propNullDate"]
                    },
					"ExecuteDateDefault": {
                        displayName: "ExecuteDateDefault",
                        description: "Execute Read method with Default date",
                        type: "read",
                        outputs: ["propDate1"]
					}
                }
            }
        }
    });
}

onexecute = function (objectName, methodName, parameters, properties) {
    switch (objectName) {
        case "JsspITest_Test1":
            executeTest1(methodName, parameters, properties);
            break;
        default:
            throw new error("the object " + objectName + " is not supported.");
    }
}

function executeTest1(methodName, parameters, properties) {
    switch (methodName) {
        case "ExecuteDateParams":
            executeDateParams(parameters, properties);
            break;
        case "ExecuteDateAndDateTimeParams":
            executeDateAndDateTimeParams(parameters, properties);
            break;
        case "ExecuteDateProps":
            executeDateProps(parameters, properties);
            break;  
		case "ExecuteDateAndDateTimeOptional":
			executeDateOptional(parameters, properties);
            break; 
		case "ExecuteNanDate":
			executeDateNaN(parameters, properties);
            break; 
		case "ExecuteDateDefault":
            executeDateDefault();
            break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function executeDateParams(parameters, properties) {
    value = parameters["paramDate1"];
    postResult({ "propDate1": value});
}

function executeDateAndDateTimeParams(parameters, properties) {
  postResult({ "propDate1": parameters["paramDate1"], "propDateTime": parameters["paramDateTime2"]});
}

function executeDateProps(parameters, properties) {
    value = properties["propDate2"];
    postResult({ "propDate1": value});
}

function executeDateOptional(parameters, properties) {
	postResult({ "propDate1": parameters["paramDate1"], "propDateTime": parameters["paramDateTime2"]});
}

function executeDateNaN(parameters, properties) {
	var value = Date.parse("");
	postResult({"propNullDate": value});
}

function executeDateDefault() {
    postResult({ "propDate1": new Date() });
}

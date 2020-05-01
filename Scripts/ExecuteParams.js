metadata = {
    "systemName": "JsspITest_Execute_With_Params",
    "displayName": "JavaScript Service Provider Execute With Params Test",
    "description": "This is for integration test purposes."
};

ondescribe = function () {
    postSchema({
        objects: {
            "JsspITest_Test1": {
                displayName: "JsspITest_Test1",
                description: "JsspITest_Test1.description",
                properties: {
                    "prop1": { displayName: "prop1", description: "String result of the method execute", type: "string" },
                    "prop2": { displayName: "prop2", description: "Number result of the method execute", type: "number" }
                },
                methods: {
                    "ExecuteParams": {
                        displayName: "Execute Params",
                        description: "Execute Read method with Params",
                        type: "read",
                        parameters: {
                          "param1" : { displayName: "param1", description: "Description Of Param 1", type: "string"}
                        },
                        requiredParameters: ["param1"],
                        outputs: ["prop1"]
                    },
                  "ExecuteMultipleParams": {
                      displayName: "Execute Params",
                      description: "Execute Read method with Params",
                      type: "read",
                      parameters: {
                        "param1": { displayName: "param1", description: "Description Of Param 1", type: "string" },
                        "param2": { displayName: "param2", description: "Description Of Param 2", type: "string" }
                      },
                      requiredParameters: ["param1", "param2"],
                      outputs: ["prop1"]
                    },
                    "ExecuteOptionalParams": {
                        displayName: "Execute Optional Params",
                        description: "Execute Read method with Optional Params",
                        type: "read",
                        parameters: {
                          "param2" : { displayName: "param2", description: "Description Of Param 2", type: "number"}
                        },
                        outputs: ["prop1"]
                    },  
                    "ExecutePropsAndParams": {
                        displayName: "Execute Props And Params",
                        description: "Execute Read method with Properties and Params",
                        type: "read",
                        inputs: [ "prop2"],
                        parameters: {
                          "param1" : { displayName: "param1", description: "Description Of Param 1", type: "string"}
                        },
                        requiredParameters: ["param1"],
                        requiredInputs: ["prop2"],
                        outputs: ["prop1"]
                    },
                    "ExecuteProps": {
                        displayName: "Execute Props",
                        description: "Execute Read method with Properties Only",
                        type: "read",
                        inputs: [ "prop2"],
                        requiredInputs: ["prop2"],
                        outputs: ["prop1"]
                    },
                }
            }
        }
    });
}

onexecute = function ({objectName, methodName, parameters, properties}) {
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
        case "ExecuteParams":
            executeParams(parameters, properties);
            break;
        case "ExecuteMultipleParams":
          executeMultipleParams(parameters, properties);
            break;
        case "ExecuteOptionalParams":
            executeOptionalParams(parameters, properties);
            break;
        case "ExecutePropsAndParams":
            executePropsAndParams(parameters, properties);
            break;      
        case "ExecuteProps":
            executeProps(parameters, properties);
            break;  
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function executeParams(parameters, properties) {
    value = parameters["param1"];
    postResult({ "prop1": value});
}

function executeMultipleParams(parameters, properties) {
  value = parameters["param1"] + parameters["param2"];
  postResult({ "prop1": value });
}

function executeOptionalParams(parameters, properties) {
    value = parameters["param2"];
    postResult({ "prop1": value});
}

function executePropsAndParams(parameters, properties) {
    value = parameters["param1"] + properties["prop2"];
    postResult({ "prop1": value});
}

function executeProps(parameters, properties) {
    value = properties["prop2"];
    postResult({ "prop1": value});
}


metadata = {
    "systemName": "JsspITest_Execute_With_ExtendedType_Memo",
    "displayName": "JavaScript Service Provider Execute With ExtendedType Memo",
    "description": "This is for integration test purposes."
};

ondescribe = function () {
    postSchema({
        objects: {
            "JsspITest_Test1": {
                displayName: "JsspITest_Test1",
                description: "JsspITest_Test1.description",
                properties: {
                    "propMemo1": { displayName: "propMemo1", type: "extendedString", extendedType: "k2.com/2019/memo" },
                    "propMemo2": { displayName: "propMemo2", type: "extendedString", extendedType: "k2.com/2019/memo" },
                },
                methods: {
                    "ExecuteMemoParams": {
                        displayName: "Execute Params",
                        description: "Execute Read method with Params",
                        type: "read",
                        parameters: {
                          "paramMemo1": { displayName: "paramMemo1", type: "extendedString", extendedType: "k2.com/2019/memo"}
                        },
                        requiredParameters: ["paramMemo1"],
                        outputs: ["propMemo1"]
                    },
                  "ExecuteTwoMemoParams": {
                      displayName: "Execute Multile Params",
                      description: "Execute Read method with Multiple Params",
                      type: "read",
                      parameters: {
                        "paramMemo1": { displayName: "paramMemo1", type: "extendedString", extendedType: "k2.com/2019/memo" },
                        "paramMemo2": { displayName: "paramMemo2",  type: "extendedString", extendedType: "k2.com/2019/memo" }
                      },
                      requiredParameters: ["paramMemo1", "paramMemo2"],
                      outputs: ["propMemo1"]
                    },
                    "ExecuteMemoProps": {
                        displayName: "Execute Props",
                        description: "Execute Read method with Properties Only",
                        type: "read",
                        inputs: [ "propMemo2"],
                        requiredInputs: ["propMemo2"],
                        outputs: ["propMemo1"]
                    }
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
        case "ExecuteMemoParams":
            executeMemoParams(parameters, properties);
            break;
        case "ExecuteTwoMemoParams":
            executeTwoMemoParams(parameters, properties);
            break;
        case "ExecuteMemoProps":
            executeMemoProps(parameters, properties);
            break;  
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function executeMemoParams(parameters, properties) {
    value = parameters["paramMemo1"];
    postResult({ "propMemo1": value});
}

function executeTwoMemoParams(parameters, properties) {
		postResult({ "propMemo1": parameters["paramMemo1"] + parameters["paramMemo2"]} );
}

function executeMemoProps(parameters, properties) {
    value = properties["propMemo2"];
    postResult({ "propMemo1": value});
}


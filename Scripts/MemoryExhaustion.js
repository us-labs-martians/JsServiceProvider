metadata = {
    "systemName": "JsspITest_Memory_ExhaustionTest",
    "displayName": "JavaScript Service Provider Memory Exhaustion Test",
    "description": "This is for integration test purposes."
};

ondescribe = function () {
    postSchema({
        objects: {
            "JsspITest_Test1": {
                displayName: "JsspITest_Test1",
                description: "JsspITest_Test1.description",
                properties: {
                    "IntVal": { displayName: "Iterations", description: "Number of Iterationsertaions", type: "number" },
                    "InStrVal": { displayName: "InStrVal", description: "input string value", type: "string" },
                    "StrVal": { displayName: "StrVal", description: "return string value", type: "string" }
                },
                methods: {
                    "HugeStr": {
                        displayName: "HugeStr",
                        description: "Generate Huge String",
                        type: "read",
                        inputs: ["IntVal", "InStrVal"],
                        requiredInputs: ["IntVal", "InStrVal"],
                        outputs: ["StrVal"]
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
        case "HugeStr":
            executeHugeStr(parameters, properties);
            break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function executeHugeStr(parameters, properties) {
    var x = properties["InStrVal"];
    var iterations = properties["IntVal"];
    for (var i = 1; i <= iterations; i++) {
      x += x+x;      
    }   
    value = x;
    postResult({ "StrVal": value });
}

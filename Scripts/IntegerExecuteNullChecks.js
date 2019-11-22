metadata = {
    "systemName": "integernNullCheck",
    "displayName": "Integer Null Checks",
    "description": "Integer Null Checks"
};

ondescribe = function () {
    postSchema({
        objects: {
            "JsspIntegerExecuteNullCheckTest_test1": {
                displayName: "test1",
                description: "A fake object1",
                version: "1",
                isActive: true,
                properties: {
                    "Value": {
                        displayName: "Value",
                        description: "description",
                        type: "number"
                    },
                    "Value2": {
                        displayName: "Value2",
                        description: "description",
                        type: "number"
                    }
                },
                methods: {
                    "List": {
                        displayName: "List",
                        description: "List",
                        type: "list",
                        parameters: {},
                        requiredParameters: [],
                        outputs: ["Value"]
                    },
                    "ListNoOutput": {
                        displayName: "ListNoOutput",
                        description: "ListNoOutput",
                        type: "list",
                        parameters: {},
                        requiredParameters: [],
                        outputs: ["Value2"]
                    }
                }
            }
        }
    });
}

onexecute = function (objectname, methodname, parameters, properties) {
    switch (objectname) {
        case "JsspIntegerExecuteNullCheckTest_test1": onexecuteJsspIntegerExecuteNullCheckTest_test1(methodname, parameters, properties); break;
        default: throw new error("the object " + objectname + " is not supported.");
    }
};

function onexecuteJsspIntegerExecuteNullCheckTest_test1(methodName, parameters, properties) {
    switch (methodName) {
        case "List":
        case "ListNoOutput":
            onexecuteJsspIntegerExecuteNullCheckTest_test1List(parameters, properties);
            break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteJsspIntegerExecuteNullCheckTest_test1List(parameters, properties) {
    postResult({ "Value": undefined });
    postResult({ "Value": null });
    postResult({ "Value": 0 });
    postResult({ "Value": null + 1 });
    postResult({ "Value": undefined + 1 });
    postResult({ "Value": 123 });
    postResult({ "Value": -123 });
}

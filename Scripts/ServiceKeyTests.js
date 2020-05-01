metadata = {
    systemName: "JsspITest_ServiceKeyTest",
    displayName: "JavaScript Service Provider Service Key Test",
    description: "This is for integration test purposes.",
    configuration: {
        "com.k2.itest.id": {
            displayName: "ID",
            type: "string"
        },
        "com.k2.itest.userId": {
            displayName: "User ID",
            type: "number"
        },
        "com.k2.itest.title": {
            displayName: "Title",
            type: "string",
			value: "testTitle3",
			required: true
        },
        "com.k2.itest.completed": {
            displayName: "Completed",
            type: "boolean"
        }
    }
};

ondescribe = function({configuration}) {
    postSchema({
        objects: {
            "com.k2.itest": {
                displayName: "TODO",
                description: "Manages a TODO list",
                properties: {
                    "com.k2.itest.id": {
                        displayName: configuration["com.k2.itest.id"],
                        type: "number"
                    },
                    "com.k2.itest.userId": {
                        displayName: "User ID",
                        type: "number"
                    },
                    "com.k2.itest.title": {
                        displayName: "Title",
                        type: "string"
                    },
                    "com.k2.itest.completed": {
                        displayName: "Completed",
                        type: "boolean"
                    }
                },
                methods: {
					"com.k2.itest.getTitle": {
						displayName: "Get Title",
						type: "read",
						inputs: [],
						outputs: ["com.k2.itest.title"]
					},
					"com.k2.itest.getUserId": {
						displayName: "Get User Id",
						type: "read",
						input: [],
						outputs: ["com.k2.itest.userId"]
					}
                }
            }
        }
    });
}

onexecute = function({objectName, methodName, parameters, properties, configuration}) {
    switch (objectName)
    {
        case "com.k2.itest": onexecuteTodo(methodName, parameters, properties, configuration); break;
        default: throw new Error("The object " + objectName + " is not supported.");
    }
}

function onexecuteTodo(methodName, parameters, properties, configuration) {
    switch (methodName)
    {
		case "com.k2.itest.getTitle": onexecuteTodoGetKey(parameters, properties, configuration); break;
		case "com.k2.itest.getUserId": onexecuteTodoGetUserId(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecuteTodoGetKey(parameters, properties, configuration){
		postResult({"com.k2.itest.title": configuration["com.k2.itest.title"]});
}

function onexecuteTodoGetUserId(parameters, properties, configuration){
		postResult({"com.k2.itest.userId": configuration["com.k2.itest.userId"]});
}
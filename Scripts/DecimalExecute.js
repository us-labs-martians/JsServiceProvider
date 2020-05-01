metadata = {
  "systemName": "JsspITest_DecimalExecute",
  "displayName": "JavaScript Service Provider Decimal Execute Test",
  "description": "This is for integration test purposes."
};

ondescribe = function () {
  postSchema({
    objects: {
      "JsspITest_Test1": {
        displayName: "JsspITest_Test1",
        description: "JsspITest_Test1.description",
        properties: {
          "Val1": { displayName: "Val1", description: "value #1", type: "decimal" },
          "Val2": { displayName: "Val2", description: "value #2", type: "decimal" },
          "Val3": { displayName: "Val3", description: "value #3", type: "number" },
          "Val4": { displayName: "Val4", description: "value #4", type: "number" },
          "Val5": { displayName: "Val5", description: "value #5", type: "number" },
          "Val6": { displayName: "Val6", description: "value #6", type: "number" },
          "Val7": { displayName: "Val7", description: "value #7", type: "number" },
          "Val8": { displayName: "Val8", description: "value #8", type: "number" },
          "Val9": { displayName: "Val9", description: "value #9", type: "number" },
          "Value": { displayName: "Value", description: "return value", type: "decimal" }
        },
        methods: {
          "ReadAdd": {
            displayName: "Read Add",
            description: "Add operation on two decimals",
            type: "read",
            inputs: ["Val1", "Val2"],
            requiredInputs: ["Val1", "Val2"],
            outputs: ["Value"]
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
    case "ReadAdd":
      executeTest1Add(parameters, properties);
      break;
    default: throw new Error("The method " + methodName + " is not supported.");
  }
}

function executeTest1Add(parameters, properties) {
  value = properties["Val1"] + properties["Val2"];
  postResult({ "Value": value });
}

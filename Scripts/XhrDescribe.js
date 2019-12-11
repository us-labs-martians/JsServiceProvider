objects: {
	"object1": {
		displayName: "OBJECT1",
		description: "A fake object1",
		version: "1",
		isActive: true,
		properties: {
			"object1.prop1": {
				displayName: "OBJECT1.PROP1",
				description: "object1.prop1.description",
				type: "string"
			},
			"object1.prop2": {
				displayName: "OBJECT1.PROP2",
				description: "object1.prop2.description",
				type: "number"
			},
			"object1.prop3": {
				displayName: "OBJECT1.PROP3",
				description: "object1.prop3.description",
				type: "decimal"
			},
			"object1.prop4": {
				displayName: "OBJECT1.PROP4",
				description: "object1.prop4.description",
				type: "boolean"
			},
			"object1.prop5": {
				displayName: "OBJECT1.PROP5",
				description: "object1.prop5.description",
				type: "dateTime"
			}
		},
		methods: {
			"object1.method1": {
				displayName: "METHOD1",
				description: "A fake method1",
				type: "read",
				parameters: {
					"object1.parameter1": {
						displayName: "OBJECT1.PARAMETER1",
						description: "object1.parameter1.description",
						type: "string"
					},
					"object1.parameter2": {
						displayName: "OBJECT1.PARAMETER2",
						description: "object1.parameter2.description",
						type: "number"
					},
					"object1.parameter3": {
						displayName: "OBJECT1.PARAMETER3",
						description: "object1.parameter3.description",
						type: "decimal"
					},
					"object1.parameter4": {
						displayName: "OBJECT1.PARAMETER4",
						description: "object1.parameter4.description",
						type: "boolean"
					},
					"object1.parameter5": {
						displayName: "OBJECT1.PARAMETER5",
						description: "object1.parameter5.description",
						type: "dateTime"
					},
					"object1.parameter6": {
						displayName: "OBJECT1.PARAMETER6",
						description: "object1.parameter6.description",
						type: "string"
					},
					"object1.parameter7": {
						displayName: "OBJECT1.PARAMETER7",
						description: "object1.parameter7.description",
						type: "number"
					},
					"object1.parameter8": {
						displayName: "OBJECT1.PARAMETER8",
						description: "object1.parameter8.description",
						type: "decimal"
					},
					"object1.parameter9": {
						displayName: "OBJECT1.PARAMETER9",
						description: "object1.parameter9.description",
						type: "boolean"
					},
					"object1.parameter10": {
						displayName: "OBJECT1.PARAMETER10",
						description: "object1.parameter10.description",
						type: "dateTime"
					}
				},
				requiredParameters: ["object1.parameter6", "object1.parameter7", "object1.parameter8", "object1.parameter9", "object1.parameter10"],
				inputs: ["object1.prop1", "object1.prop2", "object1.prop3", "object1.prop4", "object1.prop5"],
				requiredInputs: ["object1.prop1", "object1.prop2", "object1.prop3", "object1.prop4", "object1.prop5"],
				outputs: ["object1.prop1", "object1.prop2", "object1.prop3", "object1.prop4", "object1.prop5"]
			}
		}
	}
}

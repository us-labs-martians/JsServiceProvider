"{"Jssp_XHRTest":{"displayName":"Jssp_XHRTest","description":"Jssp_XHRTest.description","isActive":true,"properties":{"Value":{"displayName":"Value","description":"return value","type":"number"},"Title":{"displayName":"Title","description":"Title","type":"string"}},"methods":{"GetTitle":{"displayName":"Get Title","description":"Get Title description","type":"read","outputs":["Value"]}}},"JsspITest_Test1":{"displayName":"JsspITest_Test1","description":"JsspITest_Test1.description","isActive":true,"properties":{"Val1":{"displayName":"Val1","description":"value #1","type":"number"},"Val2":{"displayName":"Val2","description":"value #2","type":"number"},"Val3":{"displayName":"Val3","description":"value #3","type":"number"},"String1":{"displayName":"String1","description":"String #1","type":"string"},"Value":{"displayName":"Value","description":"return value","type":"number"},"DateValue":{"displayName":"DateValue","description":"return date value","type":"dateTime"}},"methods":{"ReadDivide":{"displayName":"Read Divide","description":"Read Divide a bunch of numbers","type":"read","inputs":["Val1","Val2","Val3"],"requiredInputs":["Val1","Val2"],"outputs":["Value"]},"UpdateAdd":{"displayName":"Update Add","description":"Update add a bunch of numbers","type":"update","outputs":["Value"]},"DateTest":{"displayName":"Date Test","description":"Test for dates","type":"delete","inputs":["String1"],"outputs":["DateValue"]},"CreateAdd":{"displayName":"Create Add","description":"Create add a bunch of numbers","type":"create","inputs":["Val1","Val2","Val3"],"requiredInputs":["Val1","Val2"],"outputs":["Value"]}}}}"
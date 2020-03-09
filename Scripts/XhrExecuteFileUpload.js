 metadata = {
   "systemName": "JsspITest_XHRExecute_File_Upload",
   "displayName": "JavaScript Service Provider XHR Execute File Upload Test",
   "description": "This is for integration test purposes."
 };

 ondescribe = function () {
   console.log('test');
   postSchema({
     objects: {
       "JsspITest_Test1": {
         displayName: "JsspITest_Test1",
         description: "JsspITest_Test1.description",
         isActive: true,
          properties: {
            "file1": { displayName: "File1", description: "Input File Prop", type: "attachment" },
            "fileAttr": { displayName: "FileAttributes", description: "InputFile Attributes", type: "string" },
            "fileResult": { displayName: "FileResult", description: "File result", type: "attachment" },
            "imgResult": { displayName: "ImageResult", description: "Image result", type: "attachment", extendedType: "k2.com/2019/image" },
         },
         methods: {
          "UploadAndDownloadFile": {
            displayName: "UploadAndDownloadFile",
            description: "Uploads file and downloads the same file back",
            type: "read",
            inputs: ["img1"],
            requiredInputs: ["img1"],
            outputs: ["fileResult"]
           },
          "UploadAndDownloadImage": {
            displayName: "UploadAndDownloadImage",
            description: "Uploads image and downloads the same image back",
            type: "read",
            parameters: {
              "img1": { displayName: "Image1", description: "Input Image Param", type: "attachment", extendedType: "k2.com/2019/image" }
            },
            requiredParameters: ["img1"],
            outputs: ["imgResult"]
          },
          "UploadAndDownloadFileWithOtherProps": {
            displayName: "UploadAndDownloadFileWithOtherProps",
            description: "Uploads file and downloads the same file back with additional props",
            type: "read",
            inputs: ["file1", "fileAttr"],
            requiredInputs: ["file1", "fileAttr"],
            outputs: ["fileResult", "fileAttr"]
          }
         }
       }
     }
   });
 };

 onexecute = function (objectName, methodName, parameters, properties) {
   switch (objectName) {
     case "JsspITest_Test1":
       executeXHRTest(methodName, parameters, properties);
       break;
     default:
       throw new Error("the object " + objectName + " is not supported.");
   }
 };

 function executeXHRTest(methodName, parameters, properties) {
   switch (methodName) {
     case "UploadAndDownloadFile":
       executeUploadAndDownloadFileMethod(parameters, properties);
       break;
     case "UploadAndDownloadImage":
       executeUploadAndDownloadImageMethod(parameters, properties);
       break;
     case "UploadAndDownloadFileWithOtherProps":
       executeUploadAndDownloadFileWithProps(parameters, properties);
       break;
     default: throw new Error("The method " + methodName + " is not supported.");
   }
 }

function executeUploadAndDownloadFileMethod(parameters, properties) {
   var xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function () {
     if (xhr.readyState !== 4) return;
     if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
    
     postResult({
       "fileResult": {
         filename: xhr.getResponseHeader("file-name"),
         content: xhr.response
       }
     });
  };
  xhr.open("POST", 'https://jsserviceprovider-itest-dev.azurewebsites.net/uploadAndDownloadFile');
  xhr.responseType = 'blob';
  xhr.send(properties["file1"]);
}

function executeUploadAndDownloadImageMethod(parameters, properties) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

    postResult({
      "imgResult": {
        filename: xhr.getResponseHeader("file-name"),
        content: xhr.response
      }
    });
  };
  xhr.open("POST", 'https://jsserviceprovider-itest-dev.azurewebsites.net/uploadAndDownloadFile');
  xhr.responseType = 'blob';
  xhr.send(parameters["img1"]);
}

function executeUploadAndDownloadFileWithProps(parameters, properties) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

    postResult({
      "fileResult": {
        filename: xhr.getResponseHeader("file-name"),
        content: xhr.response
      },
      "fileAttr": "File uploaded " + properties["fileAttr"]
    });
  };
  xhr.open("POST", 'https://jsserviceprovider-itest-dev.azurewebsites.net/uploadAndDownloadFile');
  xhr.responseType = 'blob';
  xhr.send(properties["file1"]);
}

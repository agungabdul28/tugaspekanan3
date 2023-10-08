const prompt = require('prompt-sync')({sigint: true});

const product = {
    "id": 100000065224,
    "storageId": 10000008884,
    "code": "Tgt00-A-A-01",
    "productId": 110000081009,
    "productName": "FloBrand-DressBSPink",
    "productCode": "FBR00040101",
    "quantity": 10,
    "createdTime": "2022-02-08T10:35:19Z",
}

let jsonData = JSON.parse(product);

let quantity = jsonData["quantity"];

console.log("the price is: " + quantity);

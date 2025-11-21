// const numbers =  "1 2 3 4 5";
// const numbers2 = "1 2 -3 -4 5";
// const numbers3 = "9 1 8 4 -5";
// const numberSplit = numbers.split(" ");
// const numberArray = []
// console.log(numberSplit);
// for(let i = 0; i < numberSplit.length; i++) {
//     const strToNum = parseInt(numberSplit[i]);
//     numberArray.push(strToNum)
//     console.log(typeof strToNum);
// }
// for(let i = 0; i < numberArray.length; i++) {
//     let lowNumber = numberArray[0];
//     if(lowNumber > numberArray[i]) {
//         lowNumber = numberArray[i]
//     }
// }
let items = JSON.parse(localStorage.getItem("myItems")) || [];
let input = document.getElementById("user-input");
let div = document.getElementById("local-storage-container");
let storageItems = document.getElementById("storage-items");
const button = document.getElementById("submit");


let saveStorage = [];
let saveStorageStringify = [];



function saveInput() {
    saveStorageStringify.push(localStorage.setItem("userText",input.value));
    saveStorage.push(input.value);
    let inputItem = document.createElement("li");
    inputItem.append(document.createTextNode(input.value));
    storageItems.append(inputItem);

    input.value = ""
    console.log(saveStorage);
}

button.addEventListener("click", saveInput);

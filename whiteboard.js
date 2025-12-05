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


// let items = JSON.parse(localStorage.getItem("myItems")) || [];
// let input = document.getElementById("user-input");
// let div = document.getElementById("local-storage-container");
// let storageItems = document.getElementById("storage-items");
// const button = document.getElementById("submit");
// const clearButton = document.getElementById("clear");



// for(let i = 0; i < items.length; i++) {
//     let retrievedItems = JSON.parse(localStorage.getItem("myItems"))
//     let inputItem = document.createElement("li");
//     let inputItemNode  = document.createTextNode(retrievedItems[i]);
//     inputItem.append(inputItemNode);
//     storageItems.append(inputItem)
// }

// function clearAll() {
//     localStorage.clear();
//     window.location.reload();
// }

// function saveInput() {
// items.push(input.value);
// localStorage.setItem("myItems", JSON.stringify(items));
// let retrievedItems = JSON.parse(localStorage.getItem("myItems"))
// let inputItem = document.createElement("li");
// let inputItemNode  = document.createTextNode(input.value);
// inputItem.append(inputItemNode);
// storageItems.append(inputItem)



// input.value = "";
// }

// button.addEventListener("click", saveInput);
// clearButton.addEventListener("click", clearAll );


let actionCounter = 0;
let text = "user-action"
let btn = document.getElementById("create-id");
btn.addEventListener("click", function() {
    const para = document.createElement("h1");
    para.id = text + actionCounter;
    actionCounter++;
    console.log(para);
} );

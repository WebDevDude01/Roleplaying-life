// import Chart from "chart.js/auto"

// const { createElement } = require("react");

// =======RELOAD PAGE USING LOCAL STORAGE=========
let localStorageItems = JSON.parse(localStorage.getItem("userAction")) || [];

let action1 = document.getElementById("action-1");
  let counter = 0;
  let actionDivCounter = 0;
for(let i = 0; i < localStorageItems.length; i++) {

  
  const actionDiv = document.createElement("div");
  const actionPara1 = document.createElement("h1");
  const catagoryPara1 = document.createElement("p");
  const subCategoryPara = document.createElement("p");
  const importancePara1 = document.createElement("p");
  const hr = document.createElement("hr");
  const button = document.createElement("button");
  button.id = "submitted-action" + counter++;
  actionDiv.id = "actionDiv" + actionDivCounter++
  actionDiv.classList.add("action-ticket")

  const actionNode = document.createTextNode(localStorageItems[i]["userAction"]);
  const categoryNode = document.createTextNode(localStorageItems[i]["category"]);
  const subCategoryParaNode = document.createTextNode(localStorageItems[i]["actionSubCategory"])
  const importanceNode = document.createTextNode(localStorageItems[i]["actionImportance"]);

  const buttonNode = document.createTextNode("Complete");


  actionPara1.append(actionNode);
  catagoryPara1.append(categoryNode);
  subCategoryPara.append(subCategoryParaNode);
  importancePara1.append(importanceNode);
  button.append(buttonNode);

  action1.append(actionDiv);
  actionDiv.append(actionPara1);
  actionDiv.append(catagoryPara1);
  actionDiv.append(subCategoryPara)
  actionDiv.append(importancePara1);
  actionDiv.append(button);
  actionDiv.append(hr);
}
// ===============================================

// ===============MY CHART======================== 
const thirtyDays = {}
for(let i = 0; i < 31; i++) {
  thirtyDays[i] = 0;
}
thirtyDays[1] = Math.floor(Math.random() * 100);
thirtyDays[2] = Math.floor(Math.random() * 100);
thirtyDays[3] = Math.floor(Math.random() * 100);
thirtyDays[4] = Math.floor(Math.random() * 100);
thirtyDays[5] = Math.floor(Math.random() * 100);
thirtyDays[6] = Math.floor(Math.random() * 100);
thirtyDays[7] = Math.floor(Math.random() * 100);
thirtyDays[8] = Math.floor(Math.random() * 100);
thirtyDays[9] = Math.floor(Math.random() * 100);
  
thirtyDays[10] = Math.floor(Math.random() * 100);
thirtyDays[11] = Math.floor(Math.random() * 100);
thirtyDays[12] = Math.floor(Math.random() * 100);
thirtyDays[13] = Math.floor(Math.random() * 100);
thirtyDays[14] = Math.floor(Math.random() * 100);
thirtyDays[15] = Math.floor(Math.random() * 100);
thirtyDays[16] = Math.floor(Math.random() * 100);
thirtyDays[17] = Math.floor(Math.random() * 100);
thirtyDays[18] = Math.floor(Math.random() * 100);
thirtyDays[19] = Math.floor(Math.random() * 100);
thirtyDays[20] = Math.floor(Math.random() * 100);
thirtyDays[21] = Math.floor(Math.random() * 100);
thirtyDays[22] = Math.floor(Math.random() * 100);
thirtyDays[23] = Math.floor(Math.random() * 100);
thirtyDays[24] = Math.floor(Math.random() * 100);
thirtyDays[25] = Math.floor(Math.random() * 100);
thirtyDays[26] = Math.floor(Math.random() * 100);
thirtyDays[27] = Math.floor(Math.random() * 100);
thirtyDays[28] = Math.floor(Math.random() * 100);
thirtyDays[29] = Math.floor(Math.random() * 100);
thirtyDays[30] = Math.floor(Math.random() * 100);

const days = [];
function range(){
  for(let i = 1; i < 30; i++) {
      days.push(i)
}
  return days
}
range();
const ctx = document.getElementById("myChart");
const ctx2 = document.getElementById("myChart2");
// ===============================================



// const physicalStat = document.getElementById("physical-level-number").value = dailyEnergy.physical
// const psycheStat = document.getElementById("psyche-level-number");
// const intelStat = document.getElementById("intel-level-number");
// const craftStat = document.getElementById("craft-level-number");
// const spiritualStat = document.getElementById("spiritual-level-number");
// const coreStat = document.getElementById("core-level-number");

const smallTask = "small-task";
const mediumTask = "medium-task";
const bigTask =  "big-task";
const transformationalTask = "Transformational";
const smallTaskExp = 5;
const mediumTaskExp = 10;
const bigTaskExp = 20;
const transformationalTaskExp = 50;

// ===========PLAYER STATS================
let physicalStatObj = {
  physicalLevel: 1,
  physicalSubStats: {
    endurance: 0,
    strength: 0,
    mobility: 0,
    vitality: 0,
    discipline: 0,
    dexterity: 0
  }

};

let  psycheStatObj = {
  psycheLevel: 1,
  psycheSubstats: {
    emotionalRegulation: 0,
    willpower: 0, 
    clarity: 0,
    selfAwareness: 0,
    stressResistance: 0,
    motivation: 0
  }
  

};
let intelStatObj = {
  intelLevel: 1,
  intelSubStats: {
    problemSolving: 0,
    learningSpeed: 0,
    memory: 0,
    analyticalThinking: 0,
    communication: 0,
    curiosity: 0
  }
};

let spiritualStatObj = {
  spiritualLevel: 1,
  spiritualSubStats: {
    mindfullness: 0,
    gratitude: 0,
    compassion: 0,
    connection: 0,
    purposeAlignment: 0,
    faithTrust: 0
  } 

};
let coreStatObj = {
  coreLevel: 1,
  coreSubStats: {
    authenticity: 0,
    integrity: 0,
    responsibility: 0,
    humility: 0,
    courage: 0,
    respect: 0
  }
}
// ===============================================



// =================DISPLAYING SKILL POINTS===================//
let physicalLevelNumber = document.getElementById("physical-level-number");
let psycheLevelNumber = document.getElementById("psyche-level-number");
let intelLevelNumber = document.getElementById("intel-level-number");
let spiritualLevelNumber = document.getElementById("spiritual-level-number");
let coreLevelNumber = document.getElementById("core-level-number");
physicalLevelNumber.value = 1;
psycheLevelNumber.value = 1;
intelLevelNumber.value = 1;
spiritualLevelNumber.value = 1;
coreLevelNumber.value = 1;

physicalLevelNumber.innerHTML = physicalLevelNumber.value;
psycheLevelNumber.innerHTML = psycheLevelNumber.value;
intelLevelNumber.innerHTML = intelLevelNumber.value;
spiritualLevelNumber.innerHTML = spiritualLevelNumber.value;
coreLevelNumber.innerHTML = coreLevelNumber.value;

// ===============================================//

  // =========  SECITON 3 PLAYER ACTIONS=====================


//   const submitCompletion = document.getElementById("add-action");
//   const playerAction = document.getElementById("player-action");
//   const selection = document.getElementById("category");
//   const subCategory = document.getElementById("sub-category");
//   const TaskImportance = document.getElementById("task-importance");

//   const statList = [physicalStatObj, psycheStatObj, intelStatObj, spiritualStatObj, coreStatObj ];


//   console.log(document.querySelectorAll("optgroup").value);


//   function completeAction() {

//     if( subCategory.value === "endurance" && TaskImportance.value === smallTask) {
//       physicalStatObj.physicalSubStats.endurance += 5
//     }else if( subCategory.value === "strength" && TaskImportance.value === smallTask) {
//       physicalStatObj.physicalSubStats.strength += 5
//     }else if( subCategory.value === "mobility" && TaskImportance.value === smallTask) {
//       physicalStatObj.physicalSubStats.mobility += 5
//     }else if( subCategory.value === "vitality" && TaskImportance.value === smallTask) {
//       physicalStatObj.physicalSubStats.vitality += 5
//     }else if( subCategory.value === "discipline" && TaskImportance.value === smallTask) {
//       physicalStatObj.physicalSubStats.discipline += 5
//     }else if( subCategory.value === "dexterity" && TaskImportance.value === smallTask) {
//       physicalStatObj.physicalSubStats.dexterity += 5
//     };

//     if( subCategory.value === "endurance" && TaskImportance.value === mediumTask) {
//       physicalStatObj.physicalSubStats.endurance += 10
//     }else if( subCategory.value === "strength" && TaskImportance.value === mediumTask) {
//       physicalStatObj.physicalSubStats.strength += 10
//     }else if( subCategory.value === "mobility" && TaskImportance.value === mediumTask) {
//       physicalStatObj.physicalSubStats.mobility += 10
//     }else if( subCategory.value === "vitality" && TaskImportance.value === mediumTask) {
//       physicalStatObj.physicalSubStats.vitality += 10
//     }else if( subCategory.value === "discipline" && TaskImportance.value === mediumTask) {
//       physicalStatObj.physicalSubStats.discipline += 10
//     }else if( subCategory.value === "dexterity" && TaskImportance.value === mediumTask) {
//       physicalStatObj.physicalSubStats.dexterity += 10
//     };

//     if( subCategory.value === "endurance" && TaskImportance.value === bigTask) {
//       physicalStatObj.physicalSubStats.endurance += 20
//     }else if( subCategory.value === "strength" && TaskImportance.value === bigTask) {
//       physicalStatObj.physicalSubStats.strength += 20
//     }else if( subCategory.value === "mobility" && TaskImportance.value === bigTask) {
//       physicalStatObj.physicalSubStats.mobility += 20
//     }else if( subCategory.value === "vitality" && TaskImportance.value === bigTask) {
//       physicalStatObj.physicalSubStats.vitality += 20
//     }else if( subCategory.value === "discipline" && TaskImportance.value === bigTask) {
//       physicalStatObj.physicalSubStats.discipline += 20
//     }else if( subCategory.value === "dexterity" && TaskImportance.value === bigTask) {
//       physicalStatObj.physicalSubStats.dexterity += 20
//     };

//     if( subCategory.value === "endurance" && TaskImportance.value === transformationalTask) {
//       physicalStatObj.physicalSubStats.endurance += 50
//     }else if( subCategory.value === "strength" && TaskImportance.value === transformationalTask) {
//       physicalStatObj.physicalSubStats.strength += 50
//     }else if( subCategory.value === "mobility" && TaskImportance.value === transformationalTask) {
//       physicalStatObj.physicalSubStats.mobility += 50
//     }else if( subCategory.value === "vitality" && TaskImportance.value === transformationalTask) {
//       physicalStatObj.physicalSubStats.vitality += 50
//     }else if( subCategory.value === "discipline" && TaskImportance.value === transformationalTask) {
//       physicalStatObj.physicalSubStats.discipline += 50
//     }else if( subCategory.value === "dexterity" && TaskImportance.value === transformationalTask) {
//       physicalStatObj.physicalSubStats.dexterity += 50
//     };

// // ==============================PSYCHE========================================

//         if( subCategory.value === "emotional-regulation" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.emotionalRegulation += 5
//     }else if( subCategory.value === "willpower" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.willpower += 5
//     }else if( subCategory.value === "clarity" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.clarity += 5
//     }else if( subCategory.value === "self-awareness" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.selfAwareness += 5
//     }else if( subCategory.value === "motivation" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.motivation += 5
//     }else if( subCategory.value === "stress-resistance" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.stressResistance += 5
//     }else if( subCategory.value === "motivation" && TaskImportance.value === smallTask) {
//       psycheStatObj.psycheSubstats.motivation += 5
//     };

//         if( subCategory.value === "emotional-regulation" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.emotionalRegulation += 10
//     }else if( subCategory.value === "willpower" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.willpower += 10
//     }else if( subCategory.value === "clarity" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.clarity += 10
//     }else if( subCategory.value === "self-awareness" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.selfAwareness += 10
//     }else if( subCategory.value === "motivation" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.motivation += 10
//     }else if( subCategory.value === "stress-resistance" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.stressResistance += 10
//     }else if( subCategory.value === "motivation" && TaskImportance.value === mediumTask) {
//       psycheStatObj.psycheSubstats.motivation += 10
//     };

//     if( subCategory.value === "emotional-regulation" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.emotionalRegulation += 20
//     }else if( subCategory.value === "willpower" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.willpower += 20
//     }else if( subCategory.value === "clarity" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.clarity += 20
//     }else if( subCategory.value === "self-awareness" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.selfAwareness += 20
//     }else if( subCategory.value === "motivation" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.motivation += 20
//     }else if( subCategory.value === "stress-resistance" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.stressResistance += 20
//     }else if( subCategory.value === "motivation" && TaskImportance.value === bigTask) {
//       psycheStatObj.psycheSubstats.motivation += 20
//     };

//     if( subCategory.value === "emotional-regulation" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.emotionalRegulation += 50
//     }else if( subCategory.value === "willpower" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.willpower += 50
//     }else if( subCategory.value === "clarity" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.clarity += 50
//     }else if( subCategory.value === "self-awareness" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.selfAwareness += 50
//     }else if( subCategory.value === "motivation" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.motivation += 50
//     }else if( subCategory.value === "stress-resistance" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.stressResistance += 50
//     }else if( subCategory.value === "motivation" && TaskImportance.value === transformationalTask) {
//       psycheStatObj.psycheSubstats.motivation += 50
//     };

// // =========================INTEL====================================

//     if( subCategory.value === "problem-solving" && TaskImportance.value === smallTask) {
//       intelStatObj.intelSubStats.problemSolving += 5
//     }else if( subCategory.value === "learning-speed" && TaskImportance.value === smallTask) {
//       intelStatObj.intelSubStats.learningSpeed += 5
//     }else if( subCategory.value === "memory" && TaskImportance.value === smallTask) {
//       intelStatObj.intelSubStats.memory += 5
//     }else if( subCategory.value === "analytics" && TaskImportance.value === smallTask) {
//       intelStatObj.intelSubStats.analyticalThinking += 5
//     }else if( subCategory.value === "communication" && TaskImportance.value === smallTask) {
//       intelStatObj.intelSubStats.communication += 5
//     }else if( subCategory.value === "curiosity" && TaskImportance.value === smallTask) {
//       intelStatObj.intelSubStats.curiosity += 5
//     };


//     if( subCategory.value === "problem-solving" && TaskImportance.value === mediumTask) {
//       intelStatObj.intelSubstats.problemSolving += 10
//     }else if( subCategory.value === "learning-speed" && TaskImportance.value === mediumTask) {
//       intelStatObj.intelSubstats.learningSpeed += 10
//     }else if( subCategory.value === "memory" && TaskImportance.value === mediumTask) {
//       intelStatObj.intelSubstats.memory += 10
//     }else if( subCategory.value === "analytics" && TaskImportance.value === mediumTask) {
//       intelStatObj.intelSubstats.analyticalThinking += 10
//     }else if( subCategory.value === "communication" && TaskImportance.value === mediumTask) {
//       intelStatObj.intelSubstats.communication += 10
//     }else if( subCategory.value === "curiosity" && TaskImportance.value === mediumTask) {
//       intelStatObj.intelSubstats.curiosity += 10
//     };




//     if( subCategory.value === "problem-solving" && TaskImportance.value === bigTask) {
//       intelStatObj.intelSubStats.problemSolving += 20
//     }else if( subCategory.value === "learning-speed" && TaskImportance.value === bigTask) {
//       intelStatObj.intelSubStats.learningSpeed += 20
//     }else if( subCategory.value === "memory" && TaskImportance.value === bigTask) {
//       intelStatObj.intelSubStats.memory += 20
//     }else if( subCategory.value === "analytics" && TaskImportance.value === bigTask) {
//       intelStatObj.intelSubStats.analyticalThinking += 20
//     }else if( subCategory.value === "communication" && TaskImportance.value === bigTask) {
//       intelStatObj.intelSubStats.communication += 20
//     }else if( subCategory.value === "curiosity" && TaskImportance.value === bigTask) {
//       intelStatObj.intelSubStats.curiosity += 20
//     };



//     if( subCategory.value === "problem-solving" && TaskImportance.value === transformationalTask) {
//       intelStatObj.intelSubStats.problemSolving += 50
//     }else if( subCategory.value === "learning-speed" && TaskImportance.value === transformationalTask) {
//       intelStatObj.intelSubStats.learningSpeed += 50
//     }else if( subCategory.value === "memory" && TaskImportance.value === transformationalTask) {
//       intelStatObj.intelSubstats.memory += 50
//     }else if( subCategory.value === "analytics" && TaskImportance.value === transformationalTask) {
//       intelStatObj.intelSubStats.analyticalThinking += 50
//     }else if( subCategory.value === "communication" && TaskImportance.value === transformationalTask) {
//       intelStatObj.intelSubStats.communication += 50
//     }else if( subCategory.value === "curiosity" && TaskImportance.value === transformationalTask) {
//       intelStatObj.intelSubStats.curiosity += 50
//     };


// // =========================SPIRITUAL=================================



//     if( subCategory.value === "mindfullness" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubStats.mindfullness += 5
//     }else if( subCategory.value === "gratitude" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.gratitude += 5
//     }else if( subCategory.value === "compassion" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.compassion += 5
//     }else if( subCategory.value === "connection" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.connection += 5
//     }else if( subCategory.value === "communication" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.communication += 5
//     }else if( subCategory.value === "purpose-alignment" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.purposeAlignment += 5
//     }else if( subCategory.value === "faith-trust" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.faithTrust += 5
//     };


//     if( subCategory.value === "mindfullness" && TaskImportance.value === mediumTask) {
//       spiritualStatObj.spiritualSubStats.mindfullness += 10
//     }else if( subCategory.value === "gratitude" && TaskImportance.value === mediumTask) {
//       spiritualStatObj.spiritualSubStats.gratitude += 10
//     }else if( subCategory.value === "compassion" && TaskImportance.value === mediumTask) {
//       spiritualStatObj.spiritualSubStats.compassion += 10
//     }else if( subCategory.value === "connection" && TaskImportance.value === mediumTask) {
//       spiritualStatObj.spiritualSubStats.connection += 10
//     }else if( subCategory.value === "communication" && TaskImportance.value === mediumTask) {
//       spiritualStatObj.spiritualSubStats.communication += 10
//     }else if( subCategory.value === "purpose-alignment" && TaskImportance.value === mediumTask) {
//       spiritualStatObj.spiritualSubStats.purposeAlignment += 10
//     }else if( subCategory.value === "faith-trust" && TaskImportance.value === mediumTask) {
//       spiritualStatOb.spiritualSubStats.faithTrust += 10
//     };

  
//     if( subCategory.value === "mindfullness" && TaskImportance.value === bigTask) {
//       spiritualStatObj.spiritualSubstats.mindfullness += 20
//     }else if( subCategory.value === "gratitude" && TaskImportance.value === smallTask) {
//       spiritualStatObj.spiritualSubstats.gratitude += 20
//     }else if( subCategory.value === "compassion" && TaskImportance.value === bigTask) {
//       spiritualStatObj.spiritualSubstats.compassion += 20
//     }else if( subCategory.value === "connection" && TaskImportance.value === bigTask) {
//       spiritualStatObj.spiritualSubstats.connection += 20
//     }else if( subCategory.value === "communication" && TaskImportance.value === bigTask) {
//       spiritualStatObj.spiritualSubstats.communication += 20
//     }else if( subCategory.value === "purpose-alignment" && TaskImportance.value === bigTask) {
//       spiritualStatObj.spiritualSubstats.purposeAlignment += 20
//     }else if( subCategory.value === "faith-trust" && TaskImportance.value === bigTask) {
//       spiritualStatObj.spiritualSubstats.faithTrust += 20
//     };


//     if( subCategory.value === "mindfullness" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.mindfullness += 50
//     }else if( subCategory.value === "gratitude" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.gratitude += 50
//     }else if( subCategory.value === "compassion" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.compassion += 50
//     }else if( subCategory.value === "connection" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.connection += 50
//     }else if( subCategory.value === "communication" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.communication += 50
//     }else if( subCategory.value === "purpose-alignment" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.purposeAlignment += 50
//     }else if( subCategory.value === "faith-trust" && TaskImportance.value === transformationalTask) {
//       spiritualStatObj.spiritualSubstats.faithTrust += 50
//     }

//     // ==============================CORE===============================

//     if( subCategory.value === "authenticity" && TaskImportance.value === smallTask) {
//       coreStatObj.coreSubStats.authenticity += 5
//     }else if( subCategory.value === "integrity" && TaskImportance.value === smallTask) {
//       coreStatObj.coreSubStats.integrity += 5
//     }else if( subCategory.value === "responsibility" && TaskImportance.value === smallTask) {
//       coreStatObj.coreSubStats.responsibility += 5
//     }else if( subCategory.value === "humility" && TaskImportance.value === smallTask) {
//       coreStatObj.coreSubStats.humility += 5
//     }else if( subCategory.value === "courage" && TaskImportance.value === smallTask) {
//       coreStatObj.coreSubStats.courage += 5
//     }else if( subCategory.value === "respect" && TaskImportance.value === smallTask) {
//       coreStatObj.coreSubStats.respect += 5
//     }

//     if( subCategory.value === "authenticity" && TaskImportance.value === mediumTask) {
//       coreStatObj.coreSubStats.authenticity += 10
//     }else if( subCategory.value === "integrity" && TaskImportance.value === mediumTask) {
//       coreStatObj.coreSubStats.integrity += 10
//     }else if( subCategory.value === "responsibility" && TaskImportance.value === mediumTask) {
//       coreStatObj.coreSubStats.responsibility += 10
//     }else if( subCategory.value === "humility" && TaskImportance.value === mediumTask) {
//       coreStatObj.coreSubStats.humility += 10
//     }else if( subCategory.value === "courage" && TaskImportance.value === mediumTask) {
//       coreStatObj.coreSubStats.courage += 10
//     }else if( subCategory.value === "respect" && TaskImportance.value === mediumTask) {
//       coreStatObj.coreSubStats.respect += 10
//     }

//     if( subCategory.value === "authenticity" && TaskImportance.value === bigTask) {
//       coreStatObj.coreSubStats.authenticity += 20
//     }else if( subCategory.value === "integrity" && TaskImportance.value === bigTask) {
//       coreStatObj.coreSubStats.integrity += 20
//     }else if( subCategory.value === "responsibility" && TaskImportance.value === bigTask) {
//       coreStatObj.coreSubStats.responsibility += 20
//     }else if( subCategory.value === "humility" && TaskImportance.value === bigTask) {
//       coreStatObj.coreSubStats.humility += 20
//     }else if( subCategory.value === "courage" && TaskImportance.value === bigTask) {
//       coreStatObj.coreSubStats.courage += 20
//     }else if( subCategory.value === "respect" && TaskImportance.value === bigTask) {
//       coreStatObj.coreSubStats.respect += 20
//     }

//     if( subCategory.value === "authenticity" && TaskImportance.value === transformationalTask) {
//       coreStatObj.coreSubStats.authenticity += 50
//     }else if( subCategory.value === "integrity" && TaskImportance.value === transformationalTask) {
//       coreStatObj.coreSubStats.integrity += 50
//     }else if( subCategory.value === "responsibility" && TaskImportance.value === transformationalTask) {
//       coreStatObj.coreSubStats.responsibility += 50
//     }else if( subCategory.value === "humility" && TaskImportance.value === transformationalTask) {
//       coreStatObj.coreSubStats.humility += 50
//     }else if( subCategory.value === "courage" && TaskImportance.value === transformationalTask) {
//       coreStatObj.coreSubStats.courage += 50
//     }else if( subCategory.value === "respect" && TaskImportance.value === transformationalTask) {
//       coreStatObj.coreSubStats.respect += 50
//     }
//   }

// ==========CREATING AND ADDING NEW ACTIONS=================//
// let submitAction = document.getElementById("submit-action"); 
let addAction = document.getElementById("add-action");
let actionsList = [];
const actionBoard = document.querySelector("#action-board");
function addNewAction() {
// let actionTitle = document.createElement("p")
// let actionCategory = document.createElement("p");
// let actionSubCategory = document.createElement("p")
// let taskImportance = document.createElement("p");

// actionTitle.classList.add("action-title");
// actionCategory.classList.add("action-category");
// actionSubCategory.classList.add("action-sub-category");
// taskImportance.classList.add("task-importance");

// let actionTitleTextNode = document.createTextNode(playerAction.value);
// let actionCategoryTextNode = document.createTextNode(selection.value);
// let actionSubCategoryTextNode = document.createTextNode(subCategory.value);

// let taskImportanceTextNode = document.createTextNode(TaskImportance.value);

// actionTitle.append(actionTitleTextNode);
// actionCategory.append(actionCategoryTextNode);
// actionSubCategory.append(actionSubCategoryTextNode);
// taskImportance.append(taskImportanceTextNode);

// actionTitle.innerHTML = playerAction.value;
    const playerAction = document.getElementById("player-action");
    const selection = document.getElementById("category");
    const subCategory = document.getElementById("sub-category");
    const TaskImportance = document.getElementById("task-importance");

  itemObject = {
    userAction : playerAction.value,
    category : selection.value,
    actionSubCategory: subCategory.value,
    actionImportance : TaskImportance.value
  }



  localStorageItems.push(itemObject);
  localStorage.setItem("userAction", JSON.stringify(localStorageItems) )
  const actionDiv = document.createElement("div")
  const actionPara = document.createElement("h1");
  const catagoryPara = document.createElement("p");
  const EXP = document.createElement("p");
  const importancePara = document.createElement("p");

  const button = document.createElement("button");

  const horizontalRule = document.createElement("hr")
  

  const actionNode = document.createTextNode(playerAction.value);
  const categoryNode = document.createTextNode(selection.value);
  const subCategoryNode = document.createTextNode(subCategory.value);
  const importanceNode = document.createTextNode(TaskImportance.value);
  const buttonNode = document.createTextNode("Complete")
  actionPara.append(actionNode);
  catagoryPara.append(categoryNode);
  EXP.append(subCategoryNode)
  importancePara.append(importanceNode);
  button.append(buttonNode);


  actionDiv.append(actionPara);
  actionDiv.append(catagoryPara);
  actionDiv.append(EXP);
  actionDiv.append(importancePara);
  actionDiv.append(button);
  actionDiv.append(horizontalRule);
  action1.append(actionDiv)


  // action1.append(actionPara);
  // action1.append(catagoryPara);
  // action1.append(EXP);
  // action1.append(importancePara);
  // action1.append(button);
  playerAction.value = "";
  selection.value = "Select Category";
  TaskImportance.value = "Select Task Importance";
  subCategory.value = "Select Sub Category";


  
}
console.log(actionBoard)



// =================UPDATING PLAYER SKILLS=========//
// event delegation for actions that are created.
actionBoard.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.value = localStorageItems)
})

// document.getElementById("submitted-action0").addEventListener("click", () => {
// switch(localStorageItems[0]["actionImportance"] && localStorageItems[0]["actionSubCategory"]) {
//   case smallTask:
//   case localStorageItems[0]["actionSubCategory"]:
//     physicalStatObj.physicalSubStats.strength += 5;
//     console.log("plus 5");
//     break;
//   case mediumTask:
//   case localStorageItems[0]["actionSubCategory"]:
//     physicalStatObj.physicalSubStats.strength += 10;
//     console.log("plus 10");
//     break;
//   case bigTask:
//   case localStorageItems[0]["actionSubCategory"]:
//     physicalStatObj.physicalSubStats.strength += 20;
//     console.log("plus 20");
//     break;
//   case transformationalTask:
//   case localStorageItems[0]["actionSubCategory"]:
//     physicalStatObj.physicalSubStats.strength += 50;
//     console.log("plus 50")
//     break;
//   default:
//     console.log("Can't find value to compare")
// }
// });
// ===============================================//



// 

// ==================PLAYER LEVEL UP ======================= //
// let physicalTotalEXP =  physicalStatObj.physicalSubStats.endurance + physicalStatObj.physicalSubStats.strength + physicalStatObj.physicalSubStats.mobility + physicalStatObj.physicalSubStats.vitality + physicalStatObj.physicalSubStats.discipline + physicalStatObj.physicalSubStats.dexterity;

// let psycheTotalEXP = psycheStatObj.psycheSubstats.emotionalRegulation + psycheStatObj.psycheSubstats.willpower + psycheStatObj.psycheSubstats.selfAwareness + psycheStatObj.psycheSubstats.stressResistance + psycheStatObj.psycheSubstats.motivation;

// let intelTotalEXP = intelStatObj.intelSubStats.problemSolving + intelStatObj.intelSubStats.learningSpeed + intelStatObj.intelSubStats.memory + intelStatObj.intelSubStats.analyticalThinking + intelStatObj.intelSubStats.communication + intelStatObj.intelSubStats.curiosity;

// let spiritualTotalEXP = spiritualStatObj.spiritualSubStats.mindfullness + spiritualStatObj.spiritualSubStats.gratitude + spiritualStatObj.spiritualSubStats.compassion + spiritualStatObj.spiritualSubStats.connection + spiritualStatObj.spiritualSubStats.purposeAlignment + spiritualStatObj.spiritualSubStats.faithTrust; 

// let coreTotalEXP = coreStatObj.coreSubStats.authenticity + coreStatObj.coreSubStats.integrity + coreStatObj.coreSubStats.responsibility + coreStatObj.coreSubStats.humility + coreStatObj.coreSubStats.courage + coreStatObj.coreSubStats.respect;

// let subCategoryPointsList = [physicalTotalEXP, psycheTotalEXP, intelTotalEXP, spiritualTotalEXP, coreTotalEXP];




// ======================================================== //




// addAction.addEventListener("click", () => {
//     const subCategory1 = document.getElementById("sub-category").value;
//     console.log(subCategory1);
// });







  const myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Physical', 'Psyche', 'Intel', 'Craft', 'Spiritual', 'Core'],
      datasets: [{
        label: '# of Votes',
        data: [physicalStatObj.physicalSubStats.endurance],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        } 
      }
    }
  });

const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
        label: '# of Votes',
        data: [thirtyDays[1], thirtyDays[2], thirtyDays[3], thirtyDays[4], thirtyDays[5], thirtyDays[6], thirtyDays[7], thirtyDays[8], thirtyDays[9], thirtyDays[10], thirtyDays[11],thirtyDays[12], thirtyDays[13], thirtyDays[14], thirtyDays[15],thirtyDays[16], thirtyDays[17], thirtyDays[18], thirtyDays[19], thirtyDays[20], thirtyDays[21], thirtyDays[22], thirtyDays[23], thirtyDays[24], thirtyDays[25], thirtyDays[26],thirtyDays[27], thirtyDays[28], thirtyDays[29], thirtyDays[30]],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  addAction.addEventListener("click", addNewAction );
  // submitAction.addEventListener("click", completeAction);







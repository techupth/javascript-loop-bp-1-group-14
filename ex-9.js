// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
function avg(AvgScore){
let sum = 0;
for(const i in studentsScore){
  sum += studentsScore[i]
}
return sum /Object.keys(studentsScore).length
}
let avgSc = avg(studentsScore)
console.log("Average score is " + avgSc)

let highScore = 0;
let highName ;

for (const i in studentsScore){
  if(studentsScore[i] > highScore){
      highScore = studentsScore[i]
      highName = i
  }
}
console.log( highName + " has the highest score, which is " + highScore + " points.")

let LowScore = Infinity;
let LowName ;

for (const i in studentsScore){
  if(studentsScore[i] < LowScore){
      LowScore = studentsScore[i]
      LowName = i
  }
}
console.log(LowName + " has lowest score, which is " + LowScore + " points.")
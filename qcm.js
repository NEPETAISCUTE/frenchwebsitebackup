
let questionfirstanswer = [true,true,true,true,true,true]

let score = 0
let totalanswered = 0

function fetchquestion(questionnum) {

  let n = questionnum.value
  let question = document.getElementById("question"+n);
  question.style.display = "block";
  for(let i = 1;i<questionnum.max;i++) {
    if(i!=n) {
      document.getElementById("question"+i).style.display = "none";
    }
  }
  document.getElementById("correct").style.display = "none";
  document.getElementById("incorrect").style.display = "none";
  return false;
}

function answer(question) {

  questionnum = document.getElementById("questionnum");

  if(question!=questionnum.max) {
    questionnum.value = question+1;
  }
  document.getElementById("grade").style.display = "block";

  switch(question) {
    case 1:
      if(document.getElementById("question1one").checked) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        if(questionfirstanswer[0]) {
          score++
        }
      } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
      }
      if(questionfirstanswer[0]) {
        totalanswered++
      }
      questionfirstanswer[0] = false
      break;
    case 2:
      if(document.getElementById("question2three").checked) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        if(questionfirstanswer[1]) {
          score++
        }
      } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
      }
      if(questionfirstanswer[1]) {
        totalanswered++
      }
      questionfirstanswer[1] = false
      break;
    case 3:
      if(document.getElementById("question3three").checked) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        if(questionfirstanswer[2]) {
          score++
        }
      } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
      }
      if(questionfirstanswer[2]) {
        totalanswered++
      }
      questionfirstanswer[2] = false
      break;
    case 4:
      if(document.getElementById("question4two").checked) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        if(questionfirstanswer[3]) {
          score++
        }
      } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
      }
      if(questionfirstanswer[3]) {
        totalanswered++
      }
      questionfirstanswer[3] = false
      break;
    case 5:
      if(document.getElementById("question5four").checked) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        if(questionfirstanswer[4]) {
          score++
        }
      } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";
      }

      if(questionfirstanswer[4]) {
        totalanswered++
      }
      questionfirstanswer[4] = false
      break;
    case 6:
      if(document.getElementById("question6one").checked) {
        document.getElementById("correct").style.display = "block";
        document.getElementById("incorrect").style.display = "none";
        if(questionfirstanswer[5]) {
          score++
        }
      } else {
        document.getElementById("incorrect").style.display = "block";
        document.getElementById("correct").style.display = "none";

      }

      if(questionfirstanswer[5]) {
        totalanswered++
      }
      questionfirstanswer[5] = false
      break;
  }
  document.getElementById("grade").innerHTML = "score: "+score+"/"+totalanswered;
  return false;
}

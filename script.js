var eightBallBtn = document.getElementById("magic-8-ball");
var questionInput = document.getElementById("question-inp");
var answerSpan = document.getElementById("answer");

eightBallBtn.addEventListener("click", answerQuestion);

function answerQuestion() {
  let question = questionInput.value;
  let answer = Math.floor(Math.random() * (6 - 1) + 1);

  if (question.toLowerCase() == `does a magic 8 ball actually work`) {
    answerSpan.innerHTML = `How dare you doubt me!`;
  } else if (question.toLowerCase() == `is javascript awesome`) {
    answerSpan.innerHTML = `Of Course!`;
  } else if (question.toLowerCase() == `lebron or jordan`) {
    answerSpan.innerHTML = `Obviously Lebron!`;
  } else if (question.toLowerCase() == `who will win the nba finals`) {
    let random = Math.floor(Math.random() * (8 - 1) + 1);
    console.log(random);
    if (random == 1) {
      answerSpan.innerHTML = `Boston Celtics!`;
    } else if (random == 2) {
      answerSpan.innerHTML = `Cleveland Cavaliers!`;
    } else if (random == 3) {
      answerSpan.innerHTML = `Indiana Pacers!`;
    } else if (random == 4) {
      answerSpan.innerHTML = `Dallas Mavericks!`;
    } else if (random == 5) {
      answerSpan.innerHTML = `Oklahoma City Thunder!`;
    } else if (random == 6) {
      answerSpan.innerHTML = `Minnesota Timberwolves!`;
    } else if (random == 7) {
      answerSpan.innerHTML = `Denver Nuggets!`;
    }
  } else if (answer == 1 && question.length > 0) {
    answerSpan.innerHTML = `Without a Doubt.`;
  } else if (answer == 2 && question.length > 0) {
    answerSpan.innerHTML = `As I see it, yes.`;
  } else if (answer == 3 && question.length > 0) {
    answerSpan.innerHTML = `Concentrate and ask again.`;
  } else if (answer == 4 && question.length > 0) {
    answerSpan.innerHTML = `Don't count on it.`;
  } else if (answer == 5 && question.length > 0) {
    answerSpan.innerHTML = `Outlook not so good.`;
  } else {
    answerSpan.innerHTML = `Please ask a question...`;
  }
}

console.log('magic 8 ball coming soon...')
//  add a function called "ask" that
//  chooses a random answer
//  and inserts it into the 
//  "answer" div
const answer = document.getElementById('answer');
const ask = document.querySelector('button');
const question = document.getElementById('question');
const more = document.querySelector('h2');
const qNa = document.querySelector('form');

const answers = [
   "./img/1itiscertain.png",
   "./img/2decidedlyso.png",
   "./img/3withoutadoubt.png",
   "./img/4yesdefinitely.png",
   "./img/5mayrelyonit",
   "./img/6asiseeityes.png",
   "./img/7mostlikely.png",
   "./img/8outlookgood.png",
   "./img/9yes.png",
   "./img/10signspointtoyes.png",
   "./img/11replyhazytryagain.png",
   "./img/12askagainlater.png",
   "./img/13betternottellunow.png",
   "./img/14cannotpredictnow.png",
   "./img/15concentrateaskagain.png",
   "./img/16dontcountonit.png",
   "./img/17myreplyisno.png",
   "./img/18mysourcessayno.png",
   "./img/19outlooknotsogood.png",
   "./img/20verydoubtful.png",
   "./img/blank.png"
];

ask.addEventListener('click', function() {
   if(question.value === ""){
      alert("Please ask a yes or no question.");
   } else {
      more.innerText="I HAVE SPOKEN!";
      question.innerText = question;
      qNa.style.fontColor = '#B9ACD0';
      ask.style.fontColor = 'blueviolet'
      answer.src=answers[Math.floor(Math.random()*21)];
      answer.classList.add('color-change');
   };
});

function clear() {
   document.getElementById('answer').value.reset();
}
answer.click(clear());

// help please with a reset function?!
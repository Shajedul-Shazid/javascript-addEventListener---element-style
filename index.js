const revealBtn = document.getElementById('reveal-btn')
const answerEl = document.getElementById("answer")
const hideBtn = document.getElementById("hide-btn")

revealBtn.addEventListener('click', function(){
     answerEl.style.display = "block"
     revealBtn.style.display = "none"
     hideBtn.style.display = "block"
})

hideBtn.addEventListener('click', function() {
    answerEl.style.display = "none"
    revealBtn.style.display = "block"
    hideBtn.style.display = "none"
    
})



/*
Challenge
1. When the button is clicked and the answer revealed, 
   change the background color to #68e1fd and text color
   to #1434A4 just in the "question" div.
   ⚠️ You will run into a problem with the background 
   color. See if you can find the solution by googling.
2. When the answer is revealed, make the button disappear.
*/
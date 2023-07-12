var time = 60
var questionEl = document.querySelector("#question");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var questions = [
    {
        question:"What is a car?",
        option1: "a cup",
        option2: "a desk",
        option3: "a meal",
        option4: "a vehicle",
        correctanswer: "a vehicle"
    },
    {
        question:"Which is a brand of car?",
        option1: "Pokemon",
        option2: "Mcdonalds",
        option3: "JcPenny",
        option4: "Ford",
        correctanswer: "Ford"
    }
]
var index = -1
function startquiz(){
    nextquestion()
}
function nextquestion(){
    index++
    if (index == questions.length){
        clearInterval(timer)
        if(time < 0) {
            time = 0
        }
        var score = time
        alert("end of quiz")
       var initial =  prompt("Enter your intials")
       document.querySelector("#quizsection").style = "display: none"
       document.querySelector("#hiscore").style = "display: block"
       var li = document.createElement("li")
       li.textContent = initial+": "+score
       document.querySelector("#scorelist").appendChild(li)
    } else {

    
    questionEl.textContent = questions[index].question
    button1.textContent = questions[index].option1
    button2.textContent = questions[index].option2
    button3.textContent = questions[index].option3
    button4.textContent = questions[index].option4}
}
document.querySelector("#startbtn").addEventListener("click", function(){
    console.log("start");
    document.querySelector("#startbtn").style = "display: none"
    index++
    questionEl.textContent = questions[index].question
    button1.textContent = questions[index].option1
    button2.textContent = questions[index].option2
    button3.textContent = questions[index].option3
    button4.textContent = questions[index].option4
    timer()
})
button1.addEventListener("click", wronganswer)
button2.addEventListener("click", wronganswer)
button3.addEventListener("click", wronganswer)
button4.addEventListener("click", nextquestion)

function timer(){
   var timer = setInterval(function(){
    time--
    document.querySelector("#timer").textContent = time
   },1000)
}

function wronganswer(){
    time = time-30
    nextquestion()

}
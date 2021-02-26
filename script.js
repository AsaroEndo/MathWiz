const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
var x = document.getElementById("myAudio"); 
var answer = 0;

function random_equation(){ 
  var val1 = Math.floor(Math.random() * 13); 
  var val2 = Math.floor(Math.random() * 13);
  var dummyAnswer1 = Math.floor(Math.random() * 10);
  var dummyAnswer2 = Math.floor(Math.random() * 10);
  var random = [];
  answer = eval(val1 + val2);
  
  document.getElementById("value1").innerHTML = val1; 
  document.getElementById("value2").innerHTML = val2; 

  var randomAnswers = [answer, dummyAnswer1, dummyAnswer2];

  for (var randomAnswers = [answer, dummyAnswer1, dummyAnswer2], i = randomAnswers.length; i--;){
    random.push(randomAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
  };

  option1.innerHTML = random[0];
  option2.innerHTML = random[1];
  option3.innerHTML = random[2]; 

};

option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){
      random_equation(); jump();
    }
    else{
      x.play();
    }
});
option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
      random_equation(); jump();
    }
    else{
      x.play();
    }
});
option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
      random_equation(); jump();
    }
    else{
      x.play();
    }
});

random_equation()


var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over");
        
		
        block.style.animation = "block 2s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
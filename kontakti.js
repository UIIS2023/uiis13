function updateCountdown() {
    const targetDate = new Date("2024-03-08T00:00:00");
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days} dana, ${hours} sati, ${minutes} minuta, ${seconds} sekundi`;

    if (timeDifference <= 0) {
        countdownElement.innerHTML = "Vreme je isteklo!";
    }
}

// Ažuriranje odbrojavanja svaku sekundu
setInterval(updateCountdown, 1000);
updateCountdown();


var questions = [
    {
      question: "Koliko često treba raditi tretman lica?",
      choices: ["Jednom sedmično", "Jednom mjesečno", "Jednom godišnje", "Svaki dan"],
      correctAnswer: 1
    },
    {
      question: "Na koliko sedmica se radi korekcija noktiju?",
      choices: ["Dvije", "Tri", "Četiri", "Pet"],
      correctAnswer: 2
    },
    {
        question: "Na koliko sedmica se radi korekcija Henna obrva?",
        choices: ["Dvije-tri", "Tri-četiri", "Četiri-pet", "Pet-sedam"],
        correctAnswer: 3
      },
      {
        question: "Koja je najstarija poznata tehnika manikira?",
        choices: ["Egipatska", "Francuska", "Japanska", "Kineska"],
        correctAnswer: 0
      },
      {
        question: "Koji je najčešči sastojak u većini kozmetičkih proizvoda?",
        choices: ["Ulje", "Parfem", "Voda", "Glicerin"],
        correctAnswer: 2
      },
      
    
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  // Funkcija za prikaz pitanja i odgovora
  function displayQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");
    var scoreElement = document.getElementById("score");
  
    questionElement.textContent = questions[currentQuestion].question;
  
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
      var choiceButton = choicesElement.getElementsByTagName("button")[i];
      choiceButton.textContent = questions[currentQuestion].choices[i];
    }
  
    scoreElement.textContent = "Rezultat: " + score;
  }
  
  // Funkcija za provjeru odgovora
  function checkAnswer(selectedAnswerIdx) {
    if (selectedAnswerIdx === questions[currentQuestion].correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      var quizContainer = document.getElementById("quiz-container");
      quizContainer.innerHTML = "<h2>Kviz je završen!</h2><h2>Rezultat: " + score + "</h2>";
    }
  }
  
  // Poziv funkcije za prikaz prvog pitanja
  displayQuestion();
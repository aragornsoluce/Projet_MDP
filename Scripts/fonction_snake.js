// Récupération du canvas et du contexte de dessin
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Taille d'une case (la grille)
const box = 20;

// Initialisation du serpent : un tableau d'objets représentant les cases
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box
};

// Direction initiale
let direction = "RIGHT";

// Création de la nourriture à une position aléatoire
let food = {
  x: Math.floor(Math.random() * 19 + 1) * box,
  y: Math.floor(Math.random() * 19 + 1) * box
};

// Score initial
let score = 0;

// Écoute des touches pour changer la direction
document.addEventListener("keydown", directionHandler);
function directionHandler(event) {
  if (event.keyCode === 37 && direction !== "RIGHT") {
    direction = "LEFT";
  } else if (event.keyCode === 38 && direction !== "DOWN") {
    direction = "UP";
  } else if (event.keyCode === 39 && direction !== "LEFT") {
    direction = "RIGHT";
  } else if (event.keyCode === 40 && direction !== "UP") {
    direction = "DOWN";
  }
}

// Fonction pour vérifier la collision entre la tête et le corps du serpent
function collision(newHead, array) {
  for (let i = 0; i < array.length; i++) {
    if (newHead.x === array[i].x && newHead.y === array[i].y) {
      return true;
    }
  }
  return false;
}

// Fonction principale de dessin et mise à jour du jeu
function draw() {
  // Efface le canvas pour laisser apparaître l'arrière-plan défini en CSS
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dessine le serpent
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "lime" : "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    
    // Bordure de chaque segment
    ctx.strokeStyle = "black";
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }
  
  // Dessine la nourriture
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
  
  // Position actuelle de la tête du serpent
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  
  // Met à jour la position en fonction de la direction
  if (direction === "LEFT") snakeX -= box;
  if (direction === "UP") snakeY -= box;
  if (direction === "RIGHT") snakeX += box;
  if (direction === "DOWN") snakeY += box;
  
  // Crée la nouvelle tête du serpent
  let newHead = {
    x: snakeX,
    y: snakeY
  };
  
  // Vérifie les collisions avec les murs ou le corps du serpent
  if (
    snakeX < 0 || snakeX >= canvas.width ||
    snakeY < 0 || snakeY >= canvas.height ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    saveScore(score);
    alert("Game Over ! Ton score : " + score);
    return;
  }
  
  // Ajoute la nouvelle tête au début du tableau
  snake.unshift(newHead);
  
  // Vérifie si le serpent a mangé la nourriture
  if (snakeX === food.x && snakeY === food.y) {
    score++;
    updateScoreDisplay();
    // Génère une nouvelle position pour la nourriture
    food = {
      x: Math.floor(Math.random() * 19 + 1) * box,
      y: Math.floor(Math.random() * 19 + 1) * box
    };
    // Le serpent grandit : ne retire pas le dernier segment
  } else {
    // Retire le dernier segment pour simuler le déplacement
    snake.pop();
  }
}

// Met à jour l'affichage du score
function updateScoreDisplay() {
  document.getElementById("scoreValue").textContent = score;
}

// Sauvegarde le score et met à jour le leaderboard (top 10)
function saveScore(newScore) {
  let scores = JSON.parse(localStorage.getItem("snakeScores")) || [];
  scores.push(newScore);
  // Tri décroissant
  scores.sort((a, b) => b - a);
  // Conserve les 10 meilleurs scores
  scores = scores.slice(0, 10);
  localStorage.setItem("snakeScores", JSON.stringify(scores));
  updateLeaderboard();
}

// Affiche le leaderboard en récupérant les scores depuis le localStorage
function updateLeaderboard() {
  let scores = JSON.parse(localStorage.getItem("snakeScores")) || [];
  const leaderboardElement = document.getElementById("leaderboard");
  leaderboardElement.innerHTML = "";
  
  scores.forEach(scoreValue => {
    const li = document.createElement("li");
    li.textContent = scoreValue;
    leaderboardElement.appendChild(li);
  });
}

// Lancement du jeu avec un intervalle de 100 ms
let game = setInterval(draw, 100);

// Met à jour le leaderboard dès le chargement
updateLeaderboard();

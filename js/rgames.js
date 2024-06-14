const gameContainer = document.querySelector(".game-container");

// fetch the json of rockstar games
fetch("http://localhost:3000/rstar")
  .then((data) => data.json())
  .then((myJsonData) => showRockstarGames(myJsonData));

  // create a card for all rockstar games from the json
function showRockstarGames(rockstarGames) {
  for (let i = 0; i < rockstarGames.length; i++) {
    const game = rockstarGames[i];
    gameContainer.innerHTML += `<div class="rgame">
      <h3>${game.title}</h3>
      <img src="${game.img}" alt="" srcset="">
      <h4>Release datum: ${game.releaseDate}</h4>
      ${game.description}
      <h3 class="price">${game.price}</h3>
    </div>`;
    console.log(rockstarGames);
  }
}

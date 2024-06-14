document.addEventListener('DOMContentLoaded', function() {
    console.log("test");

    let cardCnt = document.querySelector(".card-wrapper");

    //fetched de json data van de server 
    fetch('http://localhost:3000/switch-games')
      .then(data => data.json())
      .then(myJsonData => showSwitchGames(myJsonData));

    //function om de data van de json in een card te zetten met innerhtml
    function showSwitchGames(switchGames) {
        switchGames.forEach(game => {
            cardCnt.innerHTML += `
                <div class="nintendo-card">
                    <img src="${game.img}" class="nintendo-game" alt="game">
                    <h1>${game.title}</h1>
                    <h4>${game.releaseDate}</h4>
                    <div class="content">${game.price}<br><hr>${game.description}</div>
                </div>
            `;
            console.log(switchGames)
        });
    }
});
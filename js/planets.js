const planetsContainer = document.querySelector(".planets-container");

fetch('http://localhost:3000/planeten')
.then(response => response.json())
.then(JsonData => showPlanetsCards(JsonData));

function showPlanetsCards(planetsCard) {
    	for (let i = 0; i < planetsCard.length; i++) {
            const planetJson = planetsCard[i];
            console.log(planetJson)
            planetsContainer.innerHTML += `<div class="scards">
            <h3>${planetJson.title}</h3>
            <img src="${planetJson.img}" alt="" srcset="">
            <article>${planetJson.description}</article>
        </div>`;
        }
        
    };



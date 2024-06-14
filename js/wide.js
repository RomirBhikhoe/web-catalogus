const wideContainer = document.querySelector(".wide-container");

fetch('http://localhost:3000/wide')
.then(response => response.json())
.then(JsonData => showWideCards(JsonData));

function showWideCards(wideCard) {
    	for (let i = 0; i < wideCard.length; i++) {
            const wideJson = wideCard[i];
            console.log(wideJson)
            wideContainer.innerHTML += `<div class="scards">
            <h3>${wideJson.title}</h3>
            <img src="${wideJson.img}" alt="" srcset="">
            <article>${wideJson.description}</article>
        </div>`;
        }
        
    };



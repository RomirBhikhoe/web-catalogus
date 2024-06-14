const deepContainer = document.querySelector(".deep-container");

fetch('http://localhost:3000/deep')
.then(response => response.json())
.then(JsonData => showDeepCards(JsonData));

function showDeepCards(deepCard) {
    	for (let i = 0; i < deepCard.length; i++) {
            const deepJson = deepCard[i];
            console.log(deepJson)
            deepContainer.innerHTML += `<div class="scards">
            <h3>${deepJson.title}</h3>
            <img src="${deepJson.img}" alt="" srcset="">
            <article>${deepJson.description}</article>
        </div>`;
        }
        
    };



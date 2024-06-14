console.log("test");

const cardCnt = document.querySelector(".card-container");

fetch('http://localhost:3000/contact')
.then(data => data.json())
.then(myJsonData => showContactInfo(myJsonData));

function showContactInfo(contact) {
    console.log(contact);
}
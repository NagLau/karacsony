let selectedGift = null; //nullázás
let customGift = null; // saját ajándék tárolása

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; //kártya kiemelése ráhúzásra
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';  //kártya eredeti mérete amint elhagyja az egér
    });





    card.addEventListener('click', () => {
        selectedGift = card.querySelector('p1').textContent; //kártyára való rányomás, elemek/adatok elmentése(p1)
        customGift = null; // saját ajándék törlése
        console.log(`Kiválasztott ajándék: ${selectedGift}`);
    }); 
    });





document.getElementById('mutasd').addEventListener('click', () => {
    const resultElement = document.getElementById('result');

    if (customGift) {
        resultElement.textContent = `A választott ajándék: ${customGift}`;
    } else if (selectedGift) {
        resultElement.textContent = `A választott ajándék: ${selectedGift}`;
    } else {
        resultElement.textContent = 'Válassz egy ajándékot, vagy adj hozzá egy sajátot!';
    }
});




document.getElementById('adjHozza').addEventListener('click', () => { 
    // saját ajándék hozzáadása
    const inputField = document.getElementById('inputField');
    const userInput = inputField.value.trim(); 
    if (userInput) {
        customGift = userInput; // saját ajándék mentése
        selectedGift = null; // kártyás ajándék törlése
        inputField.value = ''; 
        console.log(`Hozzáadott egyéni ajándék: ${customGift}`);
    } else {
       
    }
});


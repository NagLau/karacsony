let selectedGift = null;
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.style.borderColor = 'white');

        selectedGift = card.querySelector('p1').textContent;


        console.log(`Kiválasztott ajándék: ${selectedGift}`);
    });
});

document.getElementById('showSelection').addEventListener('click', () => {
    const resultElement = document.getElementById('result');
    if (selectedGift) {
        resultElement.textContent = `A választott ajándék: ${selectedGift}`;
    } else {
        resultElement.textContent = 'Válassz egy ajándékot!';
    }
});

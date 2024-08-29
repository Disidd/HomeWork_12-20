cards = [];
suits = ['clubs', 'spades', 'diamonds', 'hearts'];
values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J','Q','K','T'];

for (i = 0; i < values.length; i++) {
    for (j = 0; j < suits.length; j++) {
        if (!isNaN(values[i])){
            cardInfo = (`<div class="card">
                <div class='card_info'>${values[i]}
                    <img src="images/${suits[j]}.svg" alt="${suits[j]}">
                </div>
                <div class='card_info'>${values[i]}
                    <img src="images/${suits[j]}.svg" alt="${suits[j]}">
                </div>
            </div>`);   
        } else {cardImg = (values[i] === 'J') ? 'J' : (values[i] === 'Q') ? 'Q' : (values[i] === 'K') ? 'K' : suits[j];
            cardInfo = (`<div class="card">
                <div class='card_info'>${values[i]}
                    <img src="images/${suits[j]}.svg" alt="${suits[j]}">
                </div>
                <img class="card--person" src="images/${cardImg}.svg" alt="${cardImg}">
                <div class='card_info'>${values[i]}
                    <img src="images/${suits[j]}.svg" alt="${suits[j]}">
                </div>
            </div>`);
        }
        cards.push(cardInfo);   
    }
}
document.write(`<div class='wrapper'>${cards.join('')}</div>`);


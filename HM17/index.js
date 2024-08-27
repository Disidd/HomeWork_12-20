cards = [];
suits = ['clubs', 'spades', 'diamonds', 'hearts'];
values = ['2', '3', '4', '5', '6', '7', '8', '9', '10',];
cardImg = ['jack','queen','king','t']

for (i = 0; i < values.length; i++) {
    for (j = 0; j < suits.length; j++) {
        // console.log(values[i],suits[j]);
            cards.push(`<div class="card">
                <div class='card_info>${values[i]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                <div class='card_info>${values[i]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
            </div>`);
    }
}

for (i = 0; i < cardImg.length; i++) {
    for (j = 0; j < suits.length; j++) {
            cards.push(`<div class="card card--person">
                <div class='card_info>${cardImg[i]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                <div class='card_info>${cardImg[i]}<img src="images/${suits[j]}.svg" alt="${suits[j]}"></div>
                <img class="person" src="images/${cardImg[i]}.svg" alt="${cardImg[i]}">
            </div>`);
            if (cardImg === 'T') {
                cards.push(`<div class="card card--person">
                    <img class="person" src="images/${suits[i]}.svg" alt="${suits[i]}">
                </div>`);
        }

    }
}

document.write (`<div class='wrapper'>${cards.join('')}</div>`)




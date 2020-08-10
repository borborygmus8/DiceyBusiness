const generateDie = document.getElementById('generate-die'),
    rollDice = document.getElementById('roll-dice'),
    sumDice = document.getElementById('sum-dice'),
    main = document.getElementById('main')
    dice = [];

class Die {
    constructor() {
        this.value;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        this.div.textContent = this.value;
        main.appendChild(this.div);
        dice.push(this);
        this.div.addEventListener('click', () => this.roll());
        this.div.addEventListener('dblclick', () => {
            dice.splice(dice.indexOf(this), 1);
            this.div.style.display = 'none';
        });
    }

    roll() {
        const randNum = Math.floor(Math.random() * 6) + 1;
        this.value = randNum;
        this.div.textContent = this.value;
    }
}

generateDie.addEventListener('click', () => {
    new Die();
});

rollDice.addEventListener('click', () => {
    dice.forEach(die => die.roll());
});

sumDice.addEventListener('click', () => {
    let sum = 0;
    dice.forEach(die => sum += die.value);
    alert(`The sum of the dice is ${sum}`);
});
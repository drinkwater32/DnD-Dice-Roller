// app.js
let selectedDieType = '';
let selectedRollType = '';

document.addEventListener('DOMContentLoaded', function () {
    const diceTypes = document.querySelectorAll('.dice-type');
    const resultMessage = document.querySelector('.result-message');
    const rollType = document.getElementById('roll-type');
    const rollButton = document.getElementById('roll-button');

    rollButton.disabled = true;

    diceTypes.forEach(dice => {
        dice.addEventListener('click', function () {
            selectedDieType = this.getAttribute('data-die');
            resultMessage.textContent = `You've selected ${selectedDieType}`;
            rollButton.disabled = false;
        });
    });

    rollButton.addEventListener('click', function () {
        selectedRollType = rollType.value; // Get the selected roll type

        if (selectedDieType) {
            let rollResult;
            let roll1 = Math.floor(Math.random() * selectedDieType.slice(1)) + 1;
            let roll2 = Math.floor(Math.random() * selectedDieType.slice(1)) + 1;

            if (selectedRollType === 'advantage') {
                rollResult = Math.max(roll1, roll2);
            } else if (selectedRollType === 'disadvantage') {
                rollResult = Math.min(roll1, roll2);
            } else {
                rollResult = roll1; // For standard roll
            }

            resultMessage.textContent = `You rolled a ${selectedDieType} with ${selectedRollType} and got: ${rollResult}`;
        } else {
            resultMessage.textContent = 'Please choose a die first.';
        }
    });
});
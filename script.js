const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const result = document.getElementById('result');
const rollButton = document.getElementById('rollDice');

rollButton.addEventListener('click', () => {
  rollButton.disabled = true; // Disable the button during the rolling animation
  result.textContent = "Rolling...";

  // Simulate the dice rolling animation
  let rollInterval = setInterval(() => {
    dice1.textContent = getRandomDiceFace();
    dice2.textContent = getRandomDiceFace();
  }, 100);

  // Stop the rolling after 2 seconds and display the result
  setTimeout(() => {
    clearInterval(rollInterval);
    const finalDice1 = getRandomDiceFace();
    const finalDice2 = getRandomDiceFace();
    dice1.textContent = finalDice1;
    dice2.textContent = finalDice2;
    displayResult(finalDice1, finalDice2);
    rollButton.disabled = false; // Re-enable the button
  }, 2000);
});

function getRandomDiceFace() {
  const diceFaces = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
  return diceFaces[Math.floor(Math.random() * diceFaces.length)];
}

function displayResult(dice1, dice2) {
  const total = parseInt(dice1) + parseInt(dice2);
  result.textContent = `You rolled: ${dice1} + ${dice2} = ${total}`;
}

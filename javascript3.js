const secretNumber = 7;
const userGuess = prompt("Угадайте число от 1 до 10:");

if (userGuess == secretNumber) {
    console.log("Вы угадали");
} else {
    console.log("Попробуйте ещё раз!");
}

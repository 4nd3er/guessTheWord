const attemps = document.querySelector('.attemps');
const firstLetter = document.querySelector('.firstLetter');

const words = [
    "cat",
    "dog",
    "bird",
    "fish",
    "sun",
    "moon",
    "star",
    "tree",
    "rock",
    "rain",
    "car",
    "bus",
    "book",
    "pen",
    "apple",
    "ball",
    "hat",
    "shoe",
    "box",
    "cup",
    "house",
    "table",
    "chair",
    "bread",
    "milk",
    "water",
    "phone",
    "key",
    "light",
    "door"
];
let reaminingAttemps = 3;
let addLetter = 0;

function newWord() {
    return words[Math.floor(Math.random() * words.length)];
};

let randomWord = newWord();
firstLetter.textContent = randomWord[0];
function submitWord(event) {
    event.preventDefault();
    const TypedWord = event.target.word.value.toLowerCase().trim();
    if (TypedWord == '') {
        return;
    }
    if (TypedWord === randomWord) {
        alert('You win!! The word is: ' + randomWord);
        event.target.word.value = '';
        randomWord = newWord();
        attemps.textContent = 3;
        reaminingAttemps = 3;
        addLetter = 0;
        firstLetter.textContent = randomWord[0];
    } else {
        reaminingAttemps -= 1;
        attemps.textContent = reaminingAttemps;
        addLetter += 1;
        firstLetter.textContent += randomWord[addLetter];
    }

    if (reaminingAttemps == 0) {
        alert('You have lost The word is: ' + randomWord);
        randomWord = newWord();
        attemps.textContent = 3;
        reaminingAttemps = 3;
        addLetter = 0;
        firstLetter.textContent = randomWord[0];
    }
};

document.querySelector('form').addEventListener('submit', submitWord);
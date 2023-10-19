//How to get a random number within a given range.

// const min = 10;
// const max = 20;

const numBetweenRange = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

numBetweenRange(15, 55)
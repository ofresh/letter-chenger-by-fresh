function swapAWithB(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Iterate through each word and swap 'A' with 'B'
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].replace(/a/g, 'B').replace(/A/g, 'B');
    }

    // Join the modified words back into a single string
    return words.join(' ');
}

// Example usage:
let sentence = "An apple a day keeps the doctor away";
let swappedSentence = swapAWithB(sentence);
console.log(swappedSentence);
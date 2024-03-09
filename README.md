Certainly! Here's a simple README.md file for the open-source project:

```markdown
# SwapAWithB

SwapAWithB is a lightweight JavaScript library that provides a function to swap occurrences of the letter 'A' with the letter 'B' in each word of a given string.

## Installation

You can install SwapAWithB via npm:

```bash
npm install swap-a-with-b
```

Or include the script directly in your HTML:

```html
<script src="swap-a-with-b.js"></script>
```

## Usage

### Using npm

```javascript
const swapAWithB = require('swap-a-with-b');

let sentence = "An apple a day keeps the doctor away";
let swappedSentence = swapAWithB(sentence);
console.log(swappedSentence);
```

### Using directly in HTML

```html
<script src="swap-a-with-b.js"></script>
<script>
  let sentence = "An apple a day keeps the doctor away";
  let swappedSentence = swapAWithB(sentence);
  console.log(swappedSentence);
</script>
```

## API

### swapAWithB(str)

- `str` : The input string containing words to be processed.

Returns: The input string with all occurrences of 'A' replaced with 'B' in each word.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
```

This README file provides installation instructions, usage examples for both npm and direct inclusion in HTML, information about the function provided by the library, licensing details, and guidance for contributing to the project.
# snicksnack

Generates an array of random words or sentences from [kelly-lists](https://www.npmjs.com/package/kelly-lists). Random selection follows a Zipfian distribution and limits words to a single occurence.

## usage

```javascript
const snicksnack = require(`snicksnack`)

const randomWords = snicksnack.words(2)
const randomSentences = snicksnack.sentences(3)
```

## api

### `snicksnack([configuration])`

Returns an instance of snicksnack with a custom configuration. `configuration` is an &lt;Object&gt; and has to contain the following keys:

```javascript
{
  sentenceLength: {
    min: 7,
    max: 26
  },
  language: `swedish`
}
```

### `snicksnack.words(count)`

Returns an &lt;Array&gt; of `count` words.

### `snicksnack.sentences(count)`

Returns an &lt;Array&gt; of `count` sentences.

### `snicksnack.defaults`

&lt;Object&gt; - default configuration.

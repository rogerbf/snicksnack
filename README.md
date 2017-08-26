# snicksnack

Generates an array of random words or sentences choosen from word lists provided by the [kelly-lists](https://www.npmjs.com/package/kelly-lists) module. Random selection adheres to a zipfian distribution with the addition of not icluding a word more than once.

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

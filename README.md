# snicksnack

Generates an array of random sentences or words from the [Swedish Kelly-list](https://spraakbanken.gu.se/eng/kelly) containing 8425 of the most frequent lemmas in the Swedish language.

## usage

```javascript
const snicksnack = require(`snicksnack`)

const randomWords = snicksnack.words(2)
const randomSentences = snicksnack.sentences(3)
```

## api

### `snicksnack(configuration)`

Returns an instance of snicksnack with a custom configuration. `configuration` is an &lt;Object&gt; and has to contain the following keys:

```javascript
{
  sentenceLength: {
    min: 7,
    max: 26
  },
  wordList: [ `den`, `sista` ]
}
```

### `snicksnack.words(count)`

Returns an &lt;Array&gt; of `count` words.

### `snicksnack.sentences(count)`

Returns an &lt;Array&gt; of `count` sentences.

### `snicksnack.defaults`

&lt;Object&gt; - default configuration.

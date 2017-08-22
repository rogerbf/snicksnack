module.exports = (state, { random, wordList } = state) => Object.assign(
  {},
  state,
  {
    words: count => {
      const pickWords = (
        collection = [ ...wordList ],
        selection = []
      ) => {
        if (selection.length === count) {
          return selection
        } else {
          const next = collection[random(collection) - 1]
          const updatedCollection = collection.filter(word => word !== next)
          return pickWords(
            updatedCollection.length > 0 ? updatedCollection : [ ...wordList ],
            [ ...selection, next ]
          )
        }
      }
      return pickWords()
    }
  }
)

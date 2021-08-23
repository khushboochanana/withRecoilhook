import { useState, useMemo } from 'react'
// Usage
export default function User () {
  // State for our counter
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)
  const words = ['hey', 'this', 'this', 'is', 'cool']
  const word = words[wordIndex]
  const computeLetterCount = word => {
    let i = 0
    console.log('>>comutee mee')
    while (i < 1000000000) i++
    return word.length
  }
  const letterCount = useMemo(() => {
    console.log('>inside memo')
    computeLetterCount(word)
  }, [word])
  // const letterCount = computeLetterCount(word);
  return (
    <div style={{ padding: '15px' }}>
      <h2>Compute number of letters (slow 🐌)</h2>
      <p>
        "{word}" has {letterCount} letters
      </p>
      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1
          setWordIndex(next)
        }}
      >
        Next word
      </button>
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

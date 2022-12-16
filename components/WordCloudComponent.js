import React, { useState } from 'react'
import { TagCloud } from 'react-tagcloud'
import {
  Controls,
  WordCloud
} from "../styles/dashBoard.module.scss";

const defaultData = [
  { value: 'jQuery', count: 5 },
  { value: 'MongoDB', count: 50 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 99 },
  { value: 'Nodejs', count: 67 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 99 },
  { value: 'Webpack', count: 19 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 45 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 2 },
  { value: 'React Native', count: 76 },
  { value: 'Angular.js', count: 22 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 80 },
  { value: 'NPM', count: 11 },
]

const SimpleCloud = () => {
  const [minSize, setMinSize] = useState(5)
  const [maxSize, setMaxSize] = useState(100)
  const [data, setData] = useState(defaultData)
  const [randomColor, setRandomColor] = useState(true)
  const [shuffle, setShuffle] = useState(true)
  return (
    <div className={Controls}>
      <div >
        <div>
          <span>Min</span>
          <input
            type="number"
            min={0}
            value={minSize}
            onChange={(e) => setMinSize(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <span>Max</span>
          <input
            type="number"
            min={0}
            value={maxSize}
            onChange={(e) => setMaxSize(parseInt(e.target.value, 10))}
          />
        </div>
        <div>
          <span>Shuffle</span>
          <input
            type="checkbox"
            checked={shuffle}
            onChange={() => setShuffle(!shuffle)}
          />
        </div>
        <div>
          <span>Color</span>
          <input
            type="checkbox"
            checked={randomColor}
            onChange={() => setRandomColor(!randomColor)}
          />
        </div>
        <div>
          <button onClick={() => setData(data.slice(0, -1))}>Pop</button>
        </div>
      </div>
      <TagCloud
        minSize={minSize}
        maxSize={maxSize}
        tags={data}
        shuffle={shuffle}
        disableRandomColor={!randomColor}
        // className={WordCloud}
        onClick={(tag) => {
          const value = prompt('Edit tag value', tag.value)
          if (value == null) {
            return
          }
          const newTag = { value, count: tag.count }
          const newData = data.map((t) => {
            if (t.value === tag.value) {
              return newTag
            }
            return t
          })
          setData(newData)
        }}
      />
    </div>
  )
}

export default SimpleCloud
import "./App.css";
import {useState, useEffect} from 'react'
import TextTransition, {presets} from "react-text-transition";
const Text = [
  'Happy',
  'BirthDay',
  'To💗 ME🎂  '
]
const colorText = [
  '#e55',
  '#40ade5',
  '#ee6', 
  '#b22222',
  '#000080',
  '#ff1493',
  '#7fffd4',
  '#ffd700',
  '#003366'
]
function App() {
  const [idx, setIdx] = useState(0);

  const randomColor = () => {
    return Math.floor(Math.random() * colorText.length)
  }
  useEffect(() => {
    const timing = setInterval(() => {
      setIdx(idx => idx + 1)
    }, 3000);
    return ( ) => clearInterval(timing) //clean up function mout

  }, [idx])
  return (
    <div className="App">
      <TextTransition text={Text[idx % Text.length]} springConfig={presets.molasses} className="color" direction="down" noOverflow inline delay={1} style={{color: colorText[randomColor()]}}/>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  }

  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const calculate = () => {
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("Error")
    }
  }
  return (
    <div className='calc'>
      <input type='text' placeholder='0' id='answer' value={result} />


      <input type='button' value="Clear" className='button long highlight' onClick={clear} />
      <input type='button' value="C" className='button highlight' onClick={backspace} />
      <input type='button' value='/' className='button highlight' onClick={handleClick} />

      <input type='button' value='7' className='button' onClick={handleClick} />
      <input type='button' value='8' className='button' onClick={handleClick} />
      <input type='button' value='9' className='button' onClick={handleClick} />
      <input type='button' value='*' className='button highlight' onClick={handleClick} />

      <input type='button' value='4' className='button' onClick={handleClick} />
      <input type='button' value='5' className='button' onClick={handleClick} />
      <input type='button' value='6' className='button' onClick={handleClick} />
      <input type='button' value='-' className='button highlight' onClick={handleClick} />

      <input type='button' value='1' className='button' onClick={handleClick} />
      <input type='button' value='2' className='button' onClick={handleClick} />
      <input type='button' value='3' className='button' onClick={handleClick} />
      <input type='button' value='+' className='button highlight' onClick={handleClick} />

      <input type='button' value='0' className='button' onClick={handleClick} />
      <input type='button' value='.' className='button' onClick={handleClick} />
      <input type='button' value="=" className='button long highlight' onClick={calculate}/>





      
    </div>
  )
}

export default App
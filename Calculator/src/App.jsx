import React from 'react';
import './App.css';
const App = () => {
  return (
    <div className='calc'>
      <h1>Calculator</h1>
      <input type='text' placeholder='0' id='answer' />

      <input type='button' value="C" className='button' />
      <input type='button' value='/' className='button' />
      <input type='button' value='*' className='button' />
      <input type='button' value='-' className='button' />

      <input type='button' value='7' className='button' />
      <input type='button' value='8' className='button' />
      <input type='button' value='9' className='button' />
      <input type='button' value='+' className='button button1' />


      <input type='button' value='4' className='button' />
      <input type='button' value='5' className='button' />
      <input type='button' value='6' className='button' />


      <input type='button' value='1' className='button' />
      <input type='button' value='2' className='button' />
      <input type='button' value='3' className='button' />
      <input type='button' value="=" className='button button1' />


      <input type='button' value='0' className='button' />
      <input type='button' value='.' className='button' />



      
    </div>
  )
}

export default App
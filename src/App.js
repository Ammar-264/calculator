import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result,setResult] = useState('');
 
  function backspace(){
    setResult(result.slice(0,-1))
  }
  function calculate(){
    try{
      setResult(eval(result))

    }
    catch{
      setResult('ERROR')
    }
  }
  return (
    <div className='main'>
    <h2>CALCULATOR APP</h2>
      <div className='container'>
        <div className='input'>
          <input type='text' disabled  value={result}/>
        </div>
        <div className='keypad'>
          <button id='clear' className='highlight' onClick={()=>setResult('')}>Clear</button>
          <button className='highlight' onClick={backspace}>C</button>
          <button value='/' onClick={(e)=>setResult(result.concat(e.target.value))} className='highlight'>&divide;</button>
          <button value='7' onClick={(e)=>setResult(result.concat(e.target.value))}>7</button>
          <button value='8' onClick={(e)=>setResult(result.concat(e.target.value))}>8</button>
          <button value='9' onClick={(e)=>setResult(result.concat(e.target.value))}>9</button>
          <button value='*' onClick={(e)=>setResult(result.concat(e.target.value))} className='highlight'>&times;</button>
          <button value='4' onClick={(e)=>setResult(result.concat(e.target.value))}>4</button>
          <button value='5' onClick={(e)=>setResult(result.concat(e.target.value))}>5</button>
          <button value='6' onClick={(e)=>setResult(result.concat(e.target.value))}>6</button>
          <button value='+' onClick={(e)=>setResult(result.concat(e.target.value))} className='highlight'>+</button>
          <button value='1' onClick={(e)=>setResult(result.concat(e.target.value))}>1</button>
          <button value='2' onClick={(e)=>setResult(result.concat(e.target.value))}>2</button>
          <button value='3' onClick={(e)=>setResult(result.concat(e.target.value))}>3</button>
          <button value='-' onClick={(e)=>setResult(result.concat(e.target.value))} className='highlight'>-</button>
          <button value='0' onClick={(e)=>setResult(result.concat(e.target.value))}>0</button>
          <button value='.' onClick={(e)=>setResult(result.concat(e.target.value))} className='highlight'>.</button>
          <button className='highlight' onClick={calculate} id='calculate'>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Inputform from './Inputform';
import Btn from './Btn';

export default function Home() {
  //state assigning
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  //onchange functions to set weight and height
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault()
    
    let bmi = (weight / (height * height * 0.3048 * 0.3048))
    setBmi(bmi.toFixed(2))
  
    // Logic for message
    if (bmi <= 18.4) {
      setMessage('You are under weight')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage('You are healthy weight')
    } else {
      setMessage('You are over weight')
    }
    setWeight(0);
    setHeight(0);
  }

  //reload page
  function reload() {
    window.location.reload();
  }

  const style = {
    backgroundColor: 'rgb(243, 244, 246)',
    color : 'black'
  }

  return (
    <>
      <form onSubmit={calcBmi}>
        <Inputform labelname={"Weight (kgs)"} value={weight} onChange={handleWeightChange} />
        <Inputform labelname={"Height (foot)"} value={height} onChange={handleHeightChange} />
        <Btn label={"Submit"} type={'submit'} />
        <Btn label={"Reset"}  onClick={reload} type={'button'} style={style} />
        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <h2>{message}</h2>
        </div>      
      </form>
    </>
  );
}
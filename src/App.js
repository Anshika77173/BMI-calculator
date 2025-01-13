import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const[weight,setweight]=useState(0);
  const[height,setheight]=useState(0);
const[bmi,setbmi]=useState('');
const[message,setmessage]=useState('');
// logic 
let calbmi=(e)=>{
 e.preventDefault();
  if(weight===0 || height===0){
    alert("please enter a valid weight and height")
  }
  else{
    let bmi=(weight/(height*height)*703);
    setbmi(bmi.toFixed(1));
    // crerate logic for message
    if(bmi<25){
      setmessage("you are underweight");
    }
    else if(bmi>=25 && bmi<30){
      setmessage("you are a healthy weight");
    }
    else{
      setmessage("you are overweight"); 
    }
  }

}
let reload=()=>{
    window.location.reload()
}





  return (
    <div className="App">
      <div className="container">
      <h2>BMI Calculator</h2>
        <form onSubmit={calbmi}>
          <div>
            <label htmlFor="weight">Weight(lbs)</label>
            <input type="text" placeholder="enter weight value"
            value={weight }
              onChange={(e)=> setweight(e.target.value)}
            />

          </div>
          <div>
            <label htmlFor="height">Height(In)</label>
            <input type="text" placeholder="enter height value"
            value={height}
            onChange={(e)=> setheight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
           <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

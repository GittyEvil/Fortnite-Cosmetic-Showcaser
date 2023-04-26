import './App.css';
import React, { useState, useEffect } from 'react';
import BodyContainer from './BodyContainer/bodyContainer';


//const API_KEY = process.env.REACT_APP_API_KEY;

 function App() {
  const [cosmetic, setCosmetics] = useState([]);
  useEffect(()=>{
    async function FetchData() {
      const response = await fetch("https://fortnite-api.com/v2/cosmetics/br");
      const data = await response.json();
      setCosmetics(data)
    }
    FetchData()

  },[])
  /*
  cosmetic.map((list,index)=> {
    //<li key={index}>{list.type.displayValue}></li>
  })
  */
  console.log(cosmetic)
  return (
    <div className="App">
      <h1>Cosmetics showcaser</h1>
      <BodyContainer/>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import BodyContainer from './BodyContainer/bodyContainer';


//const API_KEY = process.env.REACT_APP_API_KEY;

 function App() {
  const [cosmetic, setCosmetics] = useState({});
  useEffect(()=>{
    async function FetchData() {
      const response = await fetch("https://fortnite-api.com/v2/cosmetics/br");
      const data = await response.json();
      setCosmetics(data.data.slice(0, 7881)) //.data.slice(0, 100) skär bara ner hur mång items den ska displaya
    }
    FetchData()
    
  },[])
  
  console.log(cosmetic)
  
  if (!Array.isArray(cosmetic)) {
    return <p>No cosmetics found</p>;
  }
  
  return (
    <div className="App">
      <h1 style={{color:"white"}}>Cosmetics showcaser</h1>
      <BodyContainer cosmetic={cosmetic}/>
      {/* .map funktionen nedan displayar just nu bara bilderna */ }
      
    </div>
  );
}


export default App;
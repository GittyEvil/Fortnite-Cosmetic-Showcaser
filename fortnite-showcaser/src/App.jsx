import './App.css';
import React, { useState, useEffect } from 'react';



const API_KEY = process.env.REACT_APP_API_KEY;

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
  console.log(cosmetic)
  return (
    <div className="App">
      <h1>Cosmetics showcaser</h1>
      
    </div>
  );
}

export default App;

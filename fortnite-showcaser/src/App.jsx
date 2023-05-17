import './App.css';
import React, { useState, useEffect } from 'react';
import BodyContainer from './BodyContainer/bodyContainer';
//"huvud komponenten"
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
  //iffal listan är tom och api inte funkar så visas meddelandet
  if (!Array.isArray(cosmetic)) {
    return <p>No cosmetics found</p>;
  }
  return (
    <div className="App">
      <h1 style={{color:"white"}}>Cosmetics showcaser</h1>
      {/*kroppen av hemsidan*/}
      <BodyContainer cosmetic={cosmetic}/>
    </div>
  );
}


export default App;
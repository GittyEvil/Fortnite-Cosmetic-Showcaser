import { useEffect, useState } from 'react';
import './bodyContainer.css';
import filter from 'jade/lib/filters';

function Boxes(props) {
  return (
    <div className='display'>
      <a href="#">{props.title}</a>
    </div>
  ) 
}

function ItemLister({cosmetic}) {
  return (
    <div className='ItemList'>
      {cosmetic.map((item, index) => (
        <div key={index}>
          {/*<h3>{item.name}</h3> */}
          <img className='imgstyler' style={{width:"100px"}} src={item.images.icon} />
        </div>
      ))}
    </div>
  )
}

function BodyContainer({ cosmetic }) {
    {/*detta hanterar sidorna och hur mycket items som visas på sidan*/}
    {/*use state är det som gör att sidan/flikarna uppdaterar och sedan visar ny info*/}
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCosmetic, setFilteredCosmetic] = useState(cosmetic)
  const [filterValue, setFilterValue] = useState("")

   useEffect(() => {
     var result =null;
    if(filterValue == "") {
      result = cosmetic;
      setFilteredCosmetic(result)
    } else{
      const result = cosmetic.filter(cosmetic => cosmetic.type.displayValue == filterValue)
      setFilteredCosmetic(result)
    }
    console.log(filteredCosmetic)
  }, [filterValue])

  const itemsPerPage = 105;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const totalPages = Math.ceil(filteredCosmetic.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  return(
    <div className="container">
      <div className="navcontainer">
        {/*temporär för sorting system*/}
        <Boxes title="Backbling"/>
        <Boxes title="Pickaxe"/>
        <Boxes title="Skin"/>
        <Boxes title="Glider"/>
        {/*dropdown*/}
        <div className='dropdown'>
          <select name="Filter" id="filter" onChange={(e) => {
            setFilterValue(e.target.value)
          }}>
            <option value="" selected>Default</option>
            <option value="Glider">Glider</option>
            <option value="Outfit">Outfit</option>
            <option value="Back Bling">Back Bling</option>
            <option value="Harvesting Tool">Harvesting Tool</option>
          </select>
        </div>
        {/*searchbaren, ska göra så man kan söka efter ett visst item senare*/}
        <div className='searchbar'>
          <input className='search' type="text"placeholder="Search here" onChange={(e) => {
            console.log(e.target.value);
          }}/>
          {/*när knappen trycks ska det man sökt komma upp(föremålet från api)*/}
          <button className='button1'>Search</button>
        </div>
      </div>

      {/*visar alla items*/}
      <ItemLister cosmetic={filteredCosmetic.slice(firstIndex, lastIndex)} />
      
      {/*pagination, detta är det som gör att man kan skrolla och byta "sida" och inte behöver få sidan att lagga*/}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button id='button' key={index} className={`page ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  )
}

export default BodyContainer;
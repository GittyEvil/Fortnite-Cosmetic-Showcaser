import { useEffect, useState } from 'react';
import './bodyContainer.css';

//alla items som mappas(visas) upp och hamnar i containern
function ItemLister({ cosmetic }) {
  return (
    <div className='ItemList'>
      {cosmetic.map((item, index) => (
        <div key={index}>
          <img className='imgstyler' style={{ width: "100px" }} src={item.images.icon} />
        </div>
      ))}
    </div>
  )
}
//pagination, hanterar alla items via sidor på ett snygg sätt
function Pagination({totalPages,currentPage,handlePageChange}) {
  return(
    <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            id='button'
            key={index}
            className={`page ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)
          }>{index + 1}</button>
        ))}
      </div>
  )
}
//själva containern som håller allt
function BodyContainer({ cosmetic }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredCosmetic, setFilteredCosmetic] = useState(cosmetic)
  const [filterValue, setFilterValue] = useState("")
  const [FilterSearch, setFilterSearch] = useState("")

  useEffect(() => {
    var result = null;
    if (filterValue === "") {
      result = cosmetic;
      setFilteredCosmetic(result)
    } else {
      const result = cosmetic.filter(cosmetic => cosmetic.type.displayValue === filterValue)
      setFilteredCosmetic(result)
    }
    console.log(filteredCosmetic)
  }, [filterValue])

  useEffect(() => {
    //filtrerar vad man söker efter
    const filtered = cosmetic.filter(cosmetic => cosmetic.name.toLowerCase().includes(FilterSearch.toLowerCase()));
    setFilteredCosmetic(filtered);
  }, [FilterSearch]);

  //för variabler
  const itemsPerPage = 105;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const totalPages = Math.ceil(filteredCosmetic.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  return (
    <div className="container">
      <div className="navcontainer">

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
            <option value="Wrap">Wrap</option>
            <option value="Spray">Spray</option>
            <option value="Loading Screen">Loading Screen</option>
            <option value="Spray">Spray</option>
            <option value="Emote">Emote</option>
          </select>
        </div>
        {/*searchbaren, ska göra så man kan söka efter ett visst item senare*/}
        <div className='searchbar'>
          <input className='search' type="text" placeholder="Search here" onChange={(e) => {
            setFilterSearch(e.target.value)
          }} />
        </div>
      </div>

      {/*visar alla items*/}
      <ItemLister cosmetic={filteredCosmetic.slice(firstIndex, lastIndex)} />

      {/*pagination*/}
      <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  )
}

export default BodyContainer;
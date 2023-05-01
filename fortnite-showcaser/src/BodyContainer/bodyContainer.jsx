import { useState } from 'react';
import './bodyContainer.css';

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
          <img style={{width:"100px"}} src={item.images.icon} />
        </div>
      ))}
    </div>
  )
}

function BodyContainer({ cosmetic }) {
    {/*detta hanterar sidorna och hur mycket items som visas på sidan*/}
    {/*use state är det som gör att sidan uppdaterar och sedan visar ny info*/}
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const totalPages = Math.ceil(cosmetic.length / itemsPerPage);
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
          <select name="Filter" id="filter">
            <option value="Glider">Glider</option>
            <option value="Skin">Skin</option>
            <option value="Backbling">Backbling</option>
            <option value="Pickaxe">Pickaxe</option>
          </select>
        </div>
        {/*searchbaren, ska göra så man kan söka efter ett visst item senare*/}
        <div className='searchbar'>
          <input className='search'  type="text"placeholder="Search here" />
          <button className='button1'>Search</button>
        </div>
      </div>
      {/*visar alla items*/}
      <ItemLister cosmetic={cosmetic.slice(firstIndex, lastIndex)} />
      {/*pagination, detta är det som gör att man kan skrolla och byta "sida" och inte behöver få sidan att lagga*/}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} className={`page ${currentPage === index + 1 ? 'active' : ''}`} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  )
}

export default BodyContainer;
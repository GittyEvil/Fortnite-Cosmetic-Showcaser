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
                {cosmetic.slice(0, 100).map((item, index) => (
                    <div key={index}>
                    {/*<h3>{item.name}</h3> */}
                    <img style={{width:"100px"}} src={item.images.icon} />
                    
                    </div>
                ))}
        </div>
    )
}

function BodyContainer({ cosmetic }) {

    return(
        <div className="container">
            <div className="navcontainer">
                <Boxes title="Backbling"/>
                <Boxes title="Pickaxe"/>
                <Boxes title="Skin"/>
                <Boxes title="Glider"/>
                
                <div className='dropdown'>
                    <select name="Filter" id="filter">
                    <option value="Glider">Glider</option>
                    <option value="Skin">Skin</option>
                    <option value="Backbling">Backbling</option>
                    <option value="Pickaxe">Pickaxe</option>
                    </select>
                </div>
                <div className='searchbar'>
                    <input className='search'  type="text"placeholder="Search here" />
                    <button className='button1'>Search</button>
                </div>
            </div>
            <ItemLister cosmetic={cosmetic} />
        </div>
    )
}

export default BodyContainer;
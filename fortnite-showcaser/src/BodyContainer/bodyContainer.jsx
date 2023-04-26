import './bodyContainer.css';

function Boxes(props) {
    return (
    <div className='display'>
            <a href="#">{props.title}</a>
        </div>
    ) 
}

function ItemLister() {
    //var cosmeticsData = []

    return (
        <div className='ItemList'>
            
        </div>
    )
}

function BodyContainer() {

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

            <ItemLister/>

        </div>
    )
}

export default BodyContainer;
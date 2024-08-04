import { useState, useEffect } from "react";

const RestaurentList = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <>
            <div className="filter flex bg-gray-200">
               <div className="search p-1">
                <input className="px-4 p-1 border border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
               <button className="px-4 py-1 bg-blue-400 m-1 border-blue-400 rounded-lg"
            onClick={() => {
              alert('search')
            }}
          >
            Search
          </button>
          </div>
            </div>
            <h3>Restaurent List</h3>
        </>
    )
}

export default RestaurentList
import React from "react";

const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <div className="search-spaces">
                <input
                    onChange={props.changeHandler}
                    type="text"
                    value={props.searchVal}
                    placeholder="type something to search.."
                    name="searchbar"
                />
            </div>
            <div className="search-spaces">
                <button
                    className="button"
                    onClick={() => props.clickHandler(props.searchVal)}
                >
          SEARCH
                </button>
            </div>
        </div>
    );
};

export default SearchBar;

import React from "react";
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <div className="search-spaces">
                <TextField variant="filled" style={{padding: 24, width:'100%'}}
                    onChange={props.changeHandler}
                    type="text"
                    value={props.searchVal}
                    placeholder="type something to search.."
                    name="searchbar"
                />
            </div>
            <div className="search-spaces">
                <Button
                    size="large"
                    variant="text"
                    onClick={() => props.clickHandler(props.searchVal)}
                >
          SEARCH
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;

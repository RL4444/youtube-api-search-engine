import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults"

class App extends Component {
    constructor() {
        super();
        this.state = {
            testString: "this string is to test the state",
            searchVal: "",
            youtubeVids: [],
            resultsNumber: 10,
            staticSearchWord:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.searchThis = this.searchThis.bind(this);
        this.removeSpacesFromString = this.removeSpacesFromString.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                searchVal: e.target.value
            },
            () => {}
        );
    }
    removeSpacesFromString(inputString) {
        this.setState({
           staticSearchWord: inputString 
        })
        let arrToJoin = []
        const stringIntoArray = inputString.split("")
        for(let i =0; i < stringIntoArray.length; i++ ) {
            if (stringIntoArray[i] == " ") {
                arrToJoin.push("+")
            } 
            else {
                arrToJoin.push(stringIntoArray[i])
             }
        }
        return arrToJoin.join("").toLowerCase()
    }
    searchThis() {
        axios.get("/getYoutube", {params: {searchString: this.removeSpacesFromString(this.state.searchVal)}}).then(({ data }) => {
            this.setState({
                youtubeVids: data.resp.items
            })
        })
    }

    render() {
        if (this.state.youtubeVids.length > 0) {
            console.log(this.state.youtubeVids[0].snippet.thumbnails.default.url)
        
            return (
                <div className="app-container">
                    <div className="app-header">
                        <h1>YouTube API App</h1>
                    </div>
                    <div className="app-body">
                        <div className="each-body-section">
                            <SearchBar
                                searchVal={this.state.searchVal}
                                changeHandler={this.handleChange}
                                clickHandler={this.searchThis}
                            />
                        </div>
                        <div className="each-body-section">
                            <h3>Search Results For "{this.state.staticSearchWord}"</h3>
                            <SearchResults 
                                youtubeVids = {this.state.youtubeVids}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        else return (
            <div className="app-container">
            <div className="app-header">
                <h1>YouTube API App</h1>
            </div>
            <div className="app-body">
                <div className="each-body-section">
                    <SearchBar
                        searchVal={this.state.searchVal}
                        changeHandler={this.handleChange}
                        clickHandler={this.searchThis}
                    />
                </div>
                <div className="each-body-section">
                    <h2>HELLO TO A WHOLE NEW YOUTUBE WORLD</h2>
                    <p>Search Someting To Get The Party Started</p>
                </div>
            </div>
        </div>
        )
    }
}

export default App;

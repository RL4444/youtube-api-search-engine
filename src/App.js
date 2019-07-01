import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults"
import NavBar from './components/NavBar'

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
        this.moreResults = this.moreResults.bind(this);
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
        console.log("searching youtube...")
        this.setState({
            resultsNumber: 10
        })
        axios.get("/getYoutube", {params: {searchString: this.removeSpacesFromString(this.state.searchVal), resultsNumber: this.state.resultsNumber}}).then(({ data }) => {
            this.setState({
                youtubeVids: data.resp.items
            })
        })
        console.log("video array length", this.state.youtubeVids.length)
    }
    moreResults(e) {
        console.log("fetching more results clicked")
        this.setState({
            resultsNumber: this.state.resultsNumber + 10
        })
        axios.get("/getYoutube", {params: {searchString: this.removeSpacesFromString(this.state.searchVal), resultsNumber: this.state.resultsNumber}}).then(({ data }) => {
            this.setState({
                youtubeVids: data.resp.items
            })
        })
    }

    render() {
        console.log("Results number", this.state.resultsNumber)
        if (this.state.youtubeVids.length > 0) {
    
            return (
                <div className="app-container">
                    <NavBar/>
                    {/* <div className="app-header">
                        <h1>YouTube API App</h1>
                    </div> */}
                    <div className="app-body">
                        <div className="each-body-section">
                            <SearchBar
                                searchVal={this.state.searchVal}
                                changeHandler={this.handleChange}
                                clickHandler={this.searchThis}
                            />
                        </div>
                        <div>
                            <h3>Search Results For "{this.state.staticSearchWord}"</h3>
                            <SearchResults 
                                youtubeVids = {this.state.youtubeVids}
                                moreResults = {this.moreResults}
                            />
                        </div>
                    </div>
                </div>
            );
        }
        else 
            return (
            <div className="app-container">
                <NavBar/>
            {/* <div className="app-header">
                <h1>YouTube API App</h1>
            </div> */}
            <div className="app-body">
                <div className="each-body-section">
                    <SearchBar
                        searchVal={this.state.searchVal}
                        changeHandler={this.handleChange}
                        clickHandler={this.searchThis}
                    />
                </div>
                <div className="each-body-section">
                    <p>Search Someting To Get The Party Started</p>
                </div>
            </div>
        </div>
        )
    }
}

export default App;

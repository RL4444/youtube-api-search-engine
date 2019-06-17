const request = require("request");
const axios = require("axios");
const fetch = require('node-fetch')

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env; // in prod the secrets are environment variables
} else {
    secrets = require("./secrets"); // secrets.json is in .gitignore
}

const YT_API_KEY = secrets.YT_KEY;

exports.videoSearch = async function(searchString, listNumber) {
    try {
        const url =  `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchString}&order=relevance&key=${YT_API_KEY}`
        const fetchData = await fetch(url)
        const respJSON = fetchData.json()
    
        return respJSON;
    } catch (error) {
        console.log(error)
    }
    

};

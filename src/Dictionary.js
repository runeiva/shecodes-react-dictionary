import React, { useState }from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function handleResponse(response) {
    setResults(response.data);
}

function search(event) {
    event.preventDefault();

    let apiKey = "8b0f6dca34a0f66b303deotf68e3607e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <section>
            <form onSubmit={search}>
                <label>What word do you want to look up?</label>
                <input type="search" placeholder="Search for a word..." autoFocus={true} className="form-control search-input" onChange={handleKeywordChange}/>
            </form>
            </section>
            <Results results={results} />
        </div>
    );
}
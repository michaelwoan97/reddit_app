/*
    NAME        : Search.js
    PROJECT     : Frontend programming assignment
    PROGRAMMER  : Nghia Nguyen
    DATE        : February 20, 2021
    DESCRIPTION : This file contain the Search component of the project
*/
import React, { useState, useEffect } from "react";
import Article from "./Articles";

function Search() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState('');
    useEffect(() => {
        fetch("https://www.reddit.com/r/" + subreddit + "/hot/" +".json?limit=10").then(
        res => {
            if (res.status !== 200) {
            console.warn("Warning: Something is wrong with the api.");
            return;
            }
            res.json().then(data => {
            if (data != null)
                console.log(data)
                setArticles(data.data.children);
            });
        }
        )
    }, [subreddit]);
    
    return(
        <div className="Search">
                <div style={{textAlign:'center'}}>
                    <h1>Search for a Subreddit</h1>
                    <div>
                        <input id="subreddit" type="text" name="name" />
                        
                        <input type="submit" value="Submit" onClick={() => setSubreddit(document.getElementById("subreddit").value)} />
                    </div>
                </div>
                <div>
                    <div className="articles" >
                        {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
                        
                    </div>

                    
                </div>
                
            </div>
    )
}

export default Search
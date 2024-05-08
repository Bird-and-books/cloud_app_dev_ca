import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Article from './Article';
import { Link } from 'react-router-dom';

function ArticlesList() {
    const [articles, setArticles] = useState([]);

    async function fetchArticles() {
        try {
            const response = await fetch("http://localhost:4000/articles/", {
                headers: { Accept: "application/json" }
            });
            const data = await response.json();
            setArticles(data);
            
            console.log(data)

        } catch (error) {
            console.error("Failed to fetch articles", error);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, []);
        
    return(
        <div>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                    <Link to={`/articles/${article.id}`}>
                        <Article title={article.title} />
                    </Link>  
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ArticlesList;
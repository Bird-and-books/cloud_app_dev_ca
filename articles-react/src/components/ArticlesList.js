import { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';
import { Link } from 'react-router-dom';





function ArticlesList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await axios.get("http://localhost:4000/articles/", {
                    headers: { Accept: "application/json" }
                });
                setArticles(response.data); 
            } catch (error) {
                console.error("Failed to fetch articles", error);
            }
        }
        fetchArticles();
    }, []);
        
    return(
        <div>
            <ul>
                {articles.map ((article, index) => (
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
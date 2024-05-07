import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function FullArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Failed to fetch article', error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    article ? (
      <div className="fullArticle">
        <h2>{article.title}</h2>
        <p class="articleDate">{article.date}</p>
        <div dangerouslySetInnerHTML={{ __html: article.long }}></div>
        <Link to="/blog" className="buttons">Back to List of Articles</Link>
      </div>
    ) : <p>Article not found.</p>
  );
}

export default FullArticle;

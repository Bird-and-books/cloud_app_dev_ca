import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import axios from 'axios';
import { useEffect, useState } from 'react';

function FullArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`http://localhost:4000/articles/${id}`, {
          headers: { Accept: "application/json" }
        });
        const data = await response.json();
        setArticle(data);
        console.log(article)
        
        // const response = await axios.get(`http://localhost:4000/articles/${id}`);
        // setArticle(response.data);
      } catch (error) {
        console.error('Failed to fetch article', error);
      }
    };

    fetchArticle();
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();
      const updatedArticle = {
        title: article.title, // Оновіть ці поля, використовуючи, наприклад, форму для вводу даних
        body: article.body,
        published: article.published
      };
    
      fetch(`http://localhost:4000/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updatedArticle)
      })
      .then(response => response.json())
      .then(data => {
        setArticle(data);
        alert('Article updated successfully!');
      })
      .catch(error => console.error('Failed to update article', error));
      
    }

  function handleDelete(articleId) {
      fetch(`http://localhost:4000/articles/${id}`, {
        method: 'DELETE', 
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(() => {
        alert('Article deleted successfully!');
        window.location.href = "/";
      })
      .catch(error => console.error('Failed to delete article', error));
    
   
    alert("Your item has been removed");
  }


  return (
    article ? (
      <div className="fullArticle">
        <h2>{article.title}</h2>
        <p class="articleDate">{article.body}</p>
        <p>{article.published ? 'published' : 'not published'}</p>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
        <Link to="/" className="buttons">Back to List of Articles</Link>
      </div>
    ) : <p>Article not found.</p>
  );
}

export default FullArticle;

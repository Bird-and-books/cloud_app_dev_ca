import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { get, delReq, put } from '../api';

function FullArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const { result } = await get(id)
      result && setArticle(result)
    };

    fetchArticle();
    setIsLoading(false)
  }, [id]);
//Update doesn't work
  const handleUpdate = async (e) => { 
    e.preventDefault();
      const updatedArticle = {  
        body: article.body,
        published: article.published
      };
    const { result } = put(id, updatedArticle)

    setArticle(result);
    alert('Article updated successfully!');
  }

  const handleDelete = async () => {
    const answer = prompt("Are you sure you want to delete it? This action is permanent", 'yes')
    if (answer) {
      await delReq(id)
      alert('Article deleted successfully!');
      window.location.href = '/'
    }
  }

  return (<>
    {isLoading && (<div>{"Article is loading" }</div>)}
    {!article ? <p>Article not found.</p>
      : (
      <div className="fullArticle blogContainer">
        <div>
        <h2>{article.title}</h2>
        <p className="articleDate">{article.body}</p>
        <div className="m-2">{article.published ? 'published' : 'not published'}</div>
        <div className="m-2">
        <button className="buttons-p me-2" onClick={handleUpdate}>Update</button> 
        <button className="buttons-p ms-2" onClick={handleDelete}>Delete</button> 
        <div><Link to="/" className="buttons-p mt-2" >Back to List of Articles</Link></div>
        </div>
        </div>
      </div>)
      }
  </>);
}

export default FullArticle;

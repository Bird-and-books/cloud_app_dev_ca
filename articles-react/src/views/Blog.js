
import { Link } from 'react-router-dom';
 

function Blog() {
  return (
    <div className="blogContainer">
      {data.map((article, index) => (
        <div className='blogArticle' key={index}>
          <img src={article.img} alt="Article" className='articleImage' />
          <h3 class="articleHeader">{article.header}</h3>
          <div class="articleDate">{article.date}</div>
          <div class="articleShort">{article.short}</div>
          <Link to={`/blog/${article.id}`} className="buttons">Read More</Link> 
        </div>
      ))}
    </div>
  );
}

export default Blog;
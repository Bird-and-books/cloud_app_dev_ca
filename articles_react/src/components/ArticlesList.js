import React, { useState, useEffect } from "react";
// import axios from 'axios';
import Article from "./Article";
import { Link } from "react-router-dom";
import { getAll } from "../api";

function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [filteredArt, setFilteredArt] = useState([]);

  const fetchArticles = async () => {
    const { result } = await getAll();
    setArticles(result || []);
    setFilteredArt(result || []);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filterArticles = (e) => {
    const isSelected = e.target.checked;
    const filtered = isSelected
      ? articles?.filter((a) => a?.published) || []
      : articles;
    setFilteredArt(filtered);
  };

  const fQty = filteredArt.length;
  const aQty = articles.length;

  return (
    <div className="articleListWrapper">
      <div className="filter_checkbox">
        <label htmlFor="filter"> Show only published articles </label>
        <input
          id="filter"
          type="checkbox"
          onChange={filterArticles}
          defaultChecked={false}
        />
      </div>

      {fQty === aQty && aQty === 0 && <p className="NoArticle">{"There are no articles to show"}</p>}
      {fQty < aQty && fQty === 0
        ? <p className="NoArticle">{"There are no published articles to show"}</p>
        :(<ul>
          {filteredArt?.map((article, index) => (
            <li key={index}>
              <Link to={`/articles/${article.id}`}>
                <Article title={article.title} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ArticlesList;

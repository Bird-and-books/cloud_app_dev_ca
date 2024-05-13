import React, { useState, useEffect } from "react"
import Article from "./Article"
import { Link } from "react-router-dom"
import { getAll } from "../api"

function ArticlesList() {
  const [articles, setArticles] = useState([])
  const [isPubOnly, setIsPubOnly] = useState(false)

  const fetchArticles = async () => {
    const { result } = await getAll()
    setArticles(result || [{ id: 1, title: "asd" }])
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const filtered = articles?.filter((a) => (isPubOnly ? a.published : true))
  const fQty = filtered.length
  const aQty = articles.length

  return (
    <div className='articleListWrapper'>
      <button
        className={"buttons filterButton"}
        onClick={() => setIsPubOnly(!isPubOnly)}>
        {`Show ${isPubOnly ? "All" : "Published"}`}
      </button>

      {aQty === 0 && (
        <p className='articleCenter'>{"There are no articles to show"}</p>
      )}
      {fQty < aQty && fQty === 0 ? (
        <p className='articleCenter'>
          {"There are no published articles to show"}
        </p>
      ) : (
        <div className='articleCenter'>
          <ul>
            {filtered.map((article, index) => (
              <li key={index}>
                <Link to={`/articles/${article.id}`}>
                  <Article title={article.title} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
export default ArticlesList

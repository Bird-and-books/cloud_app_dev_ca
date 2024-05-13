import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { get, delReq, put } from "../api"

function FullArticle() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      const { result } = await get(id)
      setArticle(
        result || {
          title: "new Article",
          body: "someBody sadsadasdasda asd asd asd asdasdasdas dasdasd asdasd asdasdasd asd asdasdasd asd asdasd ada sd asd ",
          published: false,
        }
      )
    }

    fetchArticle()
    setIsLoading(false)
  }, [id])
  //Update doesn't work
  const handleUpdate = async (e) => {
    e.preventDefault()
    const updatedArticle = {
      body: article.body,
      published: article.published,
    }
    const { result } = put(id, updatedArticle)

    setArticle(result)
    alert("Article updated successfully!")
  }

  const handleDelete = async () => {
    const answer = prompt(
      "Are you sure you want to delete it? This action is permanent",
      "yes"
    )
    if (answer) {
      await delReq(id)
      alert("Article deleted successfully!")
      window.location.href = "/"
    }
  }

  return (
    <>
      {isLoading && <div>{"Article is loading"}</div>}
      {!article ? (
        <p className='articleCenter'>Article not found.</p>
      ) : (
        <div className='fullArticle'>
          <div>
            <h2>{article.title}</h2>
            <p className='articleBody'>{article.body}</p>
            <div>{`Article is ${article.published ? "published" : "not published"}`}</div>
            </div>
            <div className="buttonsBlock">
              <button
                className='buttons buttons-svg'
                onClick={handleUpdate}
                title='Edit'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                  <path
                    fill='#fff'
                    d='M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z'
                  />
                </svg>
              </button>
              <button
                className='buttons buttons-svg'
                onClick={handleDelete}
                title='Delete'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                  <path
                    fill='#fff'
                    d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z'
                  />
                </svg>
              </button>
              <div>
                <Link to='/' className='buttons'>
                  Back to List of Articles
                </Link>
              </div>
            </div>


        </div>
      )}
    </>
  )
}

export default FullArticle

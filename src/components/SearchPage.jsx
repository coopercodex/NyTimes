import React, { useState } from 'react'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'


export const SearchPage = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
 
  const onTermChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value)
  }

  const searchApi = () => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      setResults(data.response.docs)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchApi()
  }

  return (
        <>
      <SearchBar term={term} onTermChange={onTermChange} onTermSubmit={handleSubmit} />
    <div className='card-details'>
      {results?.map(paper => (
        <div className='search-results'>
        <h1>{paper.abstract}</h1>
        <Link to={`/CardDetails/${paper?.title}`}
        state={{ paper }}>
        {paper.multimedia.length > 0 ? <img src={`https://static01.nyt.com/${paper.multimedia[0].url}`} /> : <img src='data:image/png;base64,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'/>}
      </Link>
      <h4>{paper.headline.main}</h4>
        </div>
      ))}
    </div>
    </>
  )
}

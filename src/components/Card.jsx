import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export const Card = ({ title, getUrl, rid }) => {
  const [story, setStory] = useState([])
  const limitedList = story.slice(3, 15)

  useEffect(() => {
    getData()
  }, [getUrl])

  const getData = () => {
    fetch(getUrl)
      .then(res => res.json())
      .then(data => {
        setStory(data.results)
        console.log(data.results)
      })
  }

  return (
    <>
      <h1>{title}</h1>
      <div className='card-container'>
        {limitedList.map(paper => (
          <div className={`${rid ? 'card-left' : 'card-right'}`} key={paper.title}>
            <div className='card-info'>
              <h4>{paper.title ? paper.title : <h4>Title doesn't seem to be available</h4>}</h4>
              <p>{paper.abstract ? paper.abstract : <p>Story not available, please visit<Link target="_blank" rel="noreferrer" to='//www.nytimes.com/'> Real New York Times </Link></p> }</p>
            </div>
            <Link to={`/cardDetails/${paper?.title ? paper?.section : <>Having some trouble please try again </>}`}
              state={{ paper }}>
              { paper?.multimedia ? <img src={paper?.multimedia[0].url} alt='Reference article caption' /> : <img src='https://static01.nyt.com/images/2023/01/11/multimedia/11dc-bidendocs-vwlq/11dc-bidendocs-vwlq-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale' alt='biden talking to reporters'/>}
            </Link>
          </div>
        ))}
      </div>
    </>
  ) 
}

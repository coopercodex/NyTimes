import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const MostPopular = () => {

  // const [mostPopular, setMostPopular] = useState([])
  // const [filterArticles, setFilterArticles] = useState([])
  const [filterList, setFilterList] = useState([])
  // const limitedList = mostPopular.slice(8, 23)

  // const newList = limitedList.splice(6, 3, mostPopular[32], mostPopular[26])
 

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const copyOfFilterList = []
    const a = []
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        // setMostPopular(data?.results)
        console.log('DATA', data)
        data?.results.forEach(article => {
          if (!copyOfFilterList.includes(article.section)) {
            copyOfFilterList.push(article.section)
            a.push(article)
          }

        })
        setFilterList(a)
      })
    }
    console.log('FIlTERED', filterList)
    // console.log("AAAAAA", a)
  // console.log(limitedList)
  // console.log(mostPopular)
  //   const r = (limitedList.map(item => item))
  //   const v = ([...new Set(r)])
  //   console.log(v)

  return (
    <div className='sub-header'>{filterList?.map((paper) => (
      <Link to={`/CardDetails/${paper}`}
        state={{ paper }}>
        <li >{paper.section}</li>
      </Link>
    ))
    }</div>
  )
}

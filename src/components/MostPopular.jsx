import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const MostPopular = () => {

  const [mostPopular, setMostPopular] = useState([])
  const limitedList = mostPopular.slice(8, 23)
  const newList = limitedList.splice(6, 3, mostPopular[32], mostPopular[26])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`)
      .then(res => res.json())
      .then(data => {
        setMostPopular(data?.results)
      })
  }
  console.log(limitedList)
  console.log(mostPopular)
  // const r = (limitedList.map(item => item.section))
  //   const v = ([...new Set(r)])

  return (
    <div className='sub-header'>{limitedList.map((paper, index) => (

      <Link to={`/CardDetails/${paper?.title}`}
        state={{ paper }}>
        <li >{paper?.section}</li>
      </Link>
    ))
    }</div>
  )
}

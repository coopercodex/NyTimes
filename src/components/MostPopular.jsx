import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const MostPopular = () => {
  console.log(` 0000000                         000        0000000
  111111111      11111111100          000      111111111
  00000        111111111111111111      00000      000000
  000        1111111111111111111111111100000         000
  000        1111       1111111111111111100          000
  000         11       0     1111111100              000
  000          1      00             1               000
  000               00      00       1               000
  000             000    00000       1               000
  00000            0000  00000000       1                00000
  11111            000 00    000000      000                 11111
  00000          0000      000000     00000              00000
  000        10000      000000      000              0000
  000        00000      000000       1               000
  000        000000     10000        1     0         000
  000        1000000 00              1    00         000
  000         1111111                1 0000          000
  000          1111111100           000000           000
  0000          111111111111111110000000            0000
  111111111        111111111111100000          111111111
    0000000              00000000              0000000
    Hire Me FE Engineer: https://github.com/coopercodex?tab=repositories, https://www.linkedin.com/in/derek-cooper-a8798323a/`)


  const [filterList, setFilterList] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    const copyOfFilterList = []
    const a = []
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {
        data?.results.forEach(article => {
          if (!copyOfFilterList.includes(article.section)) {
            copyOfFilterList.push(article.section)
            a.push(article)
          }
        })
        setFilterList(a)
      })
  }

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

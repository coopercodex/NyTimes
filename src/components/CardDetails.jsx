import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import "./CardDetails.css"
import { Link } from 'react-router-dom';

export const CardDetails = () => {
  const { state } = useLocation();
  const { paper } = state || {};
  // const paper = mostPopular;
  console.log("state", paper)

  return (paper) ? (
    <div className='card-details'>
      <h1>{paper?.title}</h1>
      <p>{paper?.abstract}</p>
      {paper?.multimedia[0].caption ? <img src={paper?.multimedia[0].url} /> : <img src={`https://static01.nyt.com/${paper.multimedia[0].url}`} />}
      {paper?.multimedia[0] ? <h4>{paper?.multimedia[0].caption}</h4> : <h1> Not Found</h1>}
    </div>
  ) : <div className='error'>
    <Link to={'/'}>
      <h1>Page Not Found</h1>
      <h1 className='header-title'>Back</h1>
    </Link></div>
} 

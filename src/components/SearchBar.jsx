import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <div className='search-bar'>

      <form onSubmit={onTermSubmit} className='w-75 text-end'>
        <BsSearch className='search-icon' />
        <input
          type='text' required
          placeholder=''
          value={term}
          onChange={onTermChange}>
        </input>
      </form>
    </div>
  )
}

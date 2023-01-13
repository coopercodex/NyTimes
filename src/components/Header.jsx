import { Link } from 'react-router-dom'
import "./Header.css"
import { MostPopular } from './MostPopular'


export const Header = () => {
  const date = new Date().toLocaleString()
 
  return (
    <div className='header'>
      <div className='header-left'>
        <p className='date'>{date}</p>
      </div>
      <div className='header-middle'>
        {/* <SearchBar /> */}
        <Link to={'/'}>
          <h1 className='header-title'>The New York Times</h1>
        </Link>
        <MostPopular />
      </div>

    </div>
  )
}

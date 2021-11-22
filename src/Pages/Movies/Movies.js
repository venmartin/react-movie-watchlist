import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from '../../components/ItemCard'
import CustomPagination from '../../components/CustomPagination'

const Movies = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [pageNum, setPageNum ] = useState()

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
      
      );

      setContent(data.results)
      setPageNum(data.total_pages)

  }

  useEffect(() => {
    fetchMovies()
  }, [page])


  return (
    <div>
      <h1 className='pageTitle'>Movies</h1>
      <div className='movies'>
        {
          content && content.map((item) => 
          <ItemCard 
            key={item.id}
            id={item.id} 
            poster={item.poster_path} 
            title={item.title || item.name} 
            date={item.release_date || item.first_air_date}
            media_type={item.media_type}
            vote_average={item.vote_average}
            language={item.original_language}
            status={item.status}
             />)
            
        }
      </div>
      <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
    </div>
  )
}

export default Movies

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from '../../components/ItemCard'
import CustomPagination from '../../components/CustomPagination'

const Series = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [pageNum, setPageNum ] = useState()

  const fetchMovies = async () => {
    const { data } = await axios.get(
         `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      );

      setContent(data.results)
      setPageNum(data.total_pages)

  }

  useEffect(() => {
    fetchMovies()
  }, [page])

  return (
    <div>
      <span className='pageTitle'>Series</span>
      <div className='trending'>
        {
          content && content.map((item) => 
          <ItemCard 
            key={item.id}
            id={item.id} 
            poster={item.poster_path} 
            title={item.title || item.name} 
            date={item.release_date || item.first_air_date}
            media_type="tv"
            vote_average={item.vote_average}
            language={item.original_language}

             />)
            
        }
      </div>      
      <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
    </div>
  )
}

export default Series

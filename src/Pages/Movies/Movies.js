import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from '../../components/ItemCard'
import CustomPagination from '../../components/CustomPagination'
import GenreChips from '../../components/GenreChips'
import useGenreID from '../../hooks/useGenreID'
import LoadingSpinner from '../../components/Loading'


const Movies = () => {
  const [ loading, setLoading ] = useState(false)
  const [ page, setPage ] = useState(1)
  const [ content, setContent ] = useState([])
  const [ pageNum, setPageNum ] = useState()
  const [ genres, setGenres ] = useState()
  const [ selectedGenres, setSelectedGenres ] = useState([])
  const genreID = useGenreID(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreID}`
      
      );

      setContent(data.results)
      setPageNum(data.total_pages)
      setLoading(true)
      
  }

  useEffect(() => {
    fetchMovies()
  }, [page, genreID])


  return (
    <div>
        <h1 className='pageTitle'>Movies</h1>
        <GenreChips
            type='movie'
            selectedGenres={selectedGenres} 
            setSelectedGenres={setSelectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            // Updates the page after genre is selected
            setPage={setPage}
            />
      <div className='movies'>
        
        { loading ? 
          content && content.map((item) => 
          <ItemCard 
            key={item.id}
            id={item.id} 
            poster={item.poster_path} 
            title={item.title || item.name} 
            date={item.release_date || item.first_air_date}
            media_type="movie"
            vote_average={item.vote_average}
            language={item.original_language}
            status={item.status}
             />) : <LoadingSpinner/>
        
        }
      </div>
      <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
    </div>
  )
}

export default Movies

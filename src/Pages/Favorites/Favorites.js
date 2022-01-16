import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemCard from '../../components/ItemCard'
import CustomPagination from '../../components/CustomPagination'
import AddFav from '../../components/AddFav'


const Favorites = ({ media_type, id}) => {
  const [ page, setPage ] = useState(1)
  const [ content, setContent ] = useState()
  const [ favorites, setFavorites ] = useState([])
  const [ pageNum, setPageNum ] = useState(1)
  
  // const fetchData = async () => {
  //   const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  
  //   getFavorites()
  //   setContent(data)
  //   console.log(favList)
  // }

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
      
      );

      setContent(data.results)
      setPageNum(data.total_pages)
      getFavorites()
      console.log(favList)
  }
  
  


  // This is temporary for now.
  let favList = []
  const getFavorites = () => {
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const favItem = JSON.parse(localStorage.getItem(key))
      favList.push(favItem)
      // console.log(favList)
      console.log(favList[i].id, favList[i].media_type)    
    }
  
  }

  //This is temporary for now. 
const newList = () => {

  for (var i = 0; i < favList.length; i++) {
    const itemId = favList[i].id
    const itemMediaType = favList[i].media_type
    const newItem = {
      id: itemId,
      media_type: itemMediaType
    }
    console.log(newItem.id, newItem.media_type)
  

  }

}




  useEffect(() => {
    getFavorites()
    fetchMovies()
    // fetchData()
  }, [])


  return (
    <>
      <div>
        <h1 className='pageTitle'>Favorites</h1> 
      </div>
        <div>
            <button 
            onClick={getFavorites}
            >
          Test Me
            </button>
            <button 
            onClick={newList}
            >
          New List
            </button>
          <div className='movies'>
            { 
              content && content.map((item) => 
              <ItemCard 
                key={item.id}
                id={item.id} 
                poster={item.poster_path} 
                title={item.title || item.name} 
                date={item.release_date || item.first_air_date}
                media_type={content.media_type}
                vote_average={item.vote_average}
                language={item.original_language}
                status={item.status}
                />)
            
            }
            
          </div>
          {pageNum > 1 && (
        <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
        )}
      </div>
    </>
  )
}

export default Favorites

import React from 'react'
import LoadingSpinner from '../../components/Loading'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { useState, useEffect } from 'react';
import ItemCard from '../../components/ItemCard';
import axios from 'axios';
import CustomPagination from '../../components/CustomPagination';

  


const Search = () => {
  const [ type, setType ] = useState('multi')
  const [ expanded, setExpanded ] = useState(false)
  const [ searchVal, setSearchVal] = useState("a")
  
  const [ content, setContent ] = useState([])
  const [ pageNum, setPageNum ] = useState()
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)
    
  //Toggle Button Hooks
    const [alignment, setAlignment] = React.useState('web');

  const fetchSearch = async() => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchVal}&page=${page}&include_adult=false`
      )
      
      
      setContent(data.results)
      setPageNum(data.total_pages)
      // setLoading(true)
  }

    useEffect(() => {
      window.scroll(0,0)
      fetchSearch();
      
    }, [type, page])


    // Expands the accordion for Advanced Filters
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  };

  // Handles the text changing within the input field (search box)
  // const handleSearchText = (e) => {
  //   setSearchVal(e.target.value)
    
  //   console.log(searchVal)
  // }

  // Pulls the value from the input field.
  const handleSearch = () => {
    console.log(searchVal)
  }

 

  return (
    <div>
      <span className='pageTitle'>Search</span>
      {/* <LoadingSpinner /> */}
        <div className='search-filter'>
        <Accordion expanded={ expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Advanced Filters</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <ToggleButtonGroup
                color="primary"
                value={type}
                exclusive
                // Toggle Func for Multi / Movies / TV
                onChange={(event, newValue) => {
                  setType(newValue)
                  setPage(1)
                  console.log(newValue)
                }}
              >
                <ToggleButton value="multi">All</ToggleButton>
                <ToggleButton value="movie">Movies</ToggleButton>
                <ToggleButton value="tv">Series</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </AccordionDetails>
        </Accordion>
        </div>
        <div className='searchBox'>
          <TextField 
            id="filled-basic"
            label="Search"
            variant="filled"
            name='search'
            // onChange={handleSearchText}
            onChange={(e) => setSearchVal(e.target.value)}
            style={{
              flex: 1,
             }}/>
          <button className='searchBtn'>
            <SearchIcon onClick={fetchSearch}/>
          </button>
        </div>
        <div className='movies'>
        { content && content.map((item) => 
          <ItemCard 
            key={item.id}
            id={item.id} 
            poster={item.poster_path} 
            title={item.title || item.name} 
            date={item.release_date || item.first_air_date}
            media_type={item.media_type || type}
            vote_average={item.vote_average}
            language={item.original_language}
            status={item.status}
             />)
        }
        {searchVal &&
          !content &&
          (<h2>There is nothing by that title.</h2>)}
        </div>
        {pageNum > 1 && (
        <CustomPagination setPage={setPage} page={page} pageNum={pageNum} />
        )}
    </div>
  )
}

export default Search

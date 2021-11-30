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

import { useState } from 'react';

  


const Search = () => {
  const [ type, setType ] = useState()
  const [ searchVal, setSearchVal] = useState()
  const [ expanded, setExpanded ] = useState(false)
  
  // const [ loading, setLoading ] = useState(false)
  // const [ page, setPage ] = useState(1)
  // const [ content, setContent ] = useState([])
  // const [ pageNum, setPageNum ] = useState()
    
  //Toggle Button Hooks
    const [alignment, setAlignment] = React.useState('web');



  // Toggle Func for All / Movies / Series
  const handleMediaType = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // Expands the accordion for Advanced Filters
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  };

  // Handles the text changing within the input field (search box)
  const handleSearchText = (e) => {
    setSearchVal(e.target.value)
    
    console.log(searchVal)
  }

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
                value={alignment}
                exclusive
                onChange={handleMediaType}
              >
                <ToggleButton 
                  value="all"
                  
                  >All</ToggleButton>
                <ToggleButton value="movies">Movies</ToggleButton>
                <ToggleButton value="series">Series</ToggleButton>
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
            onChange={handleSearchText}
            style={{
              flex: 1,
             }}/>
          <button className='searchBtn'>
            <SearchIcon onClick={handleSearch}/>
          </button>
        </div>
        
    </div>
  )
}

export default Search

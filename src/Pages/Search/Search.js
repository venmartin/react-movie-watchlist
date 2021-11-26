import React from 'react'
import LoadingSpinner from '../../components/Loading'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css'

import { useState } from 'react';

  


const Search = () => {
    const [type, setType] = useState()

  // const [ loading, setLoading ] = useState(false)
  // const [ page, setPage ] = useState(1)
  // const [ content, setContent ] = useState([])
  // const [ pageNum, setPageNum ] = useState()


  return (
    <div>
      <span className='pageTitle'>Search</span>
      {/* <LoadingSpinner /> */}
       
        <div className='searchBox'>
          <TextField 
            id="filled-basic"
            label="Search"
            variant="filled"
            style={{
              flex: 1,
             }}/>
          <button className='searchBtn'>
            <SearchIcon />
          </button>
        </div>
        
    </div>
  )
}

export default Search

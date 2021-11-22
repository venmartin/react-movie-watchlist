import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './CustomPagination.css'

const CustomPagination = ({ setPage, pageNum = 10}) => {
  const handlePageChange = (page) => {
    setPage(page)
    window.scroll(0,0);
  }
  
  return (
    <div className='pages'>
      <Stack spacing={2}>
        <Pagination
        count={pageNum}
        onChange={(e) => handlePageChange(e.target.textContent)}
        color="primary" />   
      </Stack>
    </div>
  );
  
}

export default CustomPagination

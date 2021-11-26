import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const LoadingSpinner = () => {
  return (
    <div 
      className='spinner'
      style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }
    >
      <Box sx={{ display: 'flex' }}>
        <CircularProgress 
          color='primary'
          size={70}
          thickness={8}
        
           />
      </Box>
    </div>
  );
}

export default LoadingSpinner
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import './Dock.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  // const navigate = useNavigate();
  //   useEffect(() => {
  //     if (value===0) navigate.push('./');
  //     else if(value === 1) navigate.push('/movies');
  //     else if(value === 2) navigate.push('/series');

  //   }, [value, navigate]);

  return (
    <Box className='dock' sx={{
         width: '100%',
          }}>
      <BottomNavigation
        showLabels
        value={value}
        className='nav-style'
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
        {/* <BottomNavigationAction label="" icon={<MoreVertIcon />} /> */}
      </BottomNavigation>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import './Dock.css'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar"



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const routes = ["/trending", "/movies", "/series", "/search" ]

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
        <BottomNavigationAction label="Trending" value={routes[0]} component={Link} to={routes[0]}  icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" value={routes[1]} component={Link} to={routes[1]} icon={<MovieIcon />} />
        <BottomNavigationAction label="TV Series" value={routes[2]} component={Link} to={routes[2]} icon={<TvIcon />} />
        <BottomNavigationAction label="Search" value={routes[3]} component={Link} to={routes[3]} icon={<SearchIcon />} />
        
      </BottomNavigation>
    </Box>
  );
}
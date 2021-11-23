import * as React from 'react';
import axios from 'axios';
import { useEffect } from 'react'
import './GenreChips.css'
import Chip from '@mui/material/Chip'

// Testing accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const GenreChips = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
    
  const handleSelected = (genre) => {
      setSelectedGenres([ ...selectedGenres, genre ])
      setGenres(genres.filter((g) => g.id !== genre.id))
      setPage(1)

  }
  
  const handleRemove = (genre) => {
      setSelectedGenres(
        selectedGenres.filter((selected) => selected.id !== genre.id)
        )
      setGenres([ ...genres, genre ])
      setPage(1)

  }

  const [expanded, setExpanded] = React.useState(false);
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  

  // const handleRemove() => {

  // }

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )

    setGenres(data.genres);
  };
  

    useEffect(() => {
      fetchGenres();

      return () => {
        setGenres({})
      }
        //eslint-disable-next-line
    }, [])

  return (
    <div className='genre-list'>
        <Accordion expanded={ expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Select by Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className='genre-list'>
          {selectedGenres && selectedGenres.map((genre) => (
            <Chip 
              key={genre.id}
              color="secondary"
              label={genre.name}
              clickable
              onDelete={() => handleRemove(genre)}
              sx={{
                borderRadius: 0,
                width: '150px',
                fontWeight: 700,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#272727',
                margin: '1px',
              }}
              // onDelete={handleDelete}
              />
              
        ))}
          {genres && genres.map((genre) => (
            <Chip 
              key={genre.id}
              color="primary"
              label={genre.name}
              clickable
              onClick={() => handleSelected(genre)}
              sx={{
                borderRadius: 0,
                width: '150px',
                fontWeight: 700,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#272727',
                margin: '1px'
                
              }}
              // onDelete={handleDelete}
              />
              
        ))}
          </div>
        </AccordionDetails>
      </Accordion>
          
        
    </div>
  );
}

export default GenreChips
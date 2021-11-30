import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GenreChips from './GenreChips';
import { useState } from 'react';
import useGenreID from '../hooks/useGenreID';

const GenreMenu = () => {
    const [expanded, setExpanded] = useState(false);

    const [ page, setPage] = useState(1)
    const [ content, setContent ] = useState([])
    const [ pageNum, setPageNum ] = useState()
    const [ genres, setGenres ] = useState()
    const [ selectedGenres, setSelectedGenres ] = useState([])
    const genreID = useGenreID(selectedGenres)


    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    

  return (
    <div>
      <Accordion expanded={ expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Select by Genre</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <GenreChips
            type='movie'
            selectedGenres={selectedGenres} 
            setSelectedGenres={setSelectedGenres} 
            genres={genres} 
            setGenres={setGenres}
            // Updates the page after genre is selected
            setPage={setPage}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default GenreMenu
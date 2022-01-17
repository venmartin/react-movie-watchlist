import * as React from 'react';
import { img_500, unavailable, unavailableLandscape } from '../config/config';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import './ItemModal.css'
import CancelIcon from '@mui/icons-material/Cancel';
import YouTubeIcon from '@mui/icons-material/YouTube';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '1300px',
  // minHeight: '840px',
  width: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ItemModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ content, setContent ] = useState();
  const [ trailer, setTrailer ] = useState();


  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US`)
  
    setContent(data)
    
  }

  const fetchTrailer = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY }&language=en-US`)
  
    setTrailer(data.results[0]?.key)
  }


  useEffect(() => {
    fetchData()
    fetchTrailer()
  }, [])

// Create a function that stores the id of the movies into an array called Favorites.


  return (
    <div>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className='close-btn'>
            <CancelIcon onClick={handleClose}/>
          </div>
          {/* <div className='content-wrapper'> */}
           <div className='content-container'>

        {/* Poster's Portrait and Landscape           */}
        { content && (
            <div className='modal-poster'>
              <img 
                className='poster-portrait' 
                alt={ content.name || content.title } 
                src={ content.poster_path ? `${img_500}/${content.poster_path}` : unavailable } 

              />
            </div>
          )
        }
          { content && (
            <div className='modal-poster'>
              <img 
                className='poster-landscape' 
                alt={ content.name || content.title } 
                src={ content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape } 

              />
            </div>
          )
        }
        {/* Poster's Portrait and Landscape  --END--  */}

        {/* About Section - Title, Description and Buttons */}
            <div className='about-container'>
              <div className='content-heading'>
                { content && (
                  <span>{content.name || content.title} ({(
                  content.first_air_date ||
                  content.release_date ||
                  "N/A"
                ).substring(0,4)}
                )
                </span>
                )
                }
              </div>
              
              <div className='content-overview'>
                { content && (
                  <div>
                  <h2>Summary:</h2>
                  <span>
                  {content.overview}
                </span>              
                </div>
                )
                }
              </div>

            {/* Buttons Start */}
            <div className='btn-container'>
              <div className='modal-tab'>
                  <Button className='modal-btn-container'
                    target={window}
                    href={`https://www.youtube.com/watch?v=${trailer}`}
                    variant='outlined'
                    color='primary'
                    >
                    <YouTubeIcon />
                    <span className='modal-btn-title'>Trailer</span>
                  </Button>
                

              </div>
              
              

            
              </div>
            </div>
          {/* About Container End */}


            </div> 
          {/* </div> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
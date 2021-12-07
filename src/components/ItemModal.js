import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ItemCard from './ItemCard';
import LoadingSpinner from './Loading';
import { useState, useEffect } from 'react'
import { img_500, unavailable, unavailableLandscape } from '../config/config';
import './ItemModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  // height: "75%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ItemModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ loading, setLoading ] = useState();
  const [ content, setContent ] = useState();
  const [ trailer, setTrailer ] = useState();


  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY }&language=en-US`)
  
    setContent(data)
  }

  const fetchTrailer = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY }&language=en-US`)
  
    // console.log(data)
    setTrailer(data.results[0]?.key)
  }


  useEffect(() => {
    fetchData()
    fetchTrailer()
  }, [])

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
          <div className='content-container'>

        {/* Poster's Portrait and Landscape           */}
        { content && (
            <div className='modal-content'>
              <img 
                className='poster-portrait' 
                alt={ content.name || content.title } 
                src={ content.poster_path ? `${img_500}/${content.poster_path}` : unavailable } 

              />
            </div>
          )
        }
          { content && (
            <div className='modal-content'>
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
                <span>{content.name || content.title} ({(
                  content.first_air_date ||
                  content.release_date ||
                  "N/A"
                ).substring(0,4)}
                )
                </span>
              </div>
              
              <div className='content-overview'>
                <span>
                  {content.overview}
                </span>              
              </div>

            {/* Buttons Start */}
            <div>
              Add To Watch list
            </div>
            <div>
              Add To Favourites
            </div>
            <div>
              Trailer
            </div>

          
            </div>
          {/* About Container End */}


          </div> 
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
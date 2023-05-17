import React, { useState } from 'react';
import { CiMap, CiClock1, CiParking1, CiLocationOn } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './venuedetails.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '150px',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const modalButtons = {
  display: 'flex',
  marginTop: '40px',
  width: '400px',
  justifyContent: 'space-around',
};

const VenueDetails = () => {
  const dispatch = useDispatch();

  const [dateStatus, setDateStatus] = useState(false);
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showCancelModal = () => {
    setOpen(true);
    displayModal();
  };

  const cancelDate = () => {
    setDateStatus(true);
  };

  const finalCancelation = () => {
    setDateStatus(false);
    setOpen(false);
  };

  const cancelModalContent = {
    confirmationText: 'Are you sure you want to cancel?',
    yesBtn: 'Yes',
    noBtn: 'No',
    display: 'firstmodal',
  };

  const confirmationModalContent = {
    confirmationText: 'Your date with John was cancelled',
    noBtn: 'Back to Recommendations',
    display: 'secondmodal',
  };

  const displayModal = (options) => {
    return (
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id='transition-modal-title'
                variant='h6'
                component='h1'
                align='center'
              >
                {options?.confirmationText}
              </Typography>

              {options?.display === 'firstmodal' && (
                <div style={modalButtons}>
                  <button className='cancel-button ripple' onClick={cancelDate}>
                    {options?.yesBtn}
                  </button>

                  <button className='edit-button ripple' onClick={handleClose}>
                    {options?.noBtn}
                  </button>
                </div>
              )}

              {options?.display === 'secondmodal' && (
                <div style={modalButtons}>
                  {/* <button
                    className='cancel-button ripple'
                    onClick={showCancelModal}
                  >
                    {options?.yesBtn}
                  </button> */}

                  <button
                    className='edit-button ripple sec-md-btn'
                    onClick={finalCancelation}
                  >
                    {options?.noBtn}
                  </button>
                </div>
              )}
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };

  return (
    <div id='venuedetails-container'>
      <div id='v-c-location'>
        <CiLocationOn className='venue-icons' size={30} />
        <p>6700 Brooklyn Ave New York, NY 10005</p>
      </div>
      <div id='v-c-map'>
        <CiMap size={30} className='venue-icons' />
        <div id='v-c-map-distance'>
          <p>15 minutes from you</p>
          <p>27 minutes from John</p>
        </div>
      </div>
      <div id='v-c-time'>
        <CiClock1 className='venue-icons' size={30} />
        <p>Tuesday, March 16, 6:00 pm</p>
      </div>
      <div id='v-c-parking'>
        <CiParking1 className='venue-icons' size={30} />
        <p>Street parking available</p>
      </div>

      <div id='action-btns'>
        <button className='cancel-button ripple' onClick={showCancelModal}>
          Cancel
        </button>

        <button className='edit-button ripple'>Edit</button>
      </div>

      {open && displayModal(cancelModalContent)}
      {dateStatus && displayModal(confirmationModalContent)}
    </div>
  );
};

export default VenueDetails;

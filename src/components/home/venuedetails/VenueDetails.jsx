import React from 'react';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiMap, CiClock1, CiParking1, CiLocationOn } from 'react-icons/ci';
import TransitionsModal from '../../../utils/modal/ogmodal';
import { useDispatch } from 'react-redux';
import { setBoolean } from '../../../actions';
import { useSelector } from 'react-redux';
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

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showCancelModal = () => {
    setOpen(true);
    displayModal();
  };

  const displayModal = () => {
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
                Are you sure you want to cancel?
              </Typography>
              {/* <Typography id='transition-modal-description' sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography> */}

              <div style={modalButtons}>
                <button
                  className='cancel-button ripple'
                  onClick={showCancelModal}
                >
                  Yes
                </button>

                <button className='edit-button ripple' onClick={handleClose}>
                  No
                </button>
              </div>

              {/* <Typography>
                <button
                  className='cancel-button ripple'
                  onClick={showCancelModal}
                >
                  Cancel
                </button>

                <button className='edit-button ripple'>Edit</button>
              </Typography> */}
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

      {open && displayModal()}
    </div>
  );
};

export default VenueDetails;

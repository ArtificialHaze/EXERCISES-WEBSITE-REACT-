import React from 'react';
import {Box,Typography,Stack} from '@mui/material';
import Logo from './assets/images/Logo.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor={"#fff3f4"}>
      <Stack gap={'40px'} sx={{alignItems:'center',px:'40px',pt:"24px"}}>
        <img src={Logo} alt="Logo" className='logo' width={200} height={40} />
        <Typography variant='h5' pb={'40px'} mt={'20px'}>
          Made by DreamDevs. &copy; All rights reserved.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer;
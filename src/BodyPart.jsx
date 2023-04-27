import React from 'react';
import {Stack, Typography} from '@mui/material';
import Icon from './assets/icons/gym.png';

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack onClick={()=>{setBodyPart(item);window.scrollTo({top:1800,left:100,behavior:'smooth'})}} type="button" alignItems={'center'} justifyContent={'center'} className='bodyPart-card' sx={bodyPart===item?{borderTop:'4px solid #ff2625',backgroundColor:'#fff',borderBottomLeftRadius:'20px',width:'270px',height:'280px',gap:'47px',cursor:'pointer'}:{background:'#fff',borderBottomLeftRadius:'20px',width:'270px',height:'280px',gap:'47px',cursor:'pointer'}}>
        <img src={Icon} alt="Icon" style={{width:'40px',height:'40px'}} />
        <Typography fontSize={'24px'} fontWeight={'bold'} textTransform={'capitalize'} color={'#3a1212'}>
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart
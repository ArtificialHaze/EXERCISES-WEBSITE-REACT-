import React from 'react';
import {Box,Stack,Typography} from '@mui/material';


const ExerciseVideos = ({exerciseVideos,name}) => {
  if(!exerciseVideos.length) return 'Loading..';

  return (
    <Box sx={{mt:{lg:'200px',xs:'20px'}}} p={'20px'}>
      <Typography variant='h4' mb="33px">
        Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'0'}}} justifyContent={'flex-start'} flexWrap={'wrap'} alignItems={'center'}>
        {exerciseVideos?.slice(0,3).map((item,index)=>(
          <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer' key={index} className='exercise-video'>
            <img src={item.video.thumbnails[0].url} alt="thumbnail" />
            <Box>
              <Typography variant='h5' color="#000">
                {item.video.title}
              </Typography>
              <Typography variant='h6' color="#000">
                {item.channel.name}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
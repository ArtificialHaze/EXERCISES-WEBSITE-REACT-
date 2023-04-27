import React, { useEffect, useState } from 'react';
import {Box,Stack,Button,Typography,TextField} from '@mui/material';
import { fetchData,exerciseOptions } from './helpers';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
const [searchTerm, setSearchTerm] = useState('');
const [bodyParts, setBodyParts] = useState([]);

    useEffect(()=>{
       const fetchExercisesData=async()=>{
        const bodyPartsData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,exerciseOptions);
        setBodyParts(['All',...bodyPartsData])
       };
       fetchExercisesData();
    },[])

    const handleSearch=async ()=>{
        if(searchTerm){
            const exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exercisesData);

            const searchedExercises=exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(searchTerm)
            ||exercise.target.toLowerCase().includes(searchTerm)
            ||exercise.equipment.toLowerCase().includes(searchTerm)
            ||exercise.bodyPart.toLowerCase().includes(searchTerm)
            );
            setSearchTerm('');
            setExercises(searchedExercises);
        }
    }   

  return (
    <Stack alignItems={'center'} mt="37px" justifyContent={'center'} p={'20px'}>
        <Typography fontWeight={'700'} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb={'50px'} textAlign={'center'}>
            Awesome exercises you <br /> should know 
        </Typography>
        <Box position={'relative'} mb={'72px'}>
            <TextField height='76px' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value.toLowerCase())}} placeholder='Search..' type='text' sx={{input:{fontWeight:'700',border:'none',borderRadius:'4px'},width:{lg:'800px',xs:'350px'}, backgroundColor:'#fff',borderRadius:'40px'}}/>
            <Button onClick={handleSearch} className='search-btn' sx={{bgcolor:'#ff2625',color:'#fff',textTransform:'none',width:{lg:'175px',xs:'80px'},fontSize:{lg:'20px',sm:'14px'},height:"56px",position:'absolute',right:'0'}}>
                Search
            </Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScrollBar isBodyPart bodyPart={bodyPart} setBodyPart={setBodyPart} data={bodyParts}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises
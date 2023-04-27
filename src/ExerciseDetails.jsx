import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Box,} from '@mui/material'
import {exerciseOptions,fetchData, youtubeOptions} from './helpers';
import ExerciseVideos from './ExerciseVideos';
import Details from './Details';
import SimilarExercises from './SimilarExercises';

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id}=useParams();

  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseDbUrl=`https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData=await fetch(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);
      setExerciseDetail(exerciseDetailData);
      const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);
      const targetMuscleExercisesData=await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      const equipmentExercisesData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetails; 
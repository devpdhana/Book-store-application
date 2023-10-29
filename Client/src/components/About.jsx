import React from 'react'
import {Box, Typography} from '@mui/material'

const About = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Typography sx={{fontFamily:"fantasy"}}variant='h2'> This is an Book Store Application</Typography>
      <Typography sx={{fontFamily:"fantasy"}} variant='h3'>By MERN stack</Typography>
    </Box>
  )
}

export default About
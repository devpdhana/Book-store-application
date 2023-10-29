import React from 'react'
import {Box, Button, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Button LinkComponent={Link} to={"/books"} variant="contained">
        <Typography variant="h3">Find All Books</Typography>
      </Button>
    </Box>
  );
}

export default Home
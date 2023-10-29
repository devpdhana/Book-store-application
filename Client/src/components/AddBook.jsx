import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Box, Button, Checkbox, FormControlLabel, FormLabel, TextField} from '@mui/material'
const AddBook = () => {
  const navigate = useNavigate()
  const [checked, setchecked] = useState(false);
  const [inputs, setinputs] = useState({
    name:'',
    author:'',
    description:'',
    image:'',
    checked,
    price:'',
  })


  const handleChange =(e)=>{
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }


  const sendRequest =async()=>{
    await axios.post('http://localhost:3000/books',{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
    }).then(res=>res.data)
    navigate('/books')
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs, checked);
    sendRequest()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignContent={'center'}
      maxWidth={700}
      alignSelf={'center'}
      marginLeft={'auto'}
      marginRight={'auto'}
      marginTop={10}>
      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
      <FormLabel>Author</FormLabel>
      <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />
      <FormLabel>Description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />
      <FormLabel>Image</FormLabel>
      <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />
      <FormLabel>Price</FormLabel>
      <TextField value={inputs.price} onChange={handleChange} type='number' margin="normal" fullWidth variant="outlined" name="price" />
      <FormControlLabel control={<Checkbox checked={checked} onChange={(e)=>setchecked(!checked)} />} label='Available' />
      <Button type='submit' variant='contained' onClick={handleChange}>Add book</Button>
    </Box>
    </form>
  );
}

export default AddBook
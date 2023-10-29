import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookDetails = () => {
    const [book, setBook] = useState({})
    const id = useParams().id;
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchBook = async()=>{
            await axios.get(`http://localhost:3000/books/${id}`).then((res)=>setBook(res.data.book))
        }
        fetchBook()
    },[])
    const [checked, setChecked] = useState(book.available);
    const handleChange = (e)=>{
        setBook((prevState)=>({
            ...prevState,[e.target.name]:e.target.value
        }))
    }

    const sendRequest = async()=>{
        await axios.put(`http://localhost:3000/books/${id}`,{
            name:String(book.name),
            author:String(book.author),
            description:String(book.description),
            price:Number(book.price),
            available:Boolean(checked),
            image:String(book.image)
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        sendRequest().then((res)=>navigate('/books'))
    }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        maxWidth={700}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={book.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={book.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={book.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={book.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={book.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          }
          label="Available"
        />
        <Button type="submit" variant="contained">
          Update book
        </Button>
      </Box>
    </form>
  );
}

export default BookDetails
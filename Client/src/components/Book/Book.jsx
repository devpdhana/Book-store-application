import React from 'react'
import {Button} from '@mui/material'
import './Book.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Book = ({book}) => {
    const {name,author,description,image,price,available,_id} = book
    const history = useNavigate()
    const sendRequest = async()=>{
        await axios.delete(`http://localhost:3000/books/${_id}`)
      .then((res)=>res.data).then(()=>history('/'))
      history("/books");
    }
  return (
    <div className='card'>
        <img src={image} alt={name}></img>
        <article>By {author}</article>
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>Rs: {price}</h2>
        <Button LinkComponent={Link} to={`${_id}`}>Update</Button>
        <Button onClick={sendRequest}>Delete</Button>
    </div>
  )
}

export default Book
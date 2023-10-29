import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import './Book.css'
const URL = 'http://localhost:3000/books'
const fetchData = async()=>{
  return await axios.get(URL).then((res)=>res.data)
}
const Books = () => {
  const [books,setBooks] = useState()
  useEffect(() => {
    fetchData().then((res)=>setBooks(res.books))
  }, [books])
  
  return (
    <div>
      <ul>
        {books && books.map((book,i)=>(
          <div className='book' key={i}> 
          <Book book={book}/>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Books
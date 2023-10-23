import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function DataFetch() {

    const [post, setPost] = useState([])
    const [id, setId] =useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
    
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
    })
    .catch(err =>{
        console.log(err)
    })
    }, [idFromButtonClick])

  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Data</button>
        <div>
            UserID :{post.userId} <br />
            Id: {post.id} <br />
            Title: {post.title} <br />
            Body: {post.body} <br />
        </div>
      {/* <ul>
        {post.map(post =>(
        <li key={post.id}>Id: {post.id} <br /> Title: {post.body}</li>))}
      </ul> */}
    </div>
  )
}

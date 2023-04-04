import React, { useState, useEffect } from 'react'

const Home = () => {

  const [state, setstate] = useState();
  const fetchPosts = async () => {

    try {
      const response = await fetch('https://ai-imgssss.onrender.com/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const result = await response.json();
        console.log(result)
        setstate(result)
      }
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div>
      {state ?
        <div  style={{display :'flex' , flexWrap : 'wrap'}}>
          {state.map(e =>
            <div className='imgg'>
              <img src={e.photo} alt="" srcset="" />
              <label >{e.name}</label></div>
          )}
        </div>
        :
        <div>loading...</div>
      }
    </div>
  )
}

export default Home
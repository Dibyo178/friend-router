import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
const Home = () => {
    const [friends,setFriends] =useState([]);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data=>setFriends(data))
  },[])
    return (
    <div className="App">
      <h1>Friends:{friends.length}</h1>
      {
        friends.map(pd=><Friend friend={pd}></Friend>)
      }
    </div>
    );
};

export default Home;
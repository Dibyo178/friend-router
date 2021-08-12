import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const [friend,setFriend] =useState({}) //useState({}) = empty object
    console.log(friend)
              {/*friend id show*/}
        const {id}=useParams();  
        useEffect(() => {
            const url=`https://jsonplaceholder.typicode.com/users/${id}`
            fetch(url)
            .then(response => response.json())
            .then(data =>setFriend(data))
            console.log(data);
        },[])    
    return (
        <div>
            <p>Friend Details component:{id}</p>
            <h3>{friend.name}</h3>
            <h5>{friend.email}</h5>
            <p>{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;
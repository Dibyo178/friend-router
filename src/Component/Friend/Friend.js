import React from 'react';
import { useHistory } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props)
    const {name,email,id} = props.friend;
    const history = useHistory();

    const handleClick=(fid)=>{
        const url=`/friend/${fid}`;
        history.push(url);
    }
  

    const friendStyle = {
        border: '1px solid purple',
        margin:'20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
             <h4>Name:{name}</h4>
             <p>{email}</p>
             {/* <Link to={`/friend/${id}`}>
             Show details of {id}
              </Link> */}
              <button onClick={()=> handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;
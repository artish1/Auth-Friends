import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../../axiosAuth";
import Friend from '../Friend/Friend';
import { makeStyles } from '@material-ui/core/styles';
import FriendForm from '../FriendForm/FriendForm';

const useStyles = makeStyles({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr) )",
        gap: "50px",
        margin: "50px",
    },
});

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const classes = useStyles();
    const handleRemove = (id) => {
        axiosWithAuth().delete(`/api/friends/${id}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err));
    }
    useEffect(() => {
        axiosWithAuth().get("/api/friends")
        .then(res => {
            setFriends(res.data);    
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [])
    return ( <div>
        <FriendForm handleFriends={setFriends}/>
        <div className={classes.container}>
        {friends.map( (friend, index) => {
            return <Friend handleRemove={handleRemove} key={index} {...friend}/>
        })}
    </div> 
    </div>
    );
}
 
export default FriendsList;
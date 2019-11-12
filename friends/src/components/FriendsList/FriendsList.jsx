import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from "../../axiosAuth";
import Friend from '../Friend/Friend';
import { makeStyles } from '@material-ui/core/styles';

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
    useEffect(() => {
        axiosWithAuth().get("/api/friends")
        .then(res => {
            setFriends(res.data);    
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [])
    return ( 
    <div className={classes.container}>
        {friends.map( (friend, index) => {
            return <Friend {...friend}/>
        })}
    </div> );
}
 
export default FriendsList;
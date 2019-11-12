import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {axiosWithAuth} from "../../axiosAuth";


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(2),
        width: 300,
      },
    title: {
        color: "#ccc",
    },
    formContainer: {
        display: "flex",
        justifyContent: "center",
    },
    container: {
      backgroundColor: 'rgb(51,51,51)',
      maxWidth: 1200,
      width: "40%",
      marginTop: 50,
      paddingBottom: 25,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    color: '#bbb',
  },
  input: {
      color: '#bbb',
  }
}));

const FriendForm = ({handleFriends}) => {
    const [credentials, setCredentials] = useState( {
        name: "", 
        age: "",
        email: "",
        id: '',
    });
    const classes = useStyles();

    const handleChanges = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value,
        })
    }

    const handleIDInput = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: parseInt(e.target.value),
        })
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Adding Friend: ", credentials);
        axiosWithAuth().post("/api/friends", credentials)
        .then(res => {
            console.log("Added friend response: ",res);
            handleFriends(res.data);
        })
        .catch(err => console.log(err));
        
        
    }    
    return (  <div className={classes.formContainer}><form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
    <h1 className={classes.title}>Add Friend</h1>
    <div>
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Name"
        margin="normal"
        name="name"
        value={credentials.username}
        color="secondary"
        placeholder="name"
        variant="outlined"
        onChange={handleChanges}
        InputProps={{
            className: classes.input
          }}
          InputLabelProps={{
            className: classes.input
          }}
      />
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Age"
        margin="normal"
        name="age"
        value={credentials.username}
        color="secondary"
        placeholder="Age"
        variant="outlined"
        onChange={handleChanges}
        InputProps={{
            className: classes.input
          }}
          InputLabelProps={{
            className: classes.input
          }}
      />
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Email"
        margin="normal"
        name="email"
        value={credentials.username}
        color="secondary"
        placeholder="Email"
        variant="outlined"
        onChange={handleChanges}
        InputProps={{
            className: classes.input
          }}
          InputLabelProps={{
            className: classes.input
          }}
      />
      <TextField
        id="outlined-basic"
        name="id"
        className={classes.textField}
        label="ID"
        margin="normal"
        type="number"
        onChange={handleIDInput}
        value={credentials.password}
        color="secondary"
        placeholder="ID"
        variant="outlined"
        InputProps={{
            className: classes.input
          }}
          InputLabelProps={{
            className: classes.input
          }}
      />
      
    </div>
    <Button type="submit" variant="contained" className={classes.button}>
        Add Friend
      </Button>
  </form></div>);
}
 
export default FriendForm;
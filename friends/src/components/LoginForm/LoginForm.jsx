import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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

const LoginForm = () => {
    const [credentials, setCredentials] = useState( {
        username: "", 
        password: ""
    });
    const classes = useStyles();

    const handleChanges = e => {
        setCredentials({
            ...credentials, 
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Credentials: ", credentials);
        
    }    
    return (  <div className={classes.formContainer}><form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
    <h1 className={classes.title}>Log In</h1>
    <div>
      <TextField
        id="outlined-basic"
        className={classes.textField}
        label="Username"
        margin="normal"
        name="username"
        value={credentials.username}
        color="secondary"
        placeholder="Username"
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
        name="password"
        type="password"
        className={classes.textField}
        label="Password"
        margin="normal"
        onChange={handleChanges}
        value={credentials.password}
        color="secondary"
        placeholder="Password"
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
        Login
      </Button>
  </form></div>);
}
 
export default LoginForm;
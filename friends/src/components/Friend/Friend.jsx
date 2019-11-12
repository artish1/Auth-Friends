import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: "100%",
    backgroundColor: "rgb(51,51,51)",
    color: "#ccc",
    boxSizing: "border-box",
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
  },
  pos: {
    marginBottom: 12,
  },
  buttonTextColor: {
      color: "#eee",
  }
});

const Friend = ({name, email, age, handleRemove, id}) => {
    const classes = useStyles();

    
    return (  
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} >
            {email}
          </Typography>
          <Typography className={classes.pos} >
            Age: {age}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          onClick={() => handleRemove(id)}
          classes={{
              label: classes.buttonTextColor,
          }}
          fullWidth size="medium">Remove</Button>
        </CardActions>
      </Card>
      );
}
 
export default Friend;
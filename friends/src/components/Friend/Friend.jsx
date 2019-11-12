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
    boxSizing: "border-box",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Friend = ({name, email, age}) => {
    const classes = useStyles();
    return (  
        <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {email}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Age: {age}
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth size="medium">Remove</Button>
        </CardActions>
      </Card>
      );
}
 
export default Friend;
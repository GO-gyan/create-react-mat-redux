import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Counter.module.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AlarmIcon from '@material-ui/icons/Alarm';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
}));

const Counter = () => {
  const classes = useStyles();
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className={classes.root}>
    <Grid container spacing={2} className={classes.paper}>
      <Grid item xs={3}/>
      <Grid item xs={2}>
        <Fab color="secondary" aria-label="add" onClick={() => dispatch(increment())}>
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="h1" component="h2" className={styles.value}>
          {count}
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Fab color="primary" aria-label="add" onClick={() => dispatch(decrement())}>
          <RemoveIcon />
        </Fab>
      </Grid>
      <Grid item xs={3}/>
    </Grid>
    <Grid container spacing={2} className={classes.paper}>
    <Grid item xs={3}/>
      <Grid item xs={3}>
        <TextField
          id="outlined-basic"
          label="Set increment amount"
          variant="outlined"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
          startIcon={<AddIcon />}
          >
            Add Amount
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          
          startIcon={<AlarmIcon />}
          >
            Add Async
        </Button>
      </Grid>
    </Grid>
    <Grid container spacing={2} className={classes.paper} justify="center">
      <Grid item>
        <Link to="/test">Link to Test Page</Link>
      </Grid>
    </Grid>
    </div>
  );
};

export default Counter;

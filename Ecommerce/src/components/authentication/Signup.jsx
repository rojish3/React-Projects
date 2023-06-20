import React from 'react'
import '../../App.css';
import { Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import Login from './login';

const Signup = () => {
    const paperStyle = {padding:20, height:'70vh', width:400, margin:'20px auto'}
    const spaceBetween = {margin:'10px 0'}
  return (
    <div>
        <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center' marginBottom='30px'>
                        <h1>Signup</h1>
                    </Grid>
                    <TextField label='Full Name' placeholder='Enter Full Name' variant='standard' style={spaceBetween} fullWidth required />
                    <TextField label='Email' placeholder='Enter Email' variant='standard' style={spaceBetween} fullWidth required />
                    <TextField label='Password' placeholder='Enter password' type='password' style={spaceBetween} variant='standard' fullWidth required />
                    <TextField label='Confirm Password' placeholder='Enter password' type='password' style={spaceBetween} variant='standard' fullWidth required />

                    <Button type='submit' color='primary' variant='contained' style={spaceBetween} fullWidth>Sign Up</Button>

                    <Typography style={spaceBetween}>
                        Already have an account?
                        <Link rel={Login}>
                            Login
                        </Link>
                    </Typography>

                </Paper>
            </Grid>
    </div>
  )
}

export default Signup
import React from 'react';
import '../../App.css';
import { Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import Signup from './Signup';


const Login = () => {
    // const [showPassword, setShowPassword] = React.useState(false);

    // const handleClickShowPassword = () => setShowPassword((show) => !show);

    // const handleMouseDownPassword = (event) => {

    // event.preventDefault();
    // };
    const paperStyle = {padding:20, height:'60vh', width:400, margin:'20px auto'}
    const spaceBetween = {margin:'10px 0'}
    return (
        <div className='login'>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center' marginBottom='30px'>
                        <h1>Login</h1>
                    </Grid>
                    <TextField label='Email' placeholder='Enter Email' variant='standard' style={spaceBetween} fullWidth required />
                    <TextField label='Password' placeholder='Enter Password' type='password' style={spaceBetween} variant='standard' fullWidth required />

                    <FormControlLabel style={spaceBetween}
                        control={
                            <CheckBox 
                                name='checkedB'
                                color='primary'
                            />
                        }
                        label='Remember me'
                    />

                    <Button type='submit' color='primary' variant='contained' style={spaceBetween} fullWidth>Login</Button>

                    <Typography style={spaceBetween}>
                        <Link href="#">
                            Forget password?
                        </Link>
                    </Typography>
                    <Typography style={spaceBetween}>
                        Do you have an account?
                        <Link to={Signup}>
                            Signup
                        </Link>
                    </Typography>

                </Paper>
            </Grid>
        </div>

      );
}

export default Login;
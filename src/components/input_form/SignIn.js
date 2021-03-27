import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#f7b62a"
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const [user , setUser ] = useState("");
    const [email , setEmail ] = useState("");


    const updateName = (e) => {
        setUser(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }


    const GoToPage = (values) => {
        values.preventDefault();
        localStorage.setItem('name', user);
        localStorage.setItem('email', email);
        window.location.reload();
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
          <img src="https://bucket.mwsapp.com/laclasse/casiologo.svg" width="240" alt="Logo" />;

                <Typography component="h1" variant="h5">
                    Bienvenue à la compétition. / مرحبا بكم في المسابقة
                </Typography>
                <form onSubmit={GoToPage} className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Nom"
                        name="name"
                        autoFocus
                        onChange={updateName}
                    />
                    <TextField
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Adresse email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange = {updateEmail}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="#f7b62a"
                        className={classes.submit}
                    >
                        Commencez
                    </Button>
                </form>
            </div>
        </Container>
    );
}
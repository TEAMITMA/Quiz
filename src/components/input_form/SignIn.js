import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from '../../../utils/database';
const db = firebase.firestore();


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
    const [error , setError ] = useState("");



    const updateName = (e) => {
        setUser(e.target.value)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
    }


    const GoToPage = (values) => {
        values.preventDefault();

        const emails = [
       "mahmidostube@gmail.com",
       "abdennourhaddoudi@gmail.com",
       "aminesalhie1234@gmail.com",
       "ayoubsaidia21@gmail.com",
       "imadhulk12@gmail.com",
       "i.freedomheart111@gmail.com",
       "talsinohamed15@gmail.com",
       "ayoubakhraz57@gmail.com",
       "abdeldakirallah@gmail.com",
       "mohamedlwah2020@gmail.com",
]

        // emails.map( email => {
        //     db.collection('users-quiz-6').add({ email: email.toLowerCase() })
        //         .then(querySnapshot => {
        //         console.log(querySnapshot,"done")
        //         })
        // })

        db.collection('users-quiz-6').where("email", "==", email.toLowerCase())
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                if(data.length == 0){
                    setError("Vous ne faites pas partie du groupe autorisé à passer ce quiz.")
                }else{
                    db.collection('results-quiz-6').where("email", "==", email.toLowerCase())
                        .get()
                        .then(snap => {
                            const data = snap.docs.map(doc => doc.data());
                            if(data.length != 0){
                                setError("Vous avez déjà passé ce quiz.")
                            }else{

                                db.collection('status').where("start", "==", false)
                                    .get()
                                    .then(snap => {
                                        const data = snap.docs.map(doc => doc.data());
                                        if(data.length != 0){
                                            setError("En attente d’approbation de l’administrateur.")
                                        }else{
                                            localStorage.setItem('name', user);
                                            localStorage.setItem('email', email.toLowerCase());
                                            localStorage.setItem('quiz-6', "1");
                                            window.location.reload();
                                        }
                                    })

                                // localStorage.setItem('name', user);
                                // localStorage.setItem('email', email.toLowerCase());
                                // window.location.reload();
                            }
                        })

                    // if(data[0].isDone == true){
                    //     setError("You only give the quiz 1 time.")
                    // }else{
                    //     localStorage.setItem('name', user);
                    //     localStorage.setItem('email', email);
                    //     window.location.reload();
                    // }
                }
            });

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                                      <img src="https://bucket.mwsapp.com/laclasse/casiologo.svg" width="180px" alt="Logo" /> 

                <Typography component="h3" variant="h6">
                    Bienvenue à la compétition/مرحبا بكم في المسابقة
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
                    <h5 style={{color:"red"}}>{error}</h5>

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
                            <iframe width="420" height="345" src="https://www.youtube.com/embed/eR_yfT-NapU?autoplay=1" frameborder="0" allowfullscreen></iframe>
            </div>
        </Container>
    );
}
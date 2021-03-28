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

        // const emails = [  "AGOUJIL104@gmail.com", "abdellatifboumalek@gmail.com", "abdou.ouahbi@yahoo.fr",
        //     "abdsamadlmzdah@gmail.com",
        //     "abirbehja18@gmail.com",
        //     "adiladilel81@gmail.com",
        //     "ahmedtalsi05@gmail.com",
        //     "aitboukhlikismail@gmail.com",
        //     "aitmimounachraf875@gmail.com",
        //     "akrippahsalma@gmail.com",
        //     "anasbamah100@gmail.com",
        //     "antirnit04@gmail.com",
        //     "atanjiatnaji6@gmail.com",
        //     "ayakandoussi2019@gmail.com",
        //     "ayoub32k@gmail.com",
        //     "azizcompt06@gmail.com",
        //     "badrabbada777@gmail.com",
        //     "badrmouniri2004@gmail.com",
        //     "benazizakenza47@gmail.com",
        //     "bilalstout@gmail.com",
        //     "bouallakhafsa@gmail.com",
        //     "cchma544@gmail.com",
        //     "chaimaaarab03@gmail.com",
        //     "chaimaeelass98@gmail.com",
        //     "chiboubhamza85@gmail.com",
        //     "chokrichahid123@gmail.com",
        //     "dohahaouzi06@gmail.com",
        //     "fyassine911@gmail.com",
        //     "haitizineb9@gmail.com",
        //     "hajartassine@gmail.com",
        //     "hamdounofficielle1@gmail.com",
        //     "hamza.el2003morjani@gmail.com",
        //     "hamzajhabli7@gmail.com",
        //     "hassanmochtak767@gmail.com",
        //     "haytham.riouch@gmail.com",
        //     "hidayasahar12@gmail.com",
        //     "hinjabou@gmail.com",
        //     "hitimarc93@gmail.com",
        //     "hriguiamal@gmail.ma",
        //     "ibtissam.SA20@gmail.com",
        //     "idyassine97@gmail.com",
        //     "ikrambendriss0@gmail.com",
        //     "iliasshassidi@gmail.com",
        //     "imaneelabdi0@gmail.com",
        //     "imanegoubraim@gmail.com",
        //     "imanelaaraj23@gmail.com",
        //     "abajji39@gmail.com",
        //     "jamaloulkaid751@gmail.com",
        //     "8.9.2.1.bougoutaya@gmail.com",
        //     "kafellaighir@gmail.com",
        //     "karchaliihassan@gmail.com",
        //     "karimaarakrak9@gmail.com",
        //     "katy20are@gmail.com",
        //     "kawtarel1919@gmail.com",
        //     "khalidanass296@gmail.com",
        //     "kilwawer12341234@gmail.com",
        //     "kirakarkouzi2@gmail.com",
        //     "mahdiabcd20@gmail.com",
        //     "mahmidostube@gmail.com",
        //     "samir16si2003@gmail.com",
        //     "mohamedlwah2020@gmail.com",
        //     "imadfull2i@gmail.com",
        //     "telkouraichi@gmail.com",
        //     "idriss55boukadr@gmail.com",
        //     "salaheddinezahraoui8@gmail.com",
        //     "salahdinnebennys@gmail.com",
        //     "yasminabadi03@gmail.com",
        //     "eddhind2020@gmail.com",
        //     "ilhambaba2004@gmail.com",
        //     "zerardouamina@gmail.com",
        //     "yassineelguasry@gmail.com",
        //     "hajarhajarsadok6@gmail.com",
        //     "zinebzinebbenbaba03@gmail.com",
        //     "elhassani2003abdellah@gmail.com",
        //     "achrafeljid@gmail.com",
        //     "youncha.04@gmail.com",
        //     "aymoum2003@gmail.com",
        //     "eddebbarhikhadija@gmail.com",
        //     "hajarsadok6@gmail.com",
        // ]

        // emails.map( email => {
        //     db.collection('users').add({ email, isDone: false })
        //         .then(querySnapshot => {
        //
        //         });
        // })

        db.collection('users').where("email", "==", email)
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                if(data.length == 0){
                    setError("Vous ne faites pas partie du groupe autorisé à passer ce quiz.")
                }else{
                    db.collection('results').where("email", "==", email)
                        .get()
                        .then(snap => {
                            const data = snap.docs.map(doc => doc.data());
                            if(data.length != 0){
                                setError("Vous avez déjà passé ce quiz.")
                            }else{
                                localStorage.setItem('name', user);
                                localStorage.setItem('email', email);
                                window.location.reload();
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
                            <iframe width="420" height="345" src="http://www.youtube.com/embed/eR_yfT-NapU?autoplay=1" frameborder="0" allowfullscreen></iframe>
            </div>
        </Container>
    );
}
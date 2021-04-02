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

        // const emails = [
        //     {name: "Mohammad Jaber             ",email: "456mohamedsimo@gmail.com"},
        //     {name: "Asma Hibat Allah           ",email: "a.hibatallah.s2018@lydex.ma"},
        //     {name: "Amine Arfaoui              ",email: "aarfaoui617@gmail.com"},
        //     {name: "Salma aarouss              ",email: "aarouss146salma@gmail.com"},
        //     {name: "Dakir-Allah                ",email: "abdeldakirallah@gmail.com"},
        //     {name: "Abdelghani jetti           ",email: "abdelghanijetti12@gmail.com"},
        //     {name: "Abdellatif Boumalek        ",email: "Abdellatifboumalek@gmail.com"},
        //     {name: "Abdennour haddoudi         ",email: "abdennourhaddoudi@gmail.com"},
        //     {name: "Abderrafie Elghalam        ",email: "abder2003rafie@gmail.com"},
        //     {name: "Abderahim al ouriachi      ",email: "abderahimouriachi@gmail.com"},
        //     {name: "Abderrahmane hafdane       ",email: "abdo.abiido@gmail.com"},
        //     {name: "Adam EL YAAGOUBI           ",email: "adam3elyaagoubi@gmail.com"},
        //     {name: "Adnane Aidoudi             ",email: "adnanaidoudi@gmail.com"},
        //     {name: "Omar ait aabou             ",email: "aitaabouomar@gmail.com"},
        //     {name: "Abderrahim ait baha        ",email: "aitbahaabderrahim2@gmail.com"},
        //     {name: "Mohamed Ajhih              ",email: "ajhihsimo@gmail.com"},
        //     {name: "Ayoub alkhaldi             ",email: "alkhaldyaywb2@gmail.com"},
        //     {name: "Hamza friteh               ",email: "allhwatalhswn@gmail.com"},
        //     {name: "Hafed almekki              ",email: "allostora@gmail.ma"},
        //     {name: "Ahmed idmachiche           ",email: "aloneidma@gmail.com"},
        //     {name: "Amine houmine              ",email: "amine.houmine@gmail.com"},
        //     {name: "Mohamed amine erraji       ",email: "amine.m4a@icloud.com"},
        //     {name: "Amine al salhi             ",email: "aminesalhie1234@gmail.com"},
        //     {name: "Aymane allami              ",email: "aymaneallami0778@gmail.com"},
        //     {name: "Abdalilah BENYAICH         ",email: "benyaich.etude@gmail.com"},
        //     {name: "Bilal sebti                ",email: "bilalsebti2016@gmail.com"},
        //     {name: "Hafsa bouallak             ",email: "bouallakhafsa@gmail.com"},
        //     {name: "Ibrahim Bouzarrib          ",email: "bouzarrihab@gmail.com"},
        //     {name: "Nourredine echhayeb        ",email: "c2h0a0y3b@gmail.com"},
        //     {name: "Moad Ech-chadili           ",email: "chadili.mouad1@gmail.com"},
        //     {name: "Mohamed dyn                ",email: "dynmohamed5@gmail.com"},
        //     {name: "Mouhamed elbourkadi        ",email: "elbourkadimouhamed26@gmail.com"},
        //     {name: "Casio El hassani abdellah  ",email: "elhassani2003abdellah@gmail.com"},
        //     {name: "Casio rachida amrhar       ",email: "elmahrarrachida@gmail.com"},
        //     {name: "Youssef al ziadi           ",email: "ezzidanyy@gmail.com"},
        //     {name: "Fatima Mhamedi             ",email: "fatimamhamedu21@gmail.com"},
        //     {name: "Oussama Bekri              ",email: "fbekri00@gmail.com"},
        //     {name: "Abdelmonam Foulane         ",email: "foulanea@gmail.ma"},
        //     {name: "Casio Hajar tassine        ",email: "hajartassine@gmail.com"},
        //     {name: "Hamza Zakri                ",email: "hamzakri2020@gmail.com"},
        //     {name: "Chaima alhyane             ",email: "hsantamri2019@gmail.com"},
        //     {name: "Mohamed zaamou             ",email: "i.freedomheart111@gmail.com"},
        //     {name: "Ibrahim aarab              ",email: "ibrahimaarabdotcom@gmail.com"},
        //     {name: "Rafik ait ichou            ",email: "ichourafik011@gmail.com"},
        //     {name: "Idriss boukadr             ",email: "idriss55boukadr@gmail.com"},
        //     {name: "Casio Imad agjoud          ",email: "imadhulk12@gmail.com"},
        //     {name: "Imane Souilah              ",email: "isouilah59@gmail.com"},
        //     {name: "Youssef Benaissa           ",email: "kharoubaa2011@gmail.com"},
        //     {name: "Casio ibrahim lasfar       ",email: "lasfaribrahim2003@gmail.com"},
        //     {name: "Mohamed ait elrhazal       ",email: "maitelrhazal@gmail.com"},
        //     {name: "Mohamed ait elrhazal       ",email: "maitelrhazal@gmail.com"},
        //     {name: "Ahmed makroum              ",email: "makroum294@gmail.com"},
        //     {name: "Manal Maazouzi             ",email: "manalmaazouzi83@gmail.com"},
        //     {name: "Marwane elkhazzari         ",email: "marwaneelkhazzari@gmail.com"},
        //     {name: "Marouane khazzari          ",email: "mc2003marwane@gmail.com"},
        //     {name: "maiti mohammed amine       ",email: "med20201912@gmail.com"},
        //     {name: "Mohammad Dahby             ",email: "mededdahby1@gmail.com"},
        //     {name: "Mohammed ourqui            ",email: "medourkiya2021@gmail.com"},
        //     {name: "Elmahdi saidi              ",email: "mehdi.bounoh@gmail.com"},
        //     {name: "Mehdi cherefi              ",email: "mehdicherefi123@gmail.com"},
        //     {name: "Mehdi majid                ",email: "mehdimajid763@gmail.com"},
        //     {name: "Mehdi elhaoul              ",email: "mehdimehditaha@gmail.com"},
        //     {name: "Meryem ouadi               ",email: "meryem7ou@gmail.com"},
        //     {name: "Meryem Aoutem              ",email: "mimiloka532@gmail.com"},
        //     {name: "Mohamed hmaoud             ",email: "mohamedhmaoud@gmail.com"},
        //     {name: "Mohamed Rayan El Fadi      ",email: "mohamedrayanelfadi@gmail.com"},
        //     {name: "El Mostafa Aneddame        ",email: "mostafaaneddame1.1@gmail.com"},
        //     {name: "Oussama moustik            ",email: "moustikoussama17@gmail.com"},
        //     {name: "Najwa Mourabet             ",email: "mrabetnajwa24@gmail.com"},
        //     {name: "Nada sari                  ",email: "nadanadita1705@gmail.com"},
        //     {name: "Salma Nafiaa               ",email: "nafiaasalma@gmail.com"},
        //     {name: "Casio narjiss              ",email: "narjisskaza@gmail.com"},
        //     {name: "El aceb Nouhaila           ",email: "nouhailaelaceb1@gmail.com"},
        //     {name: "Nourabenhssine             ",email: "nourabenhssine35@gmail.com"},
        //     {name: "noureddine belkbir         ",email: "noureddine66@gmail.com"},
        //     {name: "Noureddine blekbir         ",email: "noureddineblkbir66@gmail.com"},
        //     {name: "Nour houda Demnati         ",email: "nourhoudademnati@gmail.com"},
        //     {name: "Kamal Ouhssata             ",email: "ouhssatakamal@gmail.com"},
        //     {name: "Oumaima hargal             ",email: "oumaimahargal2019@gmail.com"},
        //     {name: "Oumayya Bouziane           ",email: "oumayya.bouziane06@gmail.com"},
        //     {name: "Kadraoui zaïneb            ",email: "oussamakadraoui123@gmail.com"},
        //     {name: "Saad belkoutbi             ",email: "saadbelkoutbi88@gmail.com"},
        //     {name: "Mohammed amine Sahal       ",email: "sahalmohammedamine@gmail.com"},
        //     {name: "Said Anass                 ",email: "said.motik12@gmail.com"},
        //     {name: "Said barhoune              ",email: "saidbarhoune12345@gmail.com"},
        //     {name: "Salim Bassalh              ",email: "salimbassalh@gmail.com"},
        //     {name: "Salim Elaychi              ",email: "salimelaychi16@gmail.com"},
        //     {name: "Samir Swirki               ",email: "samirswirki4@gmail.com"},
        //     {name: "Soumeya affoussi           ",email: "sayatazraibi@gmail.com"},
        //     {name: "Siham kalach               ",email: "sihamkalach637@gmail.com"},
        //     {name: "olayman oumouou            ",email: "solaymanoumouou@gmail.com"},
        //     {name: "Souhaila ramdani           ",email: "souhailarm0@gmail.com"},
        //     {name: "Tarik almoussawi           ",email: "tarik2004el@gmail.com"},
        //     {name: "Walid Fankouch             ",email: "walidfank@gmail.com"},
        //     {name: "Akhal wiame                ",email: "wiameakhal2003@gmail.com"},
        //     {name: "Wissal essayouti           ",email: "wissalessayouti@gmail.com"},
        //     {name: "Idriss boukadr             ",email: "www.idriss55boukadr@gmail.com"},
        //     {name: "Yassine Otmane             ",email: "yassinotman386@gmail.com"},
        //     {name: "Yassir Lili                ",email: "yassirlili25@gmail.com"},
        //     {name: "Yassmine Mokarram          ",email: "ymine8041@gmail.com"},
        //     {name: "Yoness edrissi             ",email: "yonessledrissi2020@gmail.com"},
        //     {name: "Youssef Bouhtouch          ",email: "youssefbouhtouch@gmail.com"},
        //     {name: "Youssef Lamri              ",email: "yousseflamri0777@gmail.com"},
        //     {name: "Zakaria boulahlib          ",email: "zakariaboulahlib6@gmail.com"},
        //     {name: "Zakaria Chliyah            ",email: "zakariachliyah888@gmail.com"},
        //     {name: "Zakaria farhi              ",email: "zakariafarahi521@gmail.com"},
        //     {name: "Zakaria moussafir          ",email: "zakariamoussafir6@gmail.com"},
        //     {name: "Zakaria bechkala           ",email: "zbechkala@gmail.com"},
        //     {name: "zineb benbaba              ",email: "zinebbenbaba03@gmail.com"},
        //
        // ]


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
        //     db.collection('users-quiz-2').add({ email: email.email, name: email.name })
        //         .then(querySnapshot => {
        //
        //         })
        // })

        db.collection('users-quiz-2').where("email", "==", email.toLowerCase())
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                if(data.length == 0){
                    setError("Vous ne faites pas partie du groupe autorisé à passer ce quiz.")
                }else{
                    db.collection('results-quiz-2').where("email", "==", email.toLowerCase())
                        .get()
                        .then(snap => {
                            const data = snap.docs.map(doc => doc.data());
                            if(data.length != 0){
                                setError("Vous avez déjà passé ce quiz.")
                            }else{
                                localStorage.setItem('name', user);
                                localStorage.setItem('email', email.toLowerCase());
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
                            <iframe width="420" height="345" src="https://www.youtube.com/embed/eR_yfT-NapU?autoplay=1" frameborder="0" allowfullscreen></iframe>
            </div>
        </Container>
    );
}
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

        const emails = [ "n@N.n", "M@m.M", "k@K.k"]

        // const emails = [
        //     "Atanjiatnaji6@gmail.com",
        //     "ahmedkitari50@gmail.com",
        //     "ihssaneberquecha@gmail.com",
        //     "mohamedlbhjaouy@gmail.com",
        //     "Saidbarhoune12345@gmail.com",
        //     "adamfennan954@gmail.com",
        //     "Adamrochdi.studies@gmail.com",
        //     "aedassamam.abidallah912@gmail.com",
        //     "ait.nasser.2003@gmail.com",
        //     "Aitounejjarsana017@gmail.com",
        //     "Almalhaahmed@gmail.ma",
        //     "amaoui.pro@gmail.com",
        //     "Amine.m4a@icloud.com",
        //     "aminenamousse@gmail.com",
        //     "anascharafdine28@gmail.com",
        //     "Anasriahi971@gmail.com",
        //     "andazizsallame@gmail.com",
        //     "angaryounes2002@gmail.com",
        //     "arramaelyass@gmail.com",
        //     "assiamachhour2@gmail.com",
        //     "astrophds@gmail.com",
        //     "ayajaafar1919@gmail.com",
        //     "ayoub.hamza1067@gmail.com",
        //     "ayoub222chater@gmail.com",
        //     "ayoubsaidia21@gmail.com",
        //     "ayuobaguilo145@gmail.com",
        //     "azdinealaboudi@gmail.com",
        //     "azizcherki762@gmail.com",
        //     "bab.1503.med@gmail.com",
        //     "bahaeeddineachaach@gmail.com",
        //     "Bassouanas1@gmail.com",
        //     "belgholanas@gmail.com",
        //     "berkayouness456@gmail.com",
        //     "mohammedelahmadi976@gmail.com",
        //     "bikoamina40@gmail.com",
        //     "bilalmalloul12@gmail.com",
        //     "blilabdelilah1@gmail.com",
        //     "bmo923763@gmail.com",
        //     "boutiaya@gmail.com",
        //     "c2h0a0y3b@gmail.com",
        //     "chaimaahariri20030920@gmail.com",
        //     "chaimaaradi2001@gmail.com",
        //     "Chainedeprohacker@gmail.com",
        //     "chalaeajana@gmail.com",
        //     "chetibidoha@gmail.com",
        //     "chkradobl@gmail.com",
        //     "douaaidelarje@gmail.com",
        //     "douaamaik43@gmail.com",
        //     "douaeelhouiti@gmail.com",
        //     "dynmohamed5@gmail.com",
        //     "eddouimi@gmail.com",
        //     "elaidi193@gmail.com",
        //     "elamiriimane1@gmail.com",
        //     "elamri983@gmail.com",
        //     "elassaliamina1975@gmail.com",
        //     "elbourkadimouhamed26@gmail.com",
        //     "elbouzaidisawsan@gmail.com",
        //     "elfarqileila@gmail.com",
        //     "elghorssikhadija@gmail.com",
        //     "elhamidi.ch@gmai.com",
        //     "elmahrarrachida@gmail.com",
        //     "ennadirchaime@gmail.com",
        //     "ettaouils015@gmail.com",
        //     "ezzahrafadyl@gmail.com",
        //     "fatiaamou@gmail.com",
        //     "Fatihamosnan2003@gmail.com",
        //     "fatimanouha321@gmail.com",
        //     "fatimazahrabougtob.2020@gmail.com",
        //     "fbekri00@gmail.com",
        //     "ganounefatimazahra228@gmail.com",
        //     "gfdjvhf@gmail.com",
        //     "h.jaafari2003@gmail.com",
        //     "Hajar.labiad34@gmail.com",
        //     "hajarbouh20@gmail.com",
        //     "hajarelyoubi03@gmail.com",
        //     "hakerchow@gmail.com",
        //     "halima.jaad30@gmail.com",
        //     "halimambirikat@gmail.com",
        //     "hamzaelkaouii04@gmail.com",
        //     "hamzaofficielle1@gmail.com",
        //     "hasantamri2019@gmail.com",
        //     "hasnaaessounaini4@gmail.com",
        //     "hatim.nini2@gmail.com",
        //     "hichamkhaled112@gmail.com",
        //     "hirchisalma@gmail.com",
        //     "hm3029826@gmail.com",
        //     "houdachal88.18@gmail.com",
        //     "houdaettaouil1234@gmail.com",
        //     "houdamouhssine2003@gmail.com",
        //     "hssissin68@gaiml.com",
        //     "ibrahimaarabdotcom@gmail.com",
        //     "ibrahimbalamy9@gmail.com",
        //     "ibtissamekhalis03@gmail.com",
        //     "iguiderhamza2@gmail.com",
        //     "ihssaneberquecha@gmail.com",
        //     "ikerayoub0@gmail.com",
        //     "ilias.kourti@gmail.com",
        //     "ilyas.chchlfi123@gmail.com",
        //     "imad.bn111@gmail.com",
        //     "imadhulk12@gmail.com",
        //     "Irissaw6503@gmail.com",
        //     "Jebbariamine33@gmail.com",
        //     "jhablihasna@gmail.com",
        //     "jhilalhassan98@gmail.com",
        //     "Kaoutharelmachkouri2003@gmail.com",
        //     "Kawtharaitelhousseine@gmail.com",
        //     "kenzazahar17@gmail.com",
        //     "lamiaesadiq@gmail.com",
        //     "lasfaribrahim2003@gmail.com",
        //     "lhcen95.bahmed@gmail.com",
        //     "love.123nada.123@gmail.com",
        //     "marocainsoufiane219@gmail.com",
        //     "marwanekaraoui20@gmail.com",
        //     "maryamsaidi1278@gmail.com",
        //     "mastapha.dafa@gmail.com",
        //     "medoxtoto@gmail.com",
        //     "meryemeddehbi32@gmail.com",
        //     "meryemjamel90@gmail.com",
        //     "mimiloka532@gmail.com",
        //     "mostafabelaaroussi345@gmail.com",
        //     "mrabetnajwa24@gmail.com",
        //     "naimaelgouid@gmail.com",
        //     "namri505@gmail.com",
        //     "narjisskaza@gmail.com",
        //     "nazimarzougui@gmail.com",
        //     "nzakaria026@gmail.com",
        //     "olouazri@gmail.com",
        //     "ouhmarwa@gmail.com",
        //     "oulimea@gmail.com",
        //     "oussamaelgazar@gmail.com",
        //     "oussamamidiouri@gmail.com",
        //     "oussamatrk28@gmail.com",
        //     "outmank49@gmail.com",
        //     "R130105078@GMAIL.COM",
        //     "sadaayoub424@gmail.com",
        //     "salmaghaddou@gmail.com",
        //     "salmarouigua@gmail.com",
        //     "saloua.binizi.01@gmail.com",
        //     "sara123badihi@gmail.com",
        //     "saraouatik1@gmail.com",
        //     "soomin7h7@gmail.com",
        //     "soufianfouad30022002@gmail.com",
        //     "ssadiknabil413@gmail.com",
        //     "tahourfadwa1@gmail.com",
        //     "usatantan6@gmail.com",
        //     "www.oussamakadraoui123@gmail.com",
        //     "yakhrtou@gmail.com",
        //     "younesouaddouh41@gmail.com",
        //     "yy0497555@gmail.com",
        //     "zouhir111111111@gmail.com",
        //     "mouadn773@gmail.com",
        //     "Soufyaneelgharnili@gmail.com",
        //     "talsinohamed15@gmail.com",
        //     "Noureddine66@gmail.com",
        //     "abdo5.cabitano@gmail.com",
        //     "Mohamedhmaoud@gmail.com",
        //     "hakianas64@gmail.com",
        //     "Mohamedamineaswab@gmail.com",
        //     "ouahbi.said.ouahbi@gmail.com",
        //     "benajjarreda@gmail.com",
        //     "oumaimahargal2019@gmail.com",
        //     "hasantamri2019@gmail.com",
        //     "elmahdi.elghazi03@gmail.com",
        //     "elhassani2003abdellah@gmail.com",
        //     "foulanea@gmail.com",
        //     "aloneidma@gmail.com",
        //     "Wiameakhal2003@gmail.com",
        //     "alahappy2@gmail.com",
        //     "hamzakri2020@gmail.com",
        //     "Ikrambendriss0@gmail.com",
        //     "Manalmaazouzi83@gmail.com",
        //     "nassimboucraa92@gmail.com",
        //     "Otmanzirari99@gmail.com",
        //     "ichourafik011@gmail.com",
        //     "Mouhssinefargani@gmail.com",
        //     "sayatazraibi@gmail.com",
        //     "Taoufikdaoudi0@gmail.com",
        //     "Tarik2004el@gmail.com",
        //     "wissalessayouti@gmail.com",
        //     "Youneshadad76@gmail.com",
        //     "Yousseflamri0777@gmail.com",
        //     "zc.zakariachoukri23@gmail.com",
        //     "amirzaoula81@gmail.com",
        //     "khalidbouzriba1@gmail.com",
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

        emails.map( email => {
            db.collection('users-quiz-4').add({ email: email.toLowerCase() })
                .then(querySnapshot => {
                console.log("done")
                })
        })

        db.collection('users-quiz-4').where("email", "==", email.toLowerCase())
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                if(data.length == 0){
                    setError("Vous ne faites pas partie du groupe autorisé à passer ce quiz.")
                }else{
                    db.collection('results-quiz-4').where("email", "==", email.toLowerCase())
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
                                            localStorage.setItem('quiz-4', "1");
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
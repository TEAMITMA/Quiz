import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
import { saveAs, encodeBase64 } from '@progress/kendo-file-saver';
class Popup extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Au revoir',
            text: 'This is a quiz application built by Laclasse. <br /><br />',
            buttonText: 'Start the quiz' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });

            // alert("START THE QUIZ");
            this.props.startQuiz();
        } else {


            const dataURI = "data:text/plain;base64," + encodeBase64("Hello World!");
            saveAs(dataURI, "./test.txt");
            // this.savedData("datadashfdaskjfjkdgv","this")
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('results');
            //alert("FINISHED QUIZ");
            location.reload();// restart the application
        }
    }

     savedData(jsonData,filename) {
        console.log("creating")
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
         console.log("creating1")

         const link = document.createElement('a');
        link.download = `./${filename}.json`;
         console.log("creating",link)

         link.href = url;
         link.click();
         console.log("creating done",link)

     }
     
    createMarkup(text) {
        return {__html: text};
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: "Merci de votre participation. <br /> Veuillez revenir au live pour l'annonce des gagants <br />"
        })
    }

    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>{title}</h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                                <span onClick={this.popupHandle}>
                                {/**
                                    <MyButton
                                        text={buttonText}
                                        bck='#FF9800'
                                        color='#fff'
                                    />
                                    **/}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 


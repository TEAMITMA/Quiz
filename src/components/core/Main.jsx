import React, { Component } from 'react';
import data from '../questions_data/data';
import Answers from './Answers.jsx';
import Popup from './Popup.jsx';
import firebase from '../../../utils/database'
const db = firebase.firestore();
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'none'
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    componentWillMount() {
        let { count } = this.state;
        this.insertData(count);
    }

    insertData(count) {
        this.setState({
            question: data[count].question,
            questionAR: data[count].questionAR,
            answers: [  data[count].answers[0], 
                        data[count].answers[1], 
                        data[count].answers[2], 
                        data[count].answers[3] 
                    ],
            correct: data[count].correct,
        });
    }


    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }
    
    nextQuestion() {
        this.checkEquality()

        let { count, total} = this.state;
        this.setState({
            count: this.state.count + 1
        });

        if(count === total){
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            this.insertData(count);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            count: 0
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }

    checkEquality() {

        let { count, total, score} = this.state;
        if (count == total) {
            let name = localStorage.getItem("name");
            let email = localStorage.getItem("email");
            let results = localStorage.getItem("results");
            results = JSON.parse(results)
            let removedItems = results.splice(1, 20)
            // console.log(results)
            // if(results[0] == 0) {
            //     results = results.unshift(0)
            // }else{
            //     results = results.unshift(1)
            // }
            let sc = 0
            removedItems.map(result => {
                // console.log(result)
                if(result == 1){
                    sc = sc+1
                }
            })
            db.collection('results')
                .add({ createdAt: new Date(Date.now()),
                name , email, results: removedItems , numbers: `${sc}/${total}`, score:sc })
                .then(querySnapshot => {
                    localStorage.removeItem('name');
                    localStorage.removeItem('email');
                    localStorage.removeItem('results');
            });

        }
    }

  render() {

    let { count, total, question ,questionAR, answers, correct, showButton, questionAnswered, displayPopup, score} = this.state;

    return (
      <div className="container">
       
       <Popup style={{display: displayPopup}} 
             score={score} 
             total={total} 
             startQuiz={this.handleStartQuiz}
        />
          {/*{console.log({count, question})}*/}

        <div className="row">
            <div className="col-lg-12 col-md-10">
                <div id="question">
                    <h4 className="bg-light">Question {count}/{total}</h4>
                    <p>{question}</p>
                    <p dir='rtl'>{questionAR}</p>
                </div>

                <Answers 
                    answers={answers}
                    correct={correct}
                    showButton={this.handleShowButton} 
                    isAnswered={questionAnswered}
                    increaseScore={this.handleIncreaseScore}
                />
                {
                    (count < total+1) ?
                        <div id="submit">
                            {showButton ?
                                <button className="fancy-btn"
                                        onClick={this.nextQuestion()}>
                                    {count === total ? 'Finish quiz' : 'Next question'}
                                </button> : <span></span>}
                        </div>
                        :""
                }
            </div>
        </div>


      </div>
    )
  }
}
export default Main;
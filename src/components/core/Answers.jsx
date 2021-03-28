import React, {Component} from 'react';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '']
        }

        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }


    checkAnswer(e) {
        let { isAnswered } = this.props;

        // console.log("hi", isAnswered)

        if(!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = this.props;
            let answer = Number(elem.dataset.id);
            let updatedClassNames = this.state.classNames;

            if(answer === correct){
                updatedClassNames[answer-1] = 'right';
                let results = localStorage.getItem("results");
                if(results){
                    results = JSON.parse(results)
                    results.push(1);
                    localStorage.setItem('results', JSON.stringify(results));
                }else{
                    localStorage.setItem('results', "[1]");
                }
                increaseScore();
            }
            else {
                updatedClassNames[answer-1] = 'right';
                let results = localStorage.getItem("results");
                if(results){
                    results = JSON.parse(results)
                    results.push(0);
                    localStorage.setItem('results', JSON.stringify(results));
                }else{
                    localStorage.setItem('results', "[0]");
                }
            }

            this.setState({
                classNames: updatedClassNames,

            })

            setTimeout(() => {
                this.clearClasses();
                this.props.showButton();
                //console.log("IN SET Timeout")
            }, 500);
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '']
        })

    }
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        return (

            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} 
                        className={classNames[0]} data-id="1">
                    <span>A</span> 
                    <p>{answers[0]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={classNames[1]} data-id="2">
                    <span>B</span> 
                    <p>{answers[1]}</p></li>

                    {answers[2] &&
                    < li onClick={this.checkAnswer}
                        className={classNames[2]} data-id="3">
                        <span>C</span>
                        <p>{answers[2]}</p></li>
                        }
                    {answers[3] &&
                        <li onClick={this.checkAnswer}
                            className={classNames[3]} data-id="4">
                            <span>D</span>
                            <p>{answers[3]}</p></li>}
                </ul>
            </div>
        );
    }
}

export default Answers
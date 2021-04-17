import React from 'react';
import ReactDOM from 'react-dom';
import './resources/styles.css';
import { Router } from 'react-router-dom';
import Header from './components/header_footer/Header.jsx';
import Main from './components/core/Main.jsx';
import Footer from './components/header_footer/Footer.jsx';
import Form from './components/input_form/SignIn';

class App extends React.Component {
    constructor(props) {
        super(props);
        window.onunload = function () {
            localStorage.removeItem('results');
        }
    }

    render() {
        let name = localStorage.getItem("name");
        let email = localStorage.getItem("email");
        let quiz = localStorage.getItem("quiz-4");
        return (
        <div className="App">
            <Header/>
            {
                (name && email && quiz)?
                    <Main/>:
                    <Form/>
            }
            <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

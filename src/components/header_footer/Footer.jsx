import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'50px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Quiz</div>
                <div className="footer_copyright">
                    Made By
                <a href="https://compte.laclasse.ma/laclassepro" target="_blank"           rel="noopener noreferrer"> Laclasse Pro
                </a>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop:'50px' }}>
            <Fade delay={500}>
                <div className="footer_copyright">
                    Made By
                <a href="https://laclasse.ma/" target="_blank"           rel="noopener noreferrer"> Laclasse Team
                </a>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
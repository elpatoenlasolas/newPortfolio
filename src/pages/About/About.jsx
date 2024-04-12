import { Link } from "react-router-dom";
import './About.css';

function About() {
    return (
        <>
        <div className="abt-container">
            <div className="abt-text">
                <h2>A little more about me...</h2>
                    <p>I was born in Argentina, 35 years ago. I lived most of my life in a small town in the coast of Buenos Aires called Pinamar.</p>
                    <p>Most of my days where about music, surfing (during summer), skateboarding (during winter), books, and hanging out with my twin brother and friends in the nature.
                    At the age of 13 we received our first computer - we became a bit addicted to it during the golden age of Napster and MSN Messenger.
                    I got to taste my first glimpse of programming while learning the basics of IT with Windows 98 and XP (my fave forever).</p>
                    <p>Fast forward to current years, I studied sound recording in Buenos Aires, and screen & media in Sydney, Australia.
                    In 2020 started educating myself in blockchain and cryptocurrencies. 
                    This year I decided it was time to improve my skills and develop a career I was very fond of: Web Development.</p>
                    <p>I'm currently studying a certificate in Front-End Engineering in <Link to="https://www.codecademy.com"><strong>CodeCademy.com</strong></Link> and started a bootcamp to study Solidity.</p>
            </div>
        </div>
    </>
    )
};

export default About;
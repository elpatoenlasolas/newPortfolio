import { Link } from "react-router-dom";
import './About.css';
import Pato from "../../images/pato-pfp.png";

function About() {
    return (
        <>
        <div className="abt-container">
            <div className="abt-text">
                <h2>A little more about me...</h2>
                <br />
                    <p>I was born in Argentina, 35 years ago. I lived most of my life in a small town in the coast of Buenos Aires called Pinamar.</p>
                    <p>Most of my days where about music, surfing (during summer), skateboarding (during winter), books, and hanging out with my twin brother and friends in the nature.< br/>
                    At the age of 13 we received our first computer - we became a bit addicted to it during the golden age of Napster and MSN Messenger.
                    I got to taste my first glimpse of programming while learning the basics of IT with Windows 98 and XP (my fave forever).</p>
                    <p>Fast forward to current years, I studied sound recording in Buenos Aires, and screen & media in Sydney, Australia.</p>
                    <br />
                    <p>I have recently finished my certificate in Front-End Engineering in <Link to="https://www.codecademy.com"><strong>CodeCademy.com</strong></Link>.</p>
            </div>
            <div className="pfp">
                <img src={Pato} alt="patricio funes"/>
            </div>
        </div>
    </>
    )
};

export default About;
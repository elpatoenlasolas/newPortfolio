import { Link } from "react-router-dom";
import './PortfolioCard.css';
import katoWeb from '../../images/kato-web.png';


function Card() {
    return (
    <>

    <div className="cards-wrapper">
        <div className="columns is-desktop">
   
            <div className="column">
                <div class="card-container">
                
                    <div class="img-container">
                        <img src="https://wabi-sabi.digital/img/Banners/Home-Banner-3.webp" alt="Patricio Funes" />
                    </div>
                    <div class="card-feature-type">Argentina</div>
                    <div class="title"><h1>WABISABI</h1></div>
                    <div class="info">
                        <p>From web development to full a brand design, 
                        this agency will make you to appreciate the beauty that lies in simplicity.</p>
                    </div>
                    <div class="website"><Link to="https://wabi-sabi.digital" target="_blank">Website</Link></div>

                </div>
            </div>

            <div className="column">
                <div class="card-container">

                    <div class="img-container">
                        <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwabi-sabi.digital%2Fimg%2Fsitstay%2F1-Proyect-banner-Sitstay.webp" alt="Patricio Funes" />
                    </div>
                    <div class="card-feature-type">Australia</div>
                    <div class="title"><h1>SitStay</h1></div>
                    <div class="info">
                        <p>Sit Stay Dog School provides animal training services in Sydney's Eastern Suburbs with group puppy classes available in Bondi, Coogee and Vaucluse.</p>
                    </div>
                    <div class="website"><Link to="https://sitstay.com.au" target="_blank">Website</Link></div>

                </div>
            </div>

            <div className="column">
                <div class="card-container">

                    <div class="img-container">
                        <img src="https://static.wixstatic.com/media/9431e5_2d66ca5e18554445892c89150a29f641~mv2.webp" alt="Patricio Funes" />
                    </div>
                    <div class="card-feature-type">Estonia</div>
                    <div class="title"><h1>USTA</h1></div>
                    <div class="info">
                        <p>Sit Stay Dog School provides animal training services in Sydney's Eastern Suburbs with group puppy classes available in Bondi, Coogee and Vaucluse.</p>
                    </div>
                    <div class="website"><Link to="https://usta.ee" target="_blank">Website</Link></div>

                </div>
            </div>

            <div className="column">
                <div class="card-container">

                    <div class="img-container">
                        <img src={katoWeb} alt="Kart Pehk Website" />
                    </div>
                    <div class="card-feature-type">Estonia</div>
                    <div class="title"><h1>Kärt Pehk</h1></div>
                    <div class="info">
                        <p>Kärt Pehk is a qualified midwife, breastfeeding consultant, beauty therapist, and masseuse.</p>
                    </div>
                    <div class="website"><Link to="https://kpehk.eu" target="_blank">Website</Link></div>

                </div>
            </div>

        </div>
    </div>
        
       </>
    )
};

export default Card;
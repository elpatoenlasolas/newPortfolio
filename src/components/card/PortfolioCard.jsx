import { Link } from "react-router-dom";
import katoWeb from '../../images/kato-web.png';


function Card() {
    return (
    <>

    <div className="cards-wrapper">
        <div className="columns is-desktop">
   
            <div className="column">
                <div className="card-container">
                
                    <div className="img-container">
                        <img src="https://wabi-sabi.digital/img/Banners/Home-Banner-3.webp" alt="Patricio Funes" />
                    </div>
                    <div className="card-feature-type">Argentina</div>
                    <div className="subtitle"><h1>WABISABI</h1></div>
                    <div className="info info-p">
                        <p>From web development to full a brand design, 
                        this agency will make you to appreciate the beauty that lies in simplicity.</p>
                    </div>
                    <div className="website sec-link"><Link to="https://wabi-sabi.digital" className="sec-link" target="_blank">Website</Link></div>

                </div>
            </div>

            <div className="column">
                <div className="card-container">

                    <div className="img-container">
                        <img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwabi-sabi.digital%2Fimg%2Fsitstay%2F1-Proyect-banner-Sitstay.webp" alt="Patricio Funes" />
                    </div>
                    <div className="card-feature-type">Australia</div>
                    <div className="subtitle"><h1>SitStay</h1></div>
                    <div className="info info-p">
                        <p>Sit Stay Dog School provides animal training services in Sydney's Eastern Suburbs with group puppy classes available in Bondi, Coogee and Vaucluse.</p>
                    </div>
                    <div className="website sec-link"><Link to="https://sitstay.com.au" className="sec-link" target="_blank">Website</Link></div>

                </div>
            </div>

            <div className="column">
                <div className="card-container">

                    <div className="img-container">
                        <img src="https://static.wixstatic.com/media/9431e5_2d66ca5e18554445892c89150a29f641~mv2.webp" alt="Patricio Funes" />
                    </div>
                    <div className="card-feature-type">Estonia</div>
                    <div className="subtitle"><h1>USTA</h1></div>
                    <div className="info info-p">
                        <p>USTA Tennis Academy is Estonia's leading tennis school, boasting the highest enrollment and exceptional competitive achievements.</p>
                    </div>
                    <div className="website"><Link to="https://usta.ee" className="sec-link" target="_blank">Website</Link></div>

                </div>
            </div>

            <div className="column">
                <div className="card-container">

                    <div className="img-container">
                        <img src={katoWeb} alt="Kart Pehk Website" />
                    </div>
                    <div className="card-feature-type">Estonia</div>
                    <div className="subtitle"><h2>Kärt Pehk</h2></div>
                    <div className="info info-p">
                        <p>Kärt Pehk is a qualified midwife, breastfeeding consultant, beauty therapist, and masseuse.</p>
                    </div>
                    <div className="website"><Link to="https://kpehk.eu" className="sec-link" target="_blank">Website</Link></div>

                </div>
            </div>

        </div>
    </div>
        
       </>
    )
};

export default Card;
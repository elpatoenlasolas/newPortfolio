import { Link } from "react-router-dom";
import './ProjectCard.css';


function ProjectCard() {
    return (
    <>

    <div className="cards-wrapper">
        <div className="columns is-desktop">
   
            <div className="column">
                <div className="card-container">
                
                    <div className="img-container">
                        <img src="https://i0.wp.com/www.techomoro.com/wp-content/uploads/2019/11/javascript-736400-1.png?fit=1854%2C941&ssl=1" alt="Patricio Funes" />
                    </div>
                    <div className="card-feature-type">JavaScript</div>
                    <div className="subtitle"><h1>Fun Random JS</h1></div>
                    <div className="info info-p">
                        <p>Fun project of random JS implementations with DOM manipulation.</p>
                    </div>
                    <div className="website"><Link to="https://elpatoenlasolas.github.io/fun-random-js/" className="sec-link" target="_blank">Deployment</Link></div>
                    <div className="website"><Link to="https://github.com/elpatoenlasolas/fun-random-js" className="sec-link" target="_blank">Repository</Link></div>
                
                </div>
            </div>

            <div className="column">
                <div className="card-container">

                    <div className="img-container">
                        <img src="https://mediaindia.eu/wp-content/uploads/2023/01/Untitled-design-44-1-1.png" alt="Kart Pehk Website" />
                    </div>
                    <div className="card-feature-type">JavaScript</div>
                    <div className="subtitle"><h1>Movie Finder</h1></div>
                    <div className="info info-p">
                        <p>This is a very simple Movie recommendation Web App, that fetches information from an public API that stores updated information.</p>
                    </div>
                    <div className="website"><Link to="https://elpatoenlasolas.github.io/movie-finder/" className="sec-link" target="_blank">Deployment</Link></div>
                    <div className="website"><Link to="https://github.com/elpatoenlasolas/movie-finder" className="sec-link" target="_blank">Repository</Link></div>

                </div>
            </div>

            <div className="column">
                <div className="card-container">

                    <div className="img-container">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1625576291410/by9FKZ3ek.png" alt="Patricio Funes" />
                    </div>
                    <div className="card-feature-type">ReactJS</div>
                    <div className="subtitle"><h1>Counter</h1></div>
                    <div className="info info-p">
                        <p>Small counter made with React, and designed with CSS. The goal of this project was to practice, and get better at mi coding skills with React.</p>
                    </div>
                    <div className="website"><Link to="https://react-counter-gilt.vercel.app/" className="sec-link" target="_blank">Deployment</Link></div>
                    <div className="website"><Link to="https://github.com/elpatoenlasolas/counter/tree/main" className="sec-link" target="_blank">Repository</Link></div>

                </div>
            </div>

            <div className="column">
                <div className="card-container">

                    <div className="img-container">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png" alt="Patricio Funes" />
                    </div>
                    <div className="card-feature-type">ReactJS</div>
                    <div className="subtitle"><h1>Spotify Playlist Creator</h1></div>
                    <div className="info info-p">
                        <p>This project was part of my CodeCademy certificate in FrontEnd. I didn't code the whole project, but did re-design it.</p>
                    </div>
                    <div className="website"><Link to="https://spotify-playlist-creator-zeta.vercel.app/" className="sec-link" target="_blank">Deployment</Link></div>
                    <div className="website"><Link to="https://github.com/elpatoenlasolas/Spotify-Playlist-Creator/tree/main?tab=readme-ov-file" className="sec-link" target="_blank">Repository</Link></div>

                </div>
            </div>

        </div>
    </div>
        
       </>
    )
};

export default ProjectCard;
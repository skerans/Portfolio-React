import React from 'react';
import '../../styles/Portfolio.css'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.jpeg'
import img3 from '../../images/img3.jpeg'
import img4 from '../../images/img4.jpeg'
import img5 from '../../images/img5.jpeg'




export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>

      <section id="portfolio" class="project-container">
      <div class="project-first">
        <figure>
          <a href="https://github.com/skerans/Mapped-event-tracker">
            <img src={img1} alt="placeholder image"/>
            <figcaption>Mapped Event Tracker</figcaption>
          </a>
        </figure>
      </div>
      
      <div class="project">
        <figure>
          <a href="https://github.com/skerans/Weather-app-week6">
            <img src={img2} alt="placeholder image"/>
            <figcaption>Weather app</figcaption>
          </a>  
        </figure>
      </div>

      <div class="project">
        <figure>
          <a href="https://github.com/skerans/QuizGame">
            <img src={img3} alt="placeholder image"/>
            <figcaption>Quiz game app</figcaption>
          </a>
        </figure>
      </div>

      <div class="project">
        <figure>
          <a href="#">
            <img src={img4} alt="placeholder image"/>
            <figcaption>fourth Project</figcaption>
          </a>
        </figure>
      </div>

      <div class="project">
        <figure>
          <a href="#">
            <img src={img5} alt="placeholder image"/>
            <figcaption>fifth Project</figcaption>
          </a>
        </figure>
    </div> 

    </section>




    </div>
  );
}

{/* <a className='project' href='https://github.com/skerans/NextGen-event-tracker' target='_blank'  rel="noreferrer" alt='first project demo'>
<img className='project1-img' src={img1} />
<figcaption>Natural Event Tracker</figcaption>
</a> */}

// <div key={index} className="portfolio-card" onMouseEnter={() => setHoverActive(index)} onMouseLeave={() => setHoverActive(10)}>
//                         <img src={element.imgPath} className="portfolio-img" />
//                         <div className="portfolio-title">
//                             <a className={hoverActive === index ? "deployed-link hover-active" : "deployed-link"} href={element.deployedPath}>
//                                 {element.title}
//                             </a>
//                             <a className={hoverActive === index ? "github-icon bi bi-github hover-active" : "github-icon bi bi-github"} href={element.githubPath}></a>
//                         </div>
//                         <p className={hoverActive === index ? "tech-used hover-active" : "tech-used"}>{element.tech}</p>
//                     </div>
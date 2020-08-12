import React from "react";
import "about.css"

function About() {
    return (
    <section className="container-fluid" id="#aboutContainer">
        <section className="card">
            <header className="card-header">
                <h3>About Me</h3>
            </header>
        </section>

    <section className="myPortfolio"> 
        <section className="card">
        <section className="myBio">
        <section className="headshot float-left">  
          <img src="https://github.com/rh9891/ResponsivePortfolio/blob/master/assets/images/RH4340.jpg" alt="Picture of Female Smiling" className="img-thumbnail"/>  
          </section>
          <p><b>
            After having completed my undergraduate degree studies at New York University, I moved back to Philadelphia to work in social services as a youth counselor in the hopes of putting my degrees to use. After more than six years of social work (and so many heartfelt, inspiring, and traumatic anecdotes to fill the walls of the Bodleian Library!), I'm now working towards a career change as a full stack developer.</b></p>
          <p><b>I'm looking forward to coding for you!</b></p>
          <div className="socialIcons">
          <a className="float-left" href="https://github.com/rh9891" target="_blank"><img src="https://github.com/rh9891/ResponsivePortfolio/blob/master/assets/images/githubLogo.png" alt="Github Logo"/></a>
          <a className="float-right" href="https://docs.google.com/document/d/1Xg6i4LC_tL8g8xhu4_Ug1dFWxH5wnr68QzEwWe-yeq0/edit?usp=sharing " target="_blank"><img src="https://github.com/rh9891/ResponsivePortfolio/blob/master/assets/images/magnifyingGlassLogo.png" alt="Magnifying Glass Logo"/></a>
          <a className="float-left linkedIn" href="https://www.linkedin.com/in/romie-hecdivert-a75a181a8/" target="_blank"><img src="https://github.com/rh9891/ResponsivePortfolio/blob/master/assets/images/linkedInLogo.png" alt="LinkedIn Logo"/></a>
        </div>
          </section>
          </section>
    </section>
    </section>
)
}

export default About;
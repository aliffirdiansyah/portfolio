import React from 'react'

function Projects() {
  return (
    <section id='projects'>
    <div className='container projects'>
      <div class="row mt-5">
            <h1 className='text-center'>My Projects</h1>
            <div className="col">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>

                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img/portofolio 3.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block caption-bg">
                        <h5>Budget Planning</h5>
                        <p>Budget planning application for manufacturing</p>
                    </div>
                </div>
                <div class="carousel-item">
                        <img src="img/portofolio 1.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-md-block caption-bg">
                            <h5>School Admission</h5>
                            <p>School admission application with payment gateway</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/portofolio 2.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-md-block caption-bg">
                            <h5>Progress Monitoring</h5>
                            <p>Daily task tracking and progress monitoring application</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                      <img src="img/portofolio 4.png" class="d-block w-100" alt="..."/>
                      <div class="carousel-caption d-md-block caption-bg">
                          <h5>Company Profile</h5>
                          <p>Introducing the company with a modern touch</p>
                      </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>            
            </div>
        </div>
    </div>
    </section>
  )
}

export default Projects

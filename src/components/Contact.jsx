import React from 'react'
import '../styles/Contact.css'
function Contact() {
  return (
    <section id='about'>
    <div className='container p-5'>
       <div className="row mt-5 justify-content-center">
          <div className="col-md-6">
              <div className="contact-card text-center">
                <h1>My Contact</h1>
                  <div className="card-body d-flex justify-content-center gap-4">
                      <a href="https://github.com/aliffirdiansyah" target="_blank" className="contact-link">
                          <i className="fab fa-github"></i> Github
                      </a>
                      <a href="http://wa.me/+6287786705516" target="_blank" className="contact-link">
                          <i className="fab fa-whatsapp"></i> WhatsApp
                      </a>
                      <a href="mailto:aliffirdiansyah5@gmail.com" className="contact-link">
                          <i className="fas fa-envelope"></i> Email
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </section>
  )
}

export default Contact

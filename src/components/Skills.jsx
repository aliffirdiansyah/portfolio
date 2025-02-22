import React from 'react'
import '../styles/Skills.css'

function Skills(props) {
  return (
    <section id='skills'>
    <div className="container skills">
    <div className='row mt-5 justify-content-center'>
        <h1 className='text-center mb-3'>My Web Development SKills</h1>
        {
        props.skillsList.map((item, index) => {
            return(
                <div className="col-md-2 mb-3" key={index}>
                <div className="card text-center">
                <img src={item.image} class="card-img-top fixed-img" alt="Laravel"/>
                    <div className="card-body">
                        <b className="card-text">{item.name}</b>
                        <p className="card-text">{item.rate}</p>
                    </div>
                </div>
            </div>
            )
        })

        }
    </div>
    </div>
    </section>
  )
}

export default Skills

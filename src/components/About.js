import React from 'react'

function About () {
  return (
    <div>
      <section>
        <div className='container-fluid'>
          <h1 className='text-center text-capitalize pt-5 pb-5'>About us</h1>
          <hr className='w-25 mx-auto'/>

          <div className='row mb-5'>
            <div className='col-lg-6 col-md-6 col-12'>
              <img src={require('../Images/3.jpg')} alt='About us' className='img-fluid'/>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <h1>Who am I ? </h1>
              <hr/>
              <p className='text-left' style={{'font-family': 'sans-serif'}}>Students learning a new computer programming language will often begin by writing a "Hello, World!" program, which does nothing but issue the message "Hello, world" to the user  </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
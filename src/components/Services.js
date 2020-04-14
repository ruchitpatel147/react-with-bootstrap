import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

function Services () {
  const notify = (e) => {
    e.preventDefault();
    toast.error('Demo button nothing else', {position: toast.POSITION.TOP_CENTER, autoClose:2000})
  }

  return (
    <div>
      <section>
        <div className='container'>
          <h1 className='text-center pt-5'>Services</h1>
          <hr className='w-25 mx-auto pt-5'/>

          <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card" style={{"width":"400px"}}>
                <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <button className="btn btn-primary" onClick={notify}>See Profile</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card mb-5" style={{"width":"400px"}}>
                <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <button className="btn btn-primary" onClick={notify}>See Profile</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="card mb-5" style={{"width":"400px"}}>
                <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
                <div className="card-body">
                  <h4 className="card-title">John Doe</h4>
                  <p className="card-text">Some example text.</p>
                  <button className="btn btn-primary" onClick={notify}>See Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-primary text-white'>
        <article className='py-5 text-center'>
          <div>
            <h3 className='display-4'>+980021</h3>
            <p>If you want best service Call us now.</p>
            <button className='btn btn-warning'>Contact Now</button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Services
import React, {useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();


function Gallery () {

  const [data, setData] = useState({email: '', pwd: ''})
  const notify = (e) => {
    e.preventDefault()
    toast.success('Successfully Joined', {position: toast.POSITION.TOP_CENTER,autoClose: 800})
    setData({email: '', pwd: ''})
  }

  return (
    <div>
      <section>
        <div className='container'>
          <h1 className='text-center pt-5'>Gallery</h1>
          <hr className='w-25 mx-auto pt-5'/>

          <div className='row mb-5'>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
          </div>
          <div className='row mb-5'>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
            <div className='col-lg-4 col-md-4 col-12'>
              <img className="card-img-top" src={require('../Images/3.jpg')} alt="Card image"/>
            </div>
          </div>

        </div>
      </section>

      <section className='bg-primary mb-5'>
        <article className='py-5'>
          <div className='text-center text-white'>
            <h3 className='display-4'>Want to join</h3>
            <p>If you want best service join us now.</p>
            <button className='btn btn-warning' data-toggle='modal' data-target="#myModal">Join Us</button>
          </div>

          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h4 className="modal-title">Sign Up</h4>
                </div>

                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email"
                           className="form-control"
                           placeholder="User email"
                           id="email"
                           autoComplete={false}
                           value={data.email}
                           onChange={(e) => setData({...data,email:e.target.value})}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Password:</label>
                    <input type="text"
                           className="form-control"
                           placeholder="User password"
                           id="pwd"
                           autoComplete={false}
                           value={data.pwd}
                           onChange={(e) => setData({...data,pwd:e.target.value})}/>
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={notify}>Sing Up</button>
                </div>

              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Gallery
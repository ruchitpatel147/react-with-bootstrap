import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

function Contact () {
  const [data, setData] = useState({name: '', email: '', pwd: ''})

  const onChange = (e) => {
    e.preventDefault();
    setData({
      [e.target.name]: e.target.value
    })
  }

  const notify = (e) => {
    e.preventDefault();
    toast.success('Successfully created', {position: toast.POSITION.TOP_CENTER})
    setData({name: '', email: '', pwd: ''})
  }
  return (
    <div>
      <section>
        <div className='container mb-5'>
          <h1 className='text-center pt-5'>Contact Us</h1>
          <hr className='w-25 mx-auto pt-5'/>

          <div className='w-50 mx-auto'>
            <form action="">
              <div className="form-group">
                <label htmlFor="email">User name:</label>
                <input type="email"
                       className="form-control"
                       placeholder="User name"
                       id="name"
                       value={data.name}
                       onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email"
                       className="form-control"
                       placeholder="Enter email"
                       id="email"
                       value={data.email}
                       onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={notify}>Submit</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Contact
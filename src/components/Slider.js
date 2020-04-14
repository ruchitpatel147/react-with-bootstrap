import React from 'react'

function Slider () {
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">

        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('./../Images/2.jpg')} alt="Los Angeles" height="400px" width="100%"/>
            <div className="carousel-caption">
              <h3>1</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./../Images/3.jpg')} alt="Chicago" height="400px"  width="100%"/>
            <div className="carousel-caption">
              <h3>2</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./../Images/2.jpg')} alt="New York" height="400px"  width="100%"/>
            <div className="carousel-caption">
              <h3>3</h3>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>

      </div>
    </div>
  )
}

export default Slider
import React from 'react'

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
            <div className="col-6">
                <div className="about__img">
                    <img src="/img/pizza.jpg" alt="" />
                </div>
            </div>
            <div className="col-6 p-25">
                <h3>About US</h3>
                <h1>Welcome To<br></br> MASTERO PIZZINI</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi dicta beatae ducimus. Quo magni facilis in consequuntur iste? Sint unde deserunt omnis! Cum voluptates, distinctio quod possimus odit aspernatur!
                </p>
                <div className="about__btn">
                    <a href="" className="btn btn-smart">
                        Read More 
                    </a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Menu

import React from 'react'
const About = () => {
  return (
    <div className="about">
      <div className="container">
     <div className="row">
        <div className="col-6">
        <h3>About US</h3>
        <h1>Welcome to MASTERO PIZZA</h1>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore doloribus delectus a atque nemo, esse error natus excepturi tempore, totam odit dolores soluta eveniet fugit earum ab, rerum modi possimus?</p>
      <div className="about__btn">
        <a href="" className="btn btn-smart">Read More</a>
      </div>
        </div>
        <div className="col-6">
<div className="about__img">
    <img src="/img/pizza.jpg" alt="" />
</div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default About

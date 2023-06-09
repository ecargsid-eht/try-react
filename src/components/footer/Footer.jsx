import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.col}>
      
       <h2>About the App</h2> 
        <p> Pink screen is an initiative to provide the best and safest hostel/Pg accomodation to all the girls students/working women. Our vision is to create a platform where one can find the details about all the best hostels in a locality or town connected with us.
<br /> With the increasing growth in the education and work, migration of students and people finding jobs is vast, finding a good and safe place to live is the toughest job. to make the work easier, specially for women considering the safety issues ,we bring to you <br />________________________ -THE PINK SCREEN team.</p>
      </div> 
      <div className={classes.col}>
     
        <h2>Contacts</h2>
        <span>Phone +123 456 789</span>
        <span>Gmail:PinkScreen@gmail.com</span>
        </div>
      <div className={classes.col}>
      
        <h2>Location</h2>
        <span>Agra</span>
        <span>Noida</span>
        <span>Kota</span>
      </div>
    </div>
    </div>
  )
}

export default Footer

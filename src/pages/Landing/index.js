import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styles from './Landing.module.css'
import JssLogo from '../../assets/images/JSS_Logo.png'
// import DownArrow from '../../assets/images/icons/DownArrow.png'

export default function Landing() {
    return (
        <div className={styles.landing}>
            <Navbar collapseOnSelect expand="md" className="px-5">
                    <Navbar.Brand href="#home">
                        <img src={JssLogo} alt="jss_logo" className="img-fluid" />
                    </Navbar.Brand>
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto center">
                            <Nav.Link href="#features" className="font-barlow-medium font-14 text-primaryColor">HOME</Nav.Link>
                            <Nav.Link href="#pricing" className="font-barlow-medium font-14 text-primaryColor">ABOUT</Nav.Link>
                            <Nav.Link href="#pricing" className="font-barlow-medium font-14 text-primaryColor">TOPICS</Nav.Link>
                            <Nav.Link href="#pricing" className="font-barlow-medium font-14 text-primaryColor">SCHEDULE</Nav.Link>
                            <Nav.Link href="#pricing" className="font-barlow-medium font-14 text-primaryColor">FEE DETAILS</Nav.Link>
                            <Nav.Link href="#pricing" className="font-barlow-medium font-14 text-primaryColor">CONTACT US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey={12} href="#memes">
                            <button className={styles.register_nav}>REGISTER</button>
                        </Nav.Link>
                    </Nav>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            </Navbar>  

            <div className={`d-flex flex-column align-items-center ${styles.center}`}>
                <div className="font-barlow-medium text-primaryColor font-14">A National Conference On</div>
                <div className="font-bebas-regular font-56 text-primaryColor mt-3 text-center">
                    Smart Energy, VLSI and 
                    Embedded Systems.
                </div>
                <div className="font-barlow-medium font-24 text-secondaryColor mt-4">24 September 2021</div>
                <div className="mt-5">
                    <button className={styles.register_hero}>REGISTER NOW</button>
                </div>
            </div>

            {/* <div>
                <img src={DownArrow} alt="arrow" className="img-fluid text-white" />
            </div> */}
        </div>
    )
}

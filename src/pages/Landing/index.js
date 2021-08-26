import React, {useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Table } from "react-bootstrap";
import styles from './Landing.module.css'
import JssLogo from '../../assets/images/JSS_Logo.png'
import AktuLogo from '../../assets/images/logo/AKTU.png'
import IcLogo from '../../assets/images/logo/IC.png'
import Logo_106 from '../../assets/images/logo/106_logo.png'
import I1 from '../../assets/images/committee/1.png'
import I2 from '../../assets/images/committee/2.png'
import I3 from '../../assets/images/committee/3.png'
import I4 from '../../assets/images/committee/4.png'
import I5 from '../../assets/images/committee/5.png'
import I6 from '../../assets/images/committee/6.png'
import I7 from '../../assets/images/committee/7.png'
import I8 from '../../assets/images/committee/8.png'
import I9 from '../../assets/images/committee/9.png'
import I10 from '../../assets/images/committee/10.png'
import I11 from '../../assets/images/committee/11.png'
import I12 from '../../assets/images/committee/12.png'
import I13 from '../../assets/images/committee/13.png'
import I14 from '../../assets/images/committee/14.png'
import I15 from '../../assets/images/committee/15.png'
import I16 from '../../assets/images/committee/16.png'

export default function Landing() {
    const [nav, setNav] = useState()
    const [count, setCount] = useState(0)

    const handleNav = () => {
        window.scrollY > 0 ? setNav(styles.white_nav) : setNav(styles.nav)
    }

    window.addEventListener('scroll', handleNav)

    const handleClick = () => {
        console.log(count)
        if(count === 0){
            console.log(count, 'in 0')
            setNav(styles.white_nav)
            setCount(1)
            
        } else if(count === 1 || window.scrollY === 0) {
            console.log(count, 'in 1')
            setNav(styles.nav)
            setCount(0)
        }         
    }

    return (
        <>
            <div className={styles.landing}>

                    <Navbar collapseOnSelect fixed="top" expand="xl" className={nav} >
                            <Navbar.Brand href="#home" className="me-auto">
                                <img src={JssLogo} alt="jss_logo" className="img-fluid px-2" />
                                <img src={AktuLogo} alt="aktu_logo" className="img-fluid px-2" />
                                <img src={IcLogo} alt="ic_logo" className="img-fluid px-2" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick} className="mx-3"/>
                            <Navbar.Collapse id="responsive-navbar-nav" className="w-100">
                                <Nav className="me-auto"></Nav>
                                <Nav className="center text-white">
                                    <Nav.Link href="#home" className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>HOME</Nav.Link>
                                    <Nav.Link href="#about" className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>ABOUT</Nav.Link>
                                    <Nav.Link href="#committee" className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>COMMITTEE</Nav.Link>
                                    <Nav.Link href="#topics" className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>TOPICS</Nav.Link>
                                    <Nav.Link href="#schedule" className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>SCHEDULE</Nav.Link>
                                    <Nav.Link href="#fee" className={styles.link_style}><pre className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>FEE DETAILS</pre></Nav.Link>
                                    <Nav.Link href="#contact" className={styles.link_style}><pre className={`${styles.link_style} font-barlow-medium font-16 mx-1`}>CONTACT US</pre></Nav.Link>
                                    <Nav.Link rel="noreferer" className={styles.link_style} target="_blank" href="https://easychair.org/conferences/?conf=ncseves2021" >
                                        <span className={`text-decoration-none ${styles.register_nav}`}>REGISTER</span>
                                    </Nav.Link>
                                    <Nav.Link href="#" className={styles.link_style}><pre className="d-none"></pre></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>

                <div className={`d-flex flex-column align-items-center justify-content-center ${styles.main_content}`}>
                    <div className="center mt-5">
                        <img src={Logo_106} alt="106_logo" className="img-fluid px-3" />
                        <p className="font-barlow-medium font-16 text-white text-center">
                            In Commemoration of
                            106 Jayanthi Mahotsav of
                            Shrimanmaharaja Rajaguruthilaka<br />
                            His Holiness Dr. Sri Sri Shivarathri
                            Rajendra Mahaswamiji
                        </p>
                    </div>
                    <div className="mt-5">
                        <div className="font-barlow-medium text-white font-14 text-center">A National Conference On</div>
                        <div className="font-bebas-regular font-56 text-white mt-3 text-center">
                            Smart Energy, VLSI and 
                            Embedded Systems.
                        </div>
                        <div className="font-bebas-regular font-24 text-white mt-3 text-center">
                            (NCSEVES-2021)
                        </div>
                    </div>
                    <div className="font-barlow-medium font-24 text-secondaryColor mt-4">24 September 2021</div>
                    <div className="mt-5">
                        <a rel="noreferrer" target="_blank" href="https://easychair.org/conferences/?conf=ncseves2021" className={`text-decoration-none ${styles.register_hero}`}>REGISTER NOW</a>
                    </div>
                </div>

            </div>

            <div  id="about" className={`${styles.about} p-75`}>
                <div className="container d-flex flex-column justify-content-around align-items-center">
                    <div className="font-bebas-regular font-36 text-secondaryColor">ABOUT CONFERENCE</div>
                    <div className="font-barlow-medium font-24 text-primaryColor line-height-33 mt-5 px-5">
                        The conference is aimed to gather scientists, engineers,
                        academicians and industry personnel to discuss latest developments
                        in Smart Energy, VLSI &amp; Embedded Systems. Smart Energy Systems
                        and Technology offer promisesto enhance the operational efficiency
                        of nationwide energy and power supplies via distributed generation
                        with bi-directional energy and electricity flow. This objective is
                        achieved by allowing intelligent monitoring and control of different
                        components within the distribution and transmission lines as well
                        as other systems from utilities of natural gas, thermal energy,
                        electricity, and water on the one side to the end user on the other
                        side, while maintaining the energy and power quality, security, reliability and safety with minimum environmental impacts.
                        Governments around the world are investing heavily in smart
                        energy systems to ensure optimum energy use and supply, enable
                        better planning for outage responses and recovery, and facilitate the
                        integration of heterogeneous technologies such as renewable energy
                        systems, electrical vehicle networks, and smart homes around the grid. Smart energy systems present enormous engineering challenges in the
                        design and integration of energy and electrical grids with communication
                        and network technologies, along with substantial questions of security and
                        privacy of different components within the grid.
                    </div>
                </div>
            </div>

            <hr />

            <div id="committee" className={`${styles.committee} p-75`}>
                <div className="container-fluid d-flex flex-column justify-content-around align-items-center">
                    <div className="font-bebas-regular font-36 text-secondaryColor">COMMITTEE</div>
                    <div className={`row mt-5 ${styles.m_10}`}>
                        <div className="col-12 center">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"400px"}}>
                                <img className="img-fluid" src={I1} alt="committee_img" />
                                <div className="card-body center mt-2">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        His Holiness Jagadguru Sri Sri Shivarathri Deshikendra Mahaswamiji
                                        President, JSS Mahavidyapeetha, Mysuru
                                        Some example text.
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Chief Patron</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I2} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Vineet Kansal<br/>
                                        Vice-Chancellor, AKTU, Lucknow
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Patron</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I3} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. C.G Betsurmath<br />
                                        Executive Secretary, JSSMVP, Mysuru
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Patron</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I4} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Prof. M. H. Dhananjaya,<br/>
                                        Advisor JSSMVP, Mysuru
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Patron</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I5} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. B. Suresh, Pro-Chancellor<br />
                                        JSS AHER -JSSMVP, Mysuru
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Patron</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I6} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. H R Mahadevaswamy<br />
                                        Joint Director (A&amp;A), JSSMVP, Mysuru
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Patron</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I7} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. G. M. Patil<br />
                                        Principal, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">General Chair</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I8} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Mr. P.K. Mishra,<br />
                                        Additional director, CIDC,
                                        New Delhi
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Co-Chair</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I9} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Anand Kumar Pandey<br />
                                        Assistant Prof.,
                                        EEE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">General Co-Chair</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I10} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Sanjiba Kumar Bisoyi<br />
                                        Associate Prof.,
                                        EE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">General Co-Chair</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I11} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Arun Kumar G<br />
                                        HOD, ECE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Convener</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I12} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. K. S. Sujatha<br />
                                        HOD EEE &mp;a Dean R&amp;D,
                                        JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Convener</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I13} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Sanjeev Kumar Sharma,<br />
                                        HOD, EE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Convener</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I14} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Chhaya Dalela,<br />
                                        ECE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I15} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Anand Kumar Pandey,<br />
                                        EEE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Associate Professor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 center mt-5">
                            <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"280px", height: "350px"}}>
                                <img className="img-fluid" src={I16} alt="committee_img" />
                                <div className="card-body center mt-3">
                                    <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                        Dr. Sanjiba Kumar Bisoyi,<br />
                                        EE, JSSATE, NOIDA
                                    </p>
                                    <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Associate Professor</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

            <div id="topics" className={`${styles.interests} p-100 px-4 bg-secondaryColor`}>
                <div className="h-100">
                    <div className="font-bebas-regular font-36 text-white text-center pt-5">TOPIC OF INTERESTS</div>
                    <div className="row mt-3 line-height-33 font-barlow-medium font-18">
                        <div className="col-xl-2 col-12"></div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 my-2">
                            <ul>
                                <li>Resilient/Adaptive Grid Infrastructures Design</li>
                                <li>Demand Response</li>
                                <li>Planning, Operation and Management.</li>
                                <li>Resilient Control Architectures &amp; Systems for Smart Energy Systems</li>
                                <li>Electrical Machines and Industrial Drives</li>
                                <li>Smart Homes, Buildings and Cities</li>
                                <li>Power Electronics Converters</li>
                                <li>Energy Storage Technologies and Systems</li>
                                <li>Transportation Electrification and Electric Vehicles</li>
                                <li>Computational Intelligence &amp; Optimization for Smart Energy Systems</li>
                                <li>Smart Metering, Measurement, Instrumentation, And Control</li>
                                <li>Information, Security and Privacy for Smart Energy Systems</li>
                                <li>Energy Efficiency</li>
                                <li>Sensors, Communications and Network</li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12 my-2">
                            <ul>
                                <li>FACTS, Active Power Filters, Power Quality Monitoring &amp; Performance</li>
                                <li>Enhancement</li>
                                <li>VLSI Design</li>
                                <li>Computer-Aided Design (CAD)</li>
                                <li>Low Power Design</li>
                                <li>VLSI Testing</li>
                                <li>Applications of VLSI in Communications,signal processing &amp; Sensor</li>
                                <li>Networks,</li>
                                <li>Renewable Energy  Distributed Generation Within Microgrids</li>
                                <li>Embedded System Design and IoT</li>
                                <li>Embedded computing education</li>
                                <li>Real-time systems.</li>
                                <li>Digital Integrated Circuits and Systems</li>
                                <li>Analog and Mixed-Signal and RF Circuit design</li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-12"></div>
                        <div className="col-12 mb-3 font-barlow-medium font-16 text-primaryColor text-center text">
                            &amp; much more..
                        </div>
                    </div>
                </div>
            </div>


            <div id="schedule" className={`${styles.schedule} p-75`}>
                <div className="container d-flex flex-column justify-content-around align-items-center">
                    <div className="font-bebas-regular font-36 text-secondaryColor">Schedule &amp; Important Dates</div>

                    <div className="mt-5 w-75">
                        <Table responsive="sm" className="mt-3 bg-tertiaryColor">
                            <tbody className="text-primaryColor text-center">
                                <tr className={`font-barlow-semi-bold font-24 bg-secondaryColor ${styles.border_bottom_background}`}>
                                    <th><span>DATE</span></th>
                                    <th>EVENTS</th>
                                </tr>
                                <tr className={`${styles.bg_odd} ${styles.border_bottom_background}`}>
                                    <td><pre><span className="font-barlow-semi-bold font-18">15 AUG 2021</span></pre></td>
                                    <td className="font-barlow-medium font-18">Call for papers</td>
                                </tr>
                                <tr className={`${styles.bg_even} ${styles.border_bottom_background} `}>
                                    <td><pre><span className="font-barlow-semi-bold font-18">31 AUG 2021</span></pre></td>
                                    <td className="font-barlow-medium font-18">Paper Submission Deadline</td>
                                </tr>
                                <tr className={`${styles.bg_odd} ${styles.border_bottom_background} `}>
                                    <td><pre><span className="font-barlow-semi-bold font-18">10 SEPT 2021</span></pre></td>
                                    <td className="font-barlow-medium font-18">Notification of Acceptance</td>
                                </tr>
                                <tr className={`${styles.bg_even} ${styles.border_bottom_background} `}>
                                    <td><pre><span className="font-barlow-semi-bold font-18">15 SEPT 2021</span></pre></td>
                                    <td className="font-barlow-medium font-18">Camera ready paper</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        

            <div id="fee" className={`${styles.fee} p-75 bg-secondaryColor`}>
                <div className="container-fluid">
                    <div className="font-bebas-regular font-36 text-white text-center">FEE DETAILS</div>
                    <div className="row mx-5 mt-5">
                        <div className={`col-md-6 col-sm-12 col-12 mt-5 ${styles.fee_grid}`}>
                            <div>
                                <div className="font-barlow-semi-bold font-20 text-tertiaryColor">Participation Certificate</div>
                                <div>
                                    <p className="font-barlow-semi-bold font-24 text-primaryColor">Rs. 500/-</p>
                                    <p className="font-barlow-medium font-18 text-primaryColor">
                                        Individual (Student/ Research Scholar/ <br />academician/ Industry Person)
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <p className="font-barlow-semi-bold font-24 text-primaryColor">Rs. 2000/-</p>
                                        <p className="font-barlow-medium font-18 text-primaryColor">Delegate (Maximum 5 members)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="font-barlow-semi-bold font-20 text-tertiaryColor">Paper Presentation</div>
                                <div>
                                    <p className="font-barlow-semi-bold font-24 text-primaryColor">Rs. 1000/-</p>
                                    <p className="font-barlow-medium font-18 text-primaryColor">
                                    Author (Student/ Research Scholar/ <br />academician/ Industry Person)
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <p className="font-barlow-semi-bold font-24 text-primaryColor">Rs. 2000/-</p>
                                        <p className="font-barlow-medium font-18 text-primaryColor">Industry personnel</p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div className="col-md-1 col-sm-12 col-12 mt-5"></div>
                        <div className="col-md-5 col-sm-12 col-12 mt-5 bg-white">
                            <div className="font-barlow-semi-bold font-20 text-tertiaryColor mt-3 text-center">MODE OF PAYMENT</div>
                            <div className={styles.hr}></div>
                            <ol className="mt-4 line-height-33">
                                <li className="font-barlow-medium font-18 text-primaryColor px-1">DD drawn in favor of “Construction Industry Development Council” payable at New Delhi.</li>
                                <li className="font-barlow-medium font-18 text-primaryColor px-1">NEFT transfer: A/c-13810100093936, The Federal Bank Limited, Nehru Place, New Delhi-110019</li>
                                <li className="font-barlow-medium font-18 text-primaryColor px-1">IFSC Code: FDRL0001302</li>
                                <li className="font-barlow-medium font-18 text-primaryColor px-1">You can check further submission guidelines at --</li>
                                <a href="www.jssaten.ac.in/ncses2019" className="text-secondaryColor">www.jssaten.ac.in/ncses2019</a>
                                <li className="font-barlow-medium font-18 text-primaryColor px-1">Authors should submit their manuscripts through mail:
                                <span className="text-secondaryColor text-decoration-underline">conference@jssaten.ac.in</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="contact" className={`${styles.contact} p-75`}>
                <div className="container-fluid">
                    <div className="font-bebas-regular font-36 text-secondaryColor text-center">CONTACT US</div>
                    <div className="row mt-5 mx-5 text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4 center">
                            <div className={`w-100 ${styles.border_left_contact} px-3 `}>
                                <div><pre className={`font-barlow-medium font-18 text-primaryColor`}>Dr. Chhaya Dalela</pre></div>
                                <div className="font=barlow-semi-bold font-20 text-secondaryColor">+91 9873552765</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4 center">
                            <div className={`w-100 ${styles.border_left_contact} px-3 `}>
                                <div><pre className={`font-barlow-medium font-18 text-primaryColor`}>Dr. Anand Kumar Pandey</pre></div>
                                <div className="font=barlow-semi-bold font-20 text-secondaryColor">+91 9625379602</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4 center">
                            <div className={`w-100 ${styles.border_left_contact} px-3 `}>
                                <div><pre className={`font-barlow-medium font-18 text-primaryColor`}>Dr. Sanjiba Kumar Bisoyi</pre></div>
                                <div className="font=barlow-semi-bold font-20 text-secondaryColor text-center">+91 9891021959</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

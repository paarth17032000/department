import React from 'react'
import styles from './Interests.module.css'

export default function Interests() {
    return (
        <div className={`${styles.interests} p-100 px-4 bg-secondaryColor`}>
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
    )
}

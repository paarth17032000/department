import React from 'react'
import styles from './About.module.css'

export default function About() {
    return (
        <div className={`${styles.about} p-75`}>
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
    )
}

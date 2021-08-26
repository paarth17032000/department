import React from 'react'
import styles from './Schedule.module.css'
import { Table } from "react-bootstrap";

export default function Schedule() {
    return (
        <div className={`${styles.schedule} p-75`}>
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
                                <tr className={`${styles.bg_even}  ${styles.border_bottom_background} `}>
                                    <td><pre><span className="font-barlow-semi-bold font-18">15 SEPT 2021</span></pre></td>
                                    <td className="font-barlow-medium font-18">Camera ready paper</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
            </div>
        </div>
    )
}

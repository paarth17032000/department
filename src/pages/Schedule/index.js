import React from 'react'
import styles from './Schedule.module.css'

export default function Schedule() {
    return (
        <div className={`${styles.schedule} p-75`}>
            <div className="container d-flex flex-column justify-content-around align-items-center">
                <div className="font-bebas-regular font-36 text-secondaryColor">Schedule &amp; Important Dates</div>
            </div>
        </div>
    )
}

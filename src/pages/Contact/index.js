import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={`${styles.contact} p-75`}>
            <div className="container d-flex flex-column justify-content-around align-items-center">
                <div className="font-bebas-regular font-36 text-secondaryColor">CONTACT US</div>
            </div>
        </div>
    )
}

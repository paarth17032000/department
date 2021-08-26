import React from 'react'
import styles from './Fee.module.css'

export default function FeeDetails() {
    return (
        <div className={`${styles.fee} p-75 bg-secondaryColor`}>
            <div className="container d-flex flex-column justify-content-around align-items-center">
                <div className="font-bebas-regular font-36 text-white">FEE DETAILS</div>
                <div className="row mx-5">
                    <div className="col-md-5 col-sm-12 col-12 mt-5 bg-success">
                        structure
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 mt-5"></div>
                    <div className="col-md-4 col-sm-12 col-12 mt-5 bg-info">
                        card
                    </div>
                </div>
            </div>
        </div>
    )
}

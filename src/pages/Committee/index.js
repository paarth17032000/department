import React from 'react'
import styles from './Committee.module.css'
// import styles from '../About/About.module.css'
import I1 from '../../assets/images/committee/1.png'

export default function Committee() {
    return (
        <div className={`${styles.committee} p-75`}>
            <div className="container d-flex flex-column justify-content-around align-items-center">
                <div className="font-bebas-regular font-36 text-secondaryColor">COMMITTEE</div>
                <div className="row mt-5 mx-auto">
                    <div className="col-12 center">
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"400px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
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
                        <div className={`${styles.card} card center border-0 px-4 py-4`} style={{width:"300px"}}>
                            <img className="img-fluid" src={I1} alt="Card image" />
                            <div className="card-body center mt-3">
                                <p className="font-barlow-medium font-16 text-primaryColor text-center line-height-33">
                                    Dr. Sanjeev Kumar Sharma,<br />
                                    HOD, EE, JSSATE, NOIDA
                                </p>
                                <p className="font-barlow-regular font-14 text-primaryColor-low text-decoration-underline mt-2">Convener</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

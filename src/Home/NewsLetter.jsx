import React from 'react'
import { useNavigate } from "react-router-dom";
import Newsletter from "../assets/image/newsletter.jpg"

const NewsLetter = () => {
    const navigate = useNavigate();
    return (
        <>            
            <section className="newsletter-section mb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="row align-items-center justify-content-around newsletter-bg">
                                <div className="col-lg-4 overflow-hidden shadow-lg">
                                    <div className="newsletter-image">
                                        <img className="img-fluid" src={Newsletter} alt="newsletter" />
                                    </div>
                                </div>
                                <div className="col-lg-4 text-md-center">
                                    <div className="section-title section-title-left">
                                        <h2>Sign up now and play the games</h2>
                                    </div>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>Register Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter
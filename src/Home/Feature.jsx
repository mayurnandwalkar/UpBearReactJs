import React from 'react'
import Confluence from "../assets/image/Confluence.svg"
import Social_Share from "../assets/image/Social_Share.svg"
import CodePen from "../assets/image/CodePen.svg"
import Adobe from "../assets/image/Adobe.svg"
const Feature = () => {
    return (
        <>            
            <section className="feature-section section">
                <div className="container px-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-md-center">
                                <p className="mb-2 lead">Our features</p>
                                <h2 className="pb-2 ">How Can I Benefit?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
                        <div className="feature col">
                            <div className="feature-card">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <img src={Confluence} alt="Confluence" />
                                </div>
                                <h4>Fast Transaction</h4>
                                <p>Secure transactions between artists and fans/investors. Protecting your ownership. </p>
                            </div>
                        </div>
                        <div className="feature col">
                            <div className="feature-card">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <img src={Social_Share} alt="Social_Share" />
                                </div>
                                <h4>Connect your crypto</h4>
                                <p>Connect your crypto wallet and start securely uploading your music NFTs.</p>
                            </div>
                        </div>
                        <div className="feature col">
                            <div className="feature-card">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <img src={CodePen} alt="CodePen" />
                                </div>
                                <h4>Suppport creators</h4>
                                <p>Support their favourite creators by purchasing editions of their unique music NFTs </p>
                            </div>
                        </div>
                        <div className="feature col">
                            <div className="feature-card">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <img src={Adobe} alt="Adobe" />
                                </div>
                                <h4>Join the community</h4>
                                <p>User friendly platform where you can, follow, comment and join large communities. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
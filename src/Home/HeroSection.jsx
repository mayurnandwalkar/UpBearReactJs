import React from 'react'
import TopRight from "../assets/image/top-right.svg"
import LeftBottom from "../assets/image/left-bottom.svg"
import Hero from "../assets/image/hero.png"
const HeroSection = () => {
  return (
    <>
        <div className="hero">
            <div className="top-right-img">
                <img src={TopRight} alt="top-right" />
            </div>
            <div className="left-bottom-img">
                <img src={LeftBottom} alt="left-bottom" />
            </div>
            <div className="container">
                <div className="row flex-lg-row-reverse align-items-center py-5 hero-center">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                        <img src={Hero} className="d-block mx-lg-auto img-fluid animated pulse infinite" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7">
                        <div className="hero-left-section">
                            <h1 className="fw-bold">Discover, and Collect 3D Art NFTs</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Start Collecting</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection
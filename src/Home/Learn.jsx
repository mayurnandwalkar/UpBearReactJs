import React from 'react'
import Chart from "../assets/image/chart1.png"
import Table from "../assets/image/table3.png"

const Learn = () => {
    return (
        <>
            <section className="learn-section section">
                <div className="container px-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="main-section-title section-title text-md-center">
                                <h2 className="pb-2">Market sentiments, portfolio, of your choice</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-md-row-reverse align-items-center  g-5 pb-5 justify-content-between">
                        <div className="col-lg-5 col-md-5">
                            <div className="section-image">
                                <img src={Chart} className="d-block mx-lg-auto img-fluid" alt="chart" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="section-title section-sub-title section-title-left">
                                <h2>Invest Smart</h2>
                                <p className="">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-md-row-reverse align-items-center  g-5 py-5 justify-content-between">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-image">
                                <img src={Table} className="d-block mx-lg-auto img-fluid" alt="chart" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="section-title section-sub-title section-title-left">
                                <h2>Grow your profit and track your investments</h2>
                                <p className="">Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Learn
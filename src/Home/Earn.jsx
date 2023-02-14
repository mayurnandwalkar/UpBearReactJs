import React from 'react'
import Bitcoin from "../assets/image/bitcoin-btc-logo.svg"
import RedGraph from "../assets/image/red_graph.svg"
import Ethereum from "../assets/image/ethereum.svg"
import GreenGraph from "../assets/image/green_graph.svg"
import Solana from "../assets/image/solana-sol-logo.svg"
import Binance from "../assets/image/binance-usd-busd-logo.svg"

const Earn = () => {
    return (
        <>
            <section className="earn-section section">
                <div className="container ">
                    <div className="row align-items-center ">
                        <div className="col-12 col-sm-6 col-lg-6">
                            <div className="section-title">
                                <h2>
                                    Discover and earn up to $10 worth of crypto
                                </h2>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <div className="section-sub-title">
                                <p className="lead ">Discover and learn how specific cryptocurrencies work. And get the amazing earn to try out for yourself</p>
                            </div>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="earn-section-table">
                                <div className="table-responsive">
                                    <table className="table" id="earnTable">
                                        <thead>
                                            <tr>
                                                <th width="450px"> Name </th>
                                                <th> Price </th>
                                                <th> 24 change </th>
                                                <th> 7D Chart </th>
                                                <th> Trade </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="tableName">
                                                        1 <img src={Bitcoin} alt="bitcoin" className="tableIcon" /> Bitcoin <span>BTC</span>
                                                    </div>
                                                </td>
                                                <td>
                                                $46,575.34
                                                </td>
                                                <td>
                                                    <span className="text-green"> +0.29% </span>
                                                </td>
                                                <td>
                                                    <div className="graph_img">
                                                        <img src={RedGraph} alt="red_graph" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="buy_btn">Buy</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="tableName">
                                                        2 <img src={Ethereum} alt="ethereum" className="tableIcon" /> Ethereum <span>ETH</span>
                                                    </div>
                                                </td>
                                                <td>
                                                $3,852.57
                                                </td>
                                                <td>
                                                    <span className="text-green"> +1.46% </span>
                                                </td>
                                                <td>
                                                    <div className="graph_img">
                                                        <img src={GreenGraph} alt="green_graph" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="buy_btn">Buy</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="tableName">
                                                        3 <img src={Solana} alt="solana" className="tableIcon" /> Solana <span>SOL</span>
                                                    </div>
                                                </td>
                                                <td>
                                                $171,28
                                                </td>
                                                <td>
                                                    <span className="text-green"> +0.68% </span>
                                                </td>
                                                <td>
                                                    <div className="graph_img">
                                                        <img src={RedGraph} alt="red_graph" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="buy_btn">Buy</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="tableName">
                                                        4 <img src={Binance} alt="binance" className="tableIcon" /> Binance <span>BNB</span>
                                                    </div>
                                                </td>
                                                <td>
                                                $517.76
                                                </td>
                                                <td>
                                                    <span className="text-green"> +0.35% </span>
                                                </td>
                                                <td>
                                                    <div className="graph_img">
                                                        <img src={GreenGraph} alt="green_graph" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="buy_btn">Buy</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* don't remove */}
                            {/* <div className="earn-section-image">
                                <img src={table2} alt="table1" className="img-fluid">
                            </div> */}
                            {/* don't remove */}
                        
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default Earn
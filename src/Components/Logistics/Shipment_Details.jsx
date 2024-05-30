import './Shipment_Details.css'
import React from 'react'

const Shipment_Details = () => {
    return (
        <>
            <div className="main-sec"> 
                <div className='delivery-status'>
                    <div className="details">
                        <div className="order">
                            <h2>Shipment Status</h2>
                        </div>
                    </div>
                    <div className="track">
                        <ul id="progress"className="text-center">
                            <li className='active'></li>
                            <li className='active'></li>
                            <li className='active'></li>
                            <li className='active'></li>
                        </ul>
                    </div>
                    <div className="lists">
                        <div className="list-1">
                        <div className="list">
                            <p>Order Processsed</p>
                        </div>
                        <div className="list">
                            <p>In Transit</p>
                        </div>
                        </div>
                        <div className='list-2'>
                        <div className="list">
                            <p>Out for <br /> Delivery</p>
                        </div>
                        <div className="list">
                            <p>  Delivered </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='Down-four'>
                    <div className='Address'>
                        <h3>
                            Details
                        </h3>
                        <p>
                            <b>Sender</b>
                        </p>
                        <p>Dr.Kamlesh Gupta</p>
                        <p>
                            <b>Receiver</b>
                        </p>
                        <p>Dr.Saluja Sharma</p>
                    </div>
                    <div className='Carrier'>
                    <h3>
                            Carrier
                        </h3>
                        <p>
                            <b>Delivered by</b>
                        </p>
                        <p>Blue Star</p>
                        <p>
                            <b>Product</b>
                        </p>
                        <p>Road Denmark</p>
                    </div>
                    <div className='Address'>
                    <h3>
                            References
                        </h3>
                        <p>
                            <b>Order number</b>
                        </p>
                        <p>556743</p>
                        <p>
                            <b>Additional Ref</b>
                        </p>
                        <p>Max</p>
                    </div>
                    <div className='Carrier'>
                    <h3>
                            Dates
                        </h3>
                        <p>
                            <b>Pichup date</b>
                        </p>
                        <p>20/10/20 00:00:00</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shipment_Details
import React from 'react'
import './Logistics.css'

const Logistics = ({onStateChange, tab}) => {
  
    const handleRowSelect = () => {
        onStateChange();
        tab();
    };

    return (
        <>
        <div className='log'>
            <p id="All-Shipment">All Shipments</p>
            <p id="dash">Dashboard</p>
            <div className="boxes">
                <div className='box'>
                    <img src="./src/assets/ship.png"/>
                    <div id="stats">
                    <a id='bigger'>570</a>
                    <p>Shipments Registered</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="./src/assets/home.webp"/>
                    <div id="stats">
                    <a id='bigger'>380</a>
                    <p>Shipments Delivered</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="./src/assets/container.png"/>
                    <div id="stats">
                    <a id='bigger'>118</a>
                    <p>Shipment Consolidate</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="./src/assets/dollar.png"/>
                    <div id="stats">
                    <a id='bigger'>$5,534.00</a>
                    <p>Account Receivables</p>
                    </div>
                </div>
                <div className='box'>
                    <img src="./src/assets/calc.png"/>
                    <div id="stats">
                    <a id='bigger'>130999</a>
                    <p>Total Shipments</p>
                    </div>
                </div>
            </div>
                <div className='filter'>
                    <div className='filter-1'>
                    <i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder='Search by anything '/>
                    </div>
                    <div className='filter-1'>
                    <i class="fa-regular fa-calendar"></i><input type="text" placeholder='Select created date '/>
                    </div>
                    <div className='filter-2'>
                    <i class="fa-regular fa-calendar"></i><input type="text" placeholder='Select status '/>
                    </div>
                    <div className='filter-2'>
                    <i class="fa-regular fa-calendar"></i><input type="text" placeholder='Select payment method '/>
                    </div>
                    <div className='f-side'>
                        <div className='f-side-1'>
                            <div>
                            <i class="fa-solid fa-filter"></i><a>Hide Filters</a>
                            </div>
                            </div>
                            <div className='f-side-2'>
                            <div>
                            <i class="fa-solid fa-cube"></i>
                    </div>
                </div>
                </div>
                </div>
        </div>
        <div className="create-shipment">
            <button><i class="fa-solid fa-plus"></i>Create Shipment</button>
        </div>
        <table className='content-table'>
            <thead>
                <tr>
                    <th>Tracking ID <i class="fa-solid fa-angle-down"></i></th>
                    <th>Date <i class="fa-solid fa-angle-down"></i></th>
                    <th>Sender <i class="fa-solid fa-angle-down"></i></th>
                    <th>Receiver <i class="fa-solid fa-angle-down"></i></th>
                    <th>Origin <i class="fa-solid fa-angle-down"></i></th>
                    <th>Destination <i class="fa-solid fa-angle-down"></i></th>
                    <th>Payment method <i class="fa-solid fa-angle-down"></i></th>
                    <th>Status <i class="fa-solid fa-angle-down"></i></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>PhonePe</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>PhonePe</td>
                    <td><i class="fa-solid fa-circle" id="red"></i>Failed</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Paytm</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Paytm</td>
                    <td><i class="fa-solid fa-circle" id="red"></i>Failed</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td>Tracy Rempel</td>
                    <td>Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Logistics
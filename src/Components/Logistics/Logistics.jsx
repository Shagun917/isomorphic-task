import React, {useEffect, useState} from 'react'
import './Logistics.css'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const Logistics = ({onStateChange, tab, Mode}) => {
    const [selectedDate, setDate] = useState(null);
    const handleRowSelect = () => {
        onStateChange();
        tab();
    };
    useEffect(() => {
        let textColor;
        let th;
        let bg;
        let sb;
        let nv;
        let rt;
        if(Mode == true) {
            textColor = '#fff';
            bg = '#1c1c1c';
            th = '#484848';
            sb = '#131313';
            nv = 'white';
            rt = 'white';
        } else {
            textColor = '#6a6a6a';
            bg = 'white';
            th = '#d2d2d2';
            sb = '#f3f3f3';
            nv = 'black';
            rt = 'black';
        }
        const collection = document.getElementsByTagName("tr");
        const collection2 = document.getElementsByTagName("a");
        const collection3 = document.getElementsByTagName("th");
        const collection4 = document.getElementsByTagName("input");
        const collection6 = document.getElementsByClassName('right-three');
        const collection5 = document.getElementsByClassName("Logog");
        const c6 = document.getElementsByClassName("sidebar");


        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = textColor;
        collection[i].style.borderBottomColor = th;
        }
        for (let i = 0; i < collection2.length; i++) {
            collection2[i].style.color = textColor;
        }
        for (let i = 0; i < collection3.length; i++) {
            collection3[i].style.backgroundColor = th;
            }
        for (let i = 0; i < collection4.length; i++) {
            collection4[i].style.backgroundColor = bg;
            collection4[i].style.color = textColor;
        }
        for (let i = 0; i < collection5.length; i++) {
            collection5[i].style.color = nv;
            }
            for (let i = 0; i < collection6.length; i++) {
                collection6[i].style.color = rt;
                }
                for (let i = 0; i < c6.length; i++) {
                    c6[i].style.backgroundColor = sb;
                }
    }, [Mode]);
    return (
        <>
        <div className='log'>
            <div className='black-line'></div>
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
                    <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} color="black">
                        <DatePicker label="Select-Date" color="black"/>
                        </LocalizationProvider>
                    </div>
                    <div className='filter-2'>
                    <i class="fa-regular fa-calendar"></i><input type="text" placeholder='Select status ' list='scripts'/>
                    <datalist id='scripts'>
                        <option value="Hired" />
                        <option value="Not Hired" />
                    </datalist>
                    </div>
                    <div className='filter-2'>
                    <i class="fa-regular fa-calendar"></i><input name = 'section'placeholder='Filter' list='scripts2'/>
                    <datalist id='scripts2'>
                        <option value="Shagun Raj" />
                        <option value="Other Employees" />
                    </datalist>
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
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td style={{width: '13%'}}><img src="./src/assets/Photo.png" id='photo1'/> Tracy Rempel</td>
                    <td style={{width: '14%'}}><img src="./src/assets/Photo2.png"/> TPrincila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png"  id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>PhonePe</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png" id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png" id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>PhonePe</td>
                    <td><i class="fa-solid fa-circle" id="red"></i>Failed</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png"  id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Paytm</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png"  id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Google Pay</td>
                    <td><i class="fa-solid fa-circle"></i>Delivered</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png"  id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
                    <td>Kazakhastan</td>
                    <td>hongkong</td>
                    <td>Paytm</td>
                    <td><i class="fa-solid fa-circle" id="red"></i>Failed</td>
                </tr>
                <tr onClick={() => handleRowSelect()}>
                    <td>HHP6411</td>
                    <td>09 Jun, 2019</td>
                    <td><img src="./src/assets/Photo.png"  id='photo1'/> Tracy Rempel</td>
                    <td><img src="./src/assets/Photo2.png"/> Princila Price</td>
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
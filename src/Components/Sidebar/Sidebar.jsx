import React,{ useEffect } from 'react'
import './Sidebar.css'

const Sidebar = ({Color1, Color2, Mode}) => {
    const blue = {
        color: '#0f53d2',
    }
    let textColor = '#6a6a6a';
    useEffect(() => {
        let bg;
        if(Mode == true) {
            textColor = '#fff';
            bg = '#1c1c1c';
        } else {
            textColor = '#6a6a6a';
            bg = 'white';
        }
        document.body.style.backgroundColor = bg;
        const collection = document.getElementsByTagName("p");
        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = textColor;
        }
    }, [Mode]);
    return (
        <>
        <div>
        <div className='sidebar' style={{color : textColor}}>
            <div className='Logog'>
                <i class="fa-solid fa-lines-leaning" id='logo0'></i>
                isomorphic
            </div>
            <div className='side-link'>
                <label htmlFor="for">HOME</label>
                <div className='link'>
                    <p><i class="fa-solid fa-cart-shopping"></i>E-Commerce</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-headphones"></i> Support</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-box-open"></i>Logistics</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-chart-line"></i>Analytics</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-file"></i> File</p>
                </div>
                <br />
                <label htmlFor="for">APPS</label>
                <div className='link'>
                    <p><i class="fa-solid fa-cart-shopping"></i>E-Commerce</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-headphones"></i>Support</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-dollar-sign"></i> Invoice</p>
                </div>
                <div className='link-log'>
                    <p style={{color: '#6a6a6a'}}><i class="fa-solid fa-box-open"></i>Logistics</p>
                    <li style={{ color: Color1 }}>
                        Shipment List
                    </li>
                    <li style={{ color: Color2 }}>
                        Shipment Details
                    </li>
                    <li>Create Shipment</li>
                    <li>Customer Profile</li>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-file"></i> File Manager</p>
                </div>
                <br />
                <label htmlFor="for">WIDGETS</label>
                <div className='link'>
                    <p><i class="fa-solid fa-cart-shopping"></i>Cards</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-icons"></i>Icons</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-chart-line"></i>Charts</p>
                </div>
                <div className='link'>
                    <p><i class="fa-regular fa-square"></i>Banners</p>
                </div>
                <div className='link'>
                    <p><i class="fa-solid fa-map-pin"></i>Maps</p>
                </div>
            </div>

        </div>
        
        </div>
        
        </>
    )
}

export default Sidebar
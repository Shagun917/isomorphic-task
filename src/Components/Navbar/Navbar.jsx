import React from 'react'
import './Navbar.css'

const Navbar = ({onModeChange}) => {
    let c = 'black';
    const handleModeSelect = () => {
        onModeChange();
        if(c == 'white')
            c = 'black';
        else
            c = 'white';
    };

    return (
        <>
        <div className='nav'>
        <div>
            <input id="search" type="text" placeholder='Type what you are looking for... '/>
        </div>
            <div className='right-three'>
            <div className='two'>
            <i class="fa-regular fa-message" id='mode'></i>
            </div>
            <div className='two' id='mode'>
            <i class="fa-regular fa-sun" onClick={() => handleModeSelect()}></i>
            </div>
            <div className='two'>
            <i class="fa-solid fa-bell" id='mode'></i>
            </div>
            <img src="./src/assets/profile.png" id='mode' className='profiles'/>
        </div>
            </div>    
        </>
    )
}

export default Navbar
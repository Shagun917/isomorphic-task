import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className='nav'>
            <i class="fa-solid fa-lines-leaning"></i>
            isomorphic
        <div>
            <input id="search" type="text" placeholder='Type what you are looking for... '/>
        </div>
            <div className='right-three'>
            <div className='two'>
            <i class="fa-regular fa-message"></i>
            </div>
            <div className='two'>
            <i class="fa-regular fa-sun"></i>
            </div>
            <div className='two'>
            <i class="fa-solid fa-bell"></i>
            </div>
            <img src="./src/assets/profile.jpg" />
        </div>
            </div>    
        </>
    )
}

export default Navbar
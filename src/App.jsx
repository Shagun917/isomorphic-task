import React, {useEffect, useState} from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import Logistics from './Components/Logistics/Logistics'
import Load from './Components/Load/Load'
import Shipment_Details from './Components/Logistics/Shipment_Details'
import './App.css'

const App = () => {
  const [isStateUpdated, setIsStateUpdated] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [Color1, setColor1] = useState('blue');
  const [Color2, setColor2] = useState('grey');

  const handleStateChange = () => {
    setIsStateUpdated(true);
    setShowNavbar(false);
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowSecondComponent(true);
    }, 2000);
  };
  const handleColorChange = () => {
    setColor1('grey');
    setColor2('blue');
  };
  return (
      <>
        <Sidebar Color1={Color1} Color2={Color2}/>
        <Navbar />
        {showNavbar && <Logistics onStateChange={handleStateChange } tab={handleColorChange}/>}
        {showLoading && <Load/>}
        {showSecondComponent && <Shipment_Details/>}
      </>
  )
}

export default App

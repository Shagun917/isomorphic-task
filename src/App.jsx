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
  const [Color1, setColor1] = useState('#0f53d2');
  const [Color2, setColor2] = useState('grey');
  const [Mode, setMode] = useState(false);

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
    setColor2('#0f53d2');
  };
  const handleModeChange = () => {
    setMode(!Mode);
  };
  return (
      <>
        <Sidebar Color1={Color1} Color2={Color2} Mode={Mode}/>
        <Navbar onModeChange={handleModeChange} />
        {showNavbar && <Logistics onStateChange={handleStateChange } tab={handleColorChange} Mode={Mode}/>}
        {showLoading && <Load/>}
        {showSecondComponent && <Shipment_Details/>}
      </>
  )
}

export default App

import React, { useEffect } from 'react';


import { BsGear  } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import {   UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color }) => (
 
   <button
  type="button"
  onClick={() => customFunc()}
  style={{ color: "black" }} // Change the color to black here
  className="relative text-xl rounded-full p-3 hover:bg-light-gray"
>

     
      {icon}
    </button>

);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);



  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative navbar-container" style={{ backgroundColor: 'white' }}>
      <div className="flex">
        {isClicked.notification }
        {isClicked.userProfile && (<UserProfile />)}
      </div>
      <div className="flex">
        <NavButton title="Settings" customFunc={() => handleClick('Settings')} color={currentColor} icon={<BsGear />} />
        <NavButton title="Notification" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  );
};

export default Navbar;

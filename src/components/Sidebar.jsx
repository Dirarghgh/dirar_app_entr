import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './style.css'; 
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md bg-yellow-500 m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  // Function to render notification dots
  const renderNotificationDots = (count) => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      dots.push(<div key={i} className="notification-dot" style={{ backgroundColor: 'yellow' }}></div>);
    }
    return dots;
  };

  return (
    <div className="sidebar-container">
      {activeMenu && (
        <>
         
          <div className="flex justify-between items-center header">
            <div className="header-logo">OZ CORP</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c309030f205a25172c2f530e3e80ce2d8a4fa20b97a4c173b2fd629675f59e3c?apiKey=16edf050187a4ba683d958ed97898d7e&"
              alt="Company Logo"
              className="logo-image"
            />
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                {item.title && (
                  <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                    {item.title}
                  </p>
                )}
                {item.links.map((link) => (
               <NavLink
               to={link.to || `/${link.name}`} 
               key={link.name}
               onClick={handleCloseSideBar}
               style={({ isActive }) => ({
                backgroundColor: isActive ? '#F0C43C' : '',
               })}
               className={({ isActive }) => (isActive ? activeLink : normalLink)}
             >
               {link.iconSrc ? (
                 <>
                   <img src={link.iconSrc} alt={link.name} style={{ width: '20px', height: '20px' }} />
                   {/* {link.notificationCount && <span className="notification-count">{link.notificationCount}</span>} */}
                 </>
               ) : (
                 link.icon
               )}
               <span className="capitalize">{link.name}</span>
               {/* Add a check for Dashboard link */}
               {link.name === 'Dashboard' && (
                 <div className="dashboard-info">
                   <div className="notification-circle">5</div>
                   <div className="icon-chevron">&gt;</div>
                 </div>
               )}
               {link.name === 'Notifications' && (
                 <div className="dashboard-info">
                   <div className="notification-circle">48</div>
                 </div>
               )}
             </NavLink>
             
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
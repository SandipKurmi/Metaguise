import React from 'react';
//import { Outlet } from 'react-router-dom';
import Header from './Header'; 

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
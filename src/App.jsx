import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
{/* header */}
      <Header></Header>
{/* Outlet */}
      <div className='min-h-[calc(100vh-136px)]'>
          <Outlet></Outlet>
      </div>
{/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
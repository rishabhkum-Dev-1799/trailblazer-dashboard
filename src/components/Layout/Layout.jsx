import moment from 'moment/moment';
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import styles from './Styles/Layout.module.css';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={styles.container}>
        <SideBar />
        {pathname === '/' && <Navigate to='/dashboard' />}
        <div className={styles.dashboard}>
          <div className={styles.topBaseGradients}>
            <div className='gradient-red'></div>
            <div className='gradient-orange'></div>
            <div className='gradient-blue'></div>
          </div>
          <div className={styles.header}>
            <span>{moment().format('dddd,do-MMM-YYYY')}</span>
            <div className={styles.search}>
              <BiSearch size={20} />
              <input type='text' placeholder='Search' />
            </div>
            <div className={styles.profile}>
              <img src='./profile.png' alt='profile image' />
              <div className={styles.details}>
                <span>Kratos Codes</span>
                <span>kratoscodes@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;

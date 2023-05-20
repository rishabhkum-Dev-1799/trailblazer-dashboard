import React from 'react';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import styles from './Styles/SideBar.module.css';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className={styles.container}>
      <img src='./logo.png' alt='dashboard logo' className={styles.logo} />
      <div className={styles.menu}>
        <NavLink to='/dashboard' className={styles.item} title='Dashboard'>
          <MdSpaceDashboard size={30} />
        </NavLink>
        <NavLink to='calender' className={styles.item} title='Calender'>
          <AiFillCalendar size={30} />
        </NavLink>
        <NavLink to='board' className={styles.item} title='Trello Board'>
          <FaTasks size={30} />
        </NavLink>
        <NavLink to='users' className={styles.item} title='Users'>
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
};
export default SideBar;

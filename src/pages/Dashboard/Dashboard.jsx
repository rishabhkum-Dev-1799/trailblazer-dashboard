import React from 'react';
import styles from './Styles/Dashboard.module.css';
import { cardsData, groupNumber } from '../../data/index';
import Statistics from '../../components/Statistics/Statistics';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      {/* left side */}
      <div className={styles.dashboard}>
        <div className={`${styles.dashboardHead} theme-container`}>
          <div className={styles.head}>
            <span>Dashboard</span>
            <div className={styles.durationButton}>
              <select>
                <option value=''>1 week</option>
                <option value=''>1 month</option>
                <option value=''>1 year</option>
              </select>
            </div>
          </div>
          <div className={styles.cards}>
            {cardsData.map((card, i) => {
              return (
                <div key={i} className={styles.card}>
                  <div className={styles.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>
                  <div className={styles.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Statistics />
      </div>
      {/* right side */}
      <div className={styles.orders}>orders</div>
    </div>
  );
};

export default Dashboard;

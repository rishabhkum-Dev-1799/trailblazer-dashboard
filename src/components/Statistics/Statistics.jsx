import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';
import { groupNumber } from '../../data';
import StatisticsChart from './StatisticsChart';
import styles from './Styles/Statistics.module.css';

const Statistics = () => {
  return (
    <div className={`${styles.container} theme-container`}>
      <span className={styles.title}>Overview Statistics</span>
      <div className={`${styles.cards} grey-container`}>
        <div>
          <div className={styles.arrowicon}>
            <BsArrowUpShort />
          </div>
          <div className={styles.card}>
            <span>Top item this month</span>
            <span>Office Comps</span>
          </div>
        </div>
        <div className={styles.card}>
          <span>Items</span>
          <span>$ {groupNumber(378)}</span>
        </div>
        <div className={styles.card}>
          <span>Profit</span>
          <span>$ {groupNumber(37000)}</span>
        </div>
        <div className={styles.card}>
          <span>Daily Average</span>
          <span>$ {groupNumber(2000)}</span>
        </div>
      </div>
      <StatisticsChart />
    </div>
  );
};

export default Statistics;

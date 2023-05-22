import React from 'react';
import { groupNumber, ordersData } from '../../data';
import OrdersPieChart from './OrdersPieChar';
import styles from './Styles/Orders.module.css';

const Orders = () => {
  return (
    <div className={`${styles.container} theme-container`}>
      <div className={styles.head}>
        <img src='./logo.png' alt='dashboard-logo' className={styles.logo} />
        <span>Orders Today</span>
      </div>
      <div className={`${styles.stat} grey-container`}>
        <span>Amount</span>
        <span>$ {groupNumber(4560)}</span>
      </div>
      <div className={styles.orders}>
        {ordersData.map((order, i) => {
          return (
            <div className={styles.order}>
              <div>
                <span>{order.name}</span>
                <span>${order.change}</span>
              </div>
              <div>
                <span>{order.type}</span>
                <span>Items: {order.items}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.orderschart}>
        <span>Split by orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;

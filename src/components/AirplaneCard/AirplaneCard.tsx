import React from 'react';
import { ReactComponent as AirplaneIcon } from '../../img/airplane.svg';
import styles from './AirplaneCard.module.scss';

interface AirplaneCardProps {
  title: string;
  content: string;
}

export const AirplaneCard: React.FC<AirplaneCardProps> = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <AirplaneIcon width={50} height={50} color='orange' />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

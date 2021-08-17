import React from 'react';
import s from './HomePage.module.scss';

const HomePage = () => (
  <div className={s.root}>
    <h1>TODO LIST</h1>
    <div className={s.appWrapper}>
      <input
        className={s.input}
        type="text"
        placeholder="What needs to be done?"
        style={{ display: 'none' }}
      />
    </div>
    {/* <div className={s.bubble1} />
    <div className={s.bubble2} /> */}
  </div>
);

export default HomePage;

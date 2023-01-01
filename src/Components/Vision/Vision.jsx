import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Vision.module.css';
import { Stepper } from 'spectacle';

const Vision = () => {
  return (
    <>
      <Navbar active="vision" />
      <div className={classes.vision}>
        {/* <h1 className={classes.text}>Vision</h1> */}
        <div className={classes.separator1}></div>
        <ul className={classes.list}>
          <div className={classes.items}>
            <Stepper tagName="li" alwaysVisible values={['const visions = { ']}>
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={[
                'Succeed my mentor Ameya Jain and take forward their legacy.,'
              ]}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Promoting what Mentro is doing,']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={[
                'I am good mentor and teacher so I can also mentor other,'
              ]}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper
              tagName="li"
              alwaysVisible
              values={['Organize some great events if possible in my campus']}
            >
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
          <div className={classes.items}>
            <Stepper tagName="li" alwaysVisible values={['}']}>
              {(value, step, isActive) => (isActive ? value : '')}
            </Stepper>
          </div>
        </ul>
        <div className={classes.separator2}></div>
      </div>
    </>
  );
};

export default Vision;

import React from 'react';
import classNames from 'classnames';
import styles from './ButtonGroup.Module.scss';

const OneButton = (props) => {
    return (
        <div className={styles.oneButtonWrapper}>
          <button>{props.action}</button> 
          <p>{props.text}</p> 
        </div>
    );
}

export default OneButton;

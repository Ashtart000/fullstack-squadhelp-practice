import React from 'react';
import classNames from 'classnames';
import styles from './ButtonGroup.Module.scss';

const OneButton = (props) => {
    const buttonClasses = classNames(
        styles.oneButtonWrapper,
        { [styles.clicked]: props.isSelected }
    );

    return (
        <div className={buttonClasses} onClick={() => props.onClick(props.btnKey)}>
          <button>{props.btnText}</button> 
          <p>{props.btnDescription}</p> 
        </div>
    );
}

export default OneButton;

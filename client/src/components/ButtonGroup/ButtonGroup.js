import React, { useState } from 'react';
import OneButton from './OneButton';
import CONSTANTS from '../../constants';
import styles from './ButtonGroup.Module.scss'

const ButtonGroup = ({ contestType, selectedButton, onBtnClick, size }) => {
    const buttonGroupStyles = size === 'large' ? styles.buttonGroupWrapper : styles.buttonGroupWrapperSmall;
    
    if (contestType === CONSTANTS.NAME_CONTEST) {
        return (
            <div className={buttonGroupStyles}>
                <OneButton 
                    btnKey={1}
                    btnDescription={'The Domain should exactly match the name'}
                    onClick={onBtnClick}
                    isSelected={selectedButton === 1}
                />
                <OneButton 
                    btnKey={2}
                    btnDescription={'But minor variations are allowed\n(Recommended)'}
                    onClick={onBtnClick}
                    isSelected={selectedButton === 2}
                />
                <OneButton 
                    btnKey={3}
                    btnDescription={'I am only looking for a name, not a Domain'}
                    onClick={onBtnClick}
                    isSelected={selectedButton === 3}
                />
            </div>
        );
    }
    return null;
}

export default ButtonGroup;

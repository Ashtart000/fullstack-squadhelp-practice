import React, { useState } from 'react';
import OneButton from './OneButton';
import CONSTANTS from '../../constants';
import styles from './ButtonGroup.Module.scss'

const ButtonGroup = ({ contestType }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleBtnClick = (btnKey) => {
        setSelectedButton((prevSelected) => (prevSelected === btnKey ? null : btnKey));
    }
    
    if (contestType === CONSTANTS.NAME_CONTEST) {
        return (
            <div className={styles.buttonGroupWrapper}>
                <OneButton 
                    btnKey={1}
                    btnText={'Yes'} 
                    btnDescription={'The Domain should exactly match the name'}
                    onClick={handleBtnClick}
                    isSelected={selectedButton === 1}
                />
                <OneButton 
                    btnKey={2}
                    btnText={'Yes'} 
                    btnDescription={'But minor variations are allowed\n(Recommended)'}
                    onClick={handleBtnClick}
                    isSelected={selectedButton === 2}
                />
                <OneButton 
                    btnKey={3}
                    btnText={'No'} 
                    btnDescription={'I am only looking for a name, not a Domain'}
                    onClick={handleBtnClick}
                    isSelected={selectedButton === 3}
                />
            </div>
        );
    }
    return null;
}

export default ButtonGroup;

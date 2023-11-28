import React from 'react';
import OneButton from './OneButton';
import CONSTANTS from '../../constants';
import styles from './ButtonGroup.Module.scss'

const ButtonGroup = ({ contestType }) => {
    if (contestType === CONSTANTS.NAME_CONTEST) {
        return (
            <div className={styles.buttonGroupWrapper}>
                <OneButton action={'Yes'} text={'The Domain should exactly match the name'}/>
                <OneButton action={'Yes'} text={'But minor variations are allowed\n(Recommended)'}/>
                <OneButton action={'No'} text={'I am only looking for a name, not a Domain'}/>
            </div>
        );
    }
    return null;
}

export default ButtonGroup;

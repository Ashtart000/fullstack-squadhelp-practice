import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import styles from './EventsPage.module.scss';

const EventsListItem = (props) => {
    const {event, onDelete} = props;

    const eventEndTime = new Date(`${event.date} ${event.time}`);
    const [remainingTime, setRemainingTime] = useState(eventEndTime - new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(eventEndTime - new Date())
        }, 1000);
        return () => clearInterval(timer);
    }, [eventEndTime])

    const remainingValues = (remainingTime) => {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      
        return [days, hours, minutes, seconds];
    }

    const [days, hours, minutes, seconds] = remainingValues(remainingTime);

    return (
        <div className={styles.eventListItem}>
            <div className={styles.eventName}>
                {event.name} 
            </div>
            <div className={styles.eventRemainingTime}>
                {days > 0 && `${days}d `}
                {hours > 0 && `${hours}h `}
                {minutes > 0 && `${minutes}m `}
                {seconds > 0 && `${seconds}s`}              
            </div>
            <button onClick={onDelete}>X</button>          
        </div>
    );
}

export default EventsListItem;

import React, {useState, useEffect, useMemo} from 'react';
import { toast } from 'react-toastify';
import styles from './EventsListItem.module.scss';
import { calculateFillWidth, calculateRemainingValues, calculateRemainingWidthInHours, calculateRemainingWidthInMinutes } from './calculateTimeUtils';

const EventsListItem = (props) => {
    const {event, onDelete} = props;

    const eventEndTime = useMemo(() => 
        new Date(`${event.date} ${event.time}`), [event.date, event.time]);

    const [remainingTime, setRemainingTime] = useState(eventEndTime - new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(eventEndTime - new Date())
        }, 1000);
        return () => clearInterval(timer);
    }, [eventEndTime]);

    const timeToNotice = Math.max(remainingTime - (event.notifyIn * 60 * 1000), 0);

    useEffect(() => {
        if (timeToNotice > 0 && timeToNotice < (3*7*24*60*60*1000)) {  // 30240 in minutes
            const noticeTimer = setTimeout(() => {
                toast.info(`Time to ${event.name}!`, {
                    autoClose: 15000, 
                    hideProgressBar: false,
                    style: { background: 'red' },
                });
            }, timeToNotice);
            return () => clearTimeout(noticeTimer);
        }
    }, [timeToNotice, event.name]);

    const [days, hours, minutes, seconds] = calculateRemainingValues(remainingTime);

    //max 100h or 100m
    const remainingWidhtInHours = calculateRemainingWidthInHours(remainingTime);
    const remainingWidhtInMinutes = calculateRemainingWidthInMinutes(remainingTime);

    const fillWidth = calculateFillWidth(remainingWidhtInHours);

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
            {days + hours + minutes + seconds <= 0 && <div>EXPIRED</div>}
            <div
                className={styles.progressBar}
                style={{ width: fillWidth }}
            />
            <button onClick={onDelete}>X</button>          
        </div>
    );
}

export default EventsListItem;

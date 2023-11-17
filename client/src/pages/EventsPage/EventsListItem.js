import React, {useState, useEffect} from 'react';

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
        <div>
            {event.name} - {event.date} - 
            {days > 0 && `${days} days, `}
            {hours > 0 && `${hours} hours, `}
            {minutes > 0 && `${minutes} minutes, `}
            {seconds > 0 && `${seconds} seconds`}
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default EventsListItem;

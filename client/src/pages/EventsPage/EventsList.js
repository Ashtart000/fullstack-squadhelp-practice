import React from 'react';
import { connect } from 'react-redux';

const EventsList = ({events}) => {

    const sortedEvents = [...events].sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateA - dateB;
        });

    return (
        <div>
            <ul>
                {sortedEvents.length > 0 ?
                sortedEvents.map((event, index) => (
                <li key={index}>
                    {event.name} - {event.date} {event.time}
                </li>
                )) :
                <div>NO EVENTS YET</div>}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => ({
    events: state.eventStore.events,
});

export default connect(mapStateToProps)(EventsList);

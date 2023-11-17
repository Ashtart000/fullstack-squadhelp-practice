import React from 'react';
import { connect } from 'react-redux';
import EventsListItem from './EventsListItem';

const EventsList = ({events}) => {

    const sortedEvents = [...events].sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateA - dateB;
        });

    const renderEvents = () => {
        return sortedEvents.map((event) => <EventsListItem 
        event={event}
        key={event.id}
        />)
    }

    return (
        <div>
            {sortedEvents.length > 0 ? renderEvents() : <h3>NO EVENTS YET</h3>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    events: state.eventStore.events,
});

export default connect(mapStateToProps)(EventsList);

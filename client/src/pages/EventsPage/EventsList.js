import React from 'react';
import { connect } from 'react-redux';
import EventsListItem from './EventsListItem';
import { removeEvent } from '../../actions/actionCreator';

const EventsList = (props) => {
    const { events, removeEvent } = props;

    const sortedEvents = [...events].sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`);
            const dateB = new Date(`${b.date} ${b.time}`);
            return dateA - dateB;
        });

    const renderEvents = () => {
        return sortedEvents.map((event) => <EventsListItem 
        event={event}
        key={event.id}
        onDelete={() => removeEvent(event)}
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

const mapDispatchToProps = (dispatch) => ({
    removeEvent: (data) => dispatch(removeEvent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

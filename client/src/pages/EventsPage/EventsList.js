import React from 'react';
import { connect } from 'react-redux';
import EventsListItem from './EventsListItem';
import { removeEvent } from '../../actions/actionCreator';
import styles from './EventsPage.module.scss';

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
        <section className={styles.eventListContainer}>
            <div className={styles.eventListTitleWrapper}> 
                <h2>Live upcomming checks</h2>
                <div className={styles.eventTitleClock}>
                    <p>Remaining time</p>
                    <i class="far fa-clock"></i>
                </div>
            </div>          
            <div className={styles.eventListItemContainer}>
                {sortedEvents.length > 0 ? renderEvents() : <p>No events yet</p>}
            </div>
        </section>

    );
}

const mapStateToProps = (state) => ({
    events: state.eventStore.events,
});

const mapDispatchToProps = (dispatch) => ({
    removeEvent: (data) => dispatch(removeEvent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);

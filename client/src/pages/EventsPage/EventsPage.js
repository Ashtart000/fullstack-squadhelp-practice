import React from 'react';
import Header from '../../components/Header/Header';
import EventsForm from './EventsForm';
import EventsList from './EventsList';

const EventsPage = () => {
    return (
        <div>
            <Header />
            <EventsList />
            <EventsForm />
        </div>
    );
}

export default EventsPage;

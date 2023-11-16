import React from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/actionCreator';
import moment from 'moment';

const EventsForm = (props) => {
    const { events, addEvent} = props;

    const initialValues = {
        eventName: '',
        eventDate: '',
        eventTime: '',
        eventNotifyIn: ''
    };

    const onSubmit = (values, actions) => {
        const newEvent = {
            name: values.eventName,
            date: values.eventDate,
            time: values.eventTime,
            notifyIn: values.eventNotifyIn,
            id: Date.now()
        };
        actions.resetForm();
        addEvent(newEvent); 
    };

    return (
        <>
            <h3>EVENT FORM</h3>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(props) => (
                    <Form>
                        <Field name='eventName' placeholder='Enter event description' />
                        <Field type='date' name='eventDate' placeholder='Enter event date'/>
                        <Field type='time' name='eventTime' placeholder='Enter event time'/>
                        <Field type='number' name='eventNotifyIn' placeholder='Notify in (minutes)'/>
                        <button type='submit'>Send</button>
                    </Form>
                )}   
            </Formik>
        </>
    );
}

const mapStateToProps = (state) => ({
    events: state.eventStore.events,
});

const mapDispatchToProps = (dispatch) => ({
    addEvent: (data) => dispatch(addEvent(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsForm);

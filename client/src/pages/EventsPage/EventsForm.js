import React from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/actionCreator';
import styles from './EventsForm.module.scss'

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
        <section className={styles.formContainer}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(props) => (
                    <Form>
                        <h3>Add new Event</h3>
                        <div className={styles.fieldName}>
                            <Field name='eventName' placeholder='Enter event description' />
                        </div>
                        <div className={styles.fieldDate}>
                            <Field type='date' name='eventDate' placeholder='Enter event date'/>
                            <Field type='time' name='eventTime' placeholder='Enter event time'/>
                            <Field type='number' name='eventNotifyIn' placeholder='Notify in (minutes)'/>
                        </div>
                        <div className={styles.formButtons}>
                            <button type='reset'>Clear</button>
                            <button type='submit'>Send</button>
                        </div>
                    </Form>
                )}   
            </Formik>
        </section>
    );
}

const mapStateToProps = (state) => ({
    events: state.eventStore.events,
});

const mapDispatchToProps = (dispatch) => ({
    addEvent: (data) => dispatch(addEvent(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsForm);

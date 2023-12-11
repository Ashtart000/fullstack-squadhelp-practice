import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserAction } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const PrivateHoc = (Component, props) => {
  const mapStateToProps = (state) => ({
    user: state.userStore.data,
    isFetching: state.userStore.isFetching,
  });

  const mapDispatchToProps = (dispatch) => ({
    getUser: (data) => dispatch(getUserAction(data)),
  });

  const Hoc = ({ user, isFetching, getUser, history, match, ...rest }) => {
    useEffect(() => {
      if (!user) {
        getUser(history.replace);
      }
    }, [user]);

    if (isFetching) {
      return <Spinner />;
    }

    return user ? (
      <Component user={user} history={history} match={match} {...props} {...rest} />
    ) : (
      <Redirect to="/login" />
    );
  };

  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default PrivateHoc;

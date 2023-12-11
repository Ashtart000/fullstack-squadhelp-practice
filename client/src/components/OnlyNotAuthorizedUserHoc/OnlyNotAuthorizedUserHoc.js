import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const OnlyNotAuthorizedUserHoc = (Component) => {
  const mapStateToProps = (state) => ({
    user: state.userStore.data,
    isFetching: state.userStore.isFetching,
  });

  const mapDispatchToProps = (dispatch) => ({
    checkAuth: (data) => dispatch(onlyForNotAuthorize(data)),
  });

  const HocForLoginSignUp = ({user, isFetching, checkAuth, history, ...rest}) => {
    useEffect(() => {
      checkAuth(history.replace);
    }, [user]);

    
    if (isFetching) {
      return <Spinner />;
    } if (!user) {
      return <Component history={history} />;
    }
    return null;
  }

  return connect(mapStateToProps, mapDispatchToProps)(HocForLoginSignUp);
};

export default OnlyNotAuthorizedUserHoc;

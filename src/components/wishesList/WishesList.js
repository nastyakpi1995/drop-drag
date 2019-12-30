import React from 'react';

// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const WishesList = () => {

  return (
    <div className="App">
     WishesList
    </div>
  );
};

WishesList.propTypes = {
  // requestProducts: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({
//   products: state
// });

const mapDispatchToProps = dispatch => ({
  // requestProducts: () => dispatch(requestForProducts()),
});

export default connect(
  // mapStateToProps,
  mapDispatchToProps,
)(WishesList);

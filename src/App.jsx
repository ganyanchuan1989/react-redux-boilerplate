import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import style from './App.css';
import { ADD, SUB } from './actions';
import Count from './components/Count';

class App extends Component {
  render() {
    return (
            <div className={style.main}>
				<Count Value={this.props.store.getState()}
					ADD={() => this.props.store.dispatch(ADD())}
					SUB={() => this.props.store.dispatch(SUB())}
				/>
            </div>
    );
  }
}
App.propTypes = {
  // name: PropTypes.string,
};

export default App;

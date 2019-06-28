import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}
// let name = 'Kittu';

ReactDOM.render(
  <Greeting firstName= 'Kittu' />, 
  document.getElementById('app')
);
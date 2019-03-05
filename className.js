import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
// In JSX, you can't use the word class! You have to use className instead
// When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
const myDiv = (<div className="big">I AM A BIG DIV</div>);

ReactDOM.render(myDiv, document.getElementById('app'));

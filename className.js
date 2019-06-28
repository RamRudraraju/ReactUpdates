import React from 'react';
import ReactDOM from 'react-dom';

// Write code here: When JSX is rendered, JSX className attributes are automatically rendered as class attributes.
const myDiv = (<div className="big">I AM A BIG DIV</div>);

ReactDOM.render(myDiv, document.getElementById('app'));
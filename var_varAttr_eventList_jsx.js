import React from 'react';
import ReactDOM from 'react-dom';

// 1) Variable Injection into JSX
const theBestString = 'tralalalala i am da best';
ReactDOM.render(<h1> {theBestString} </h1>, document.getElementById('app1'));
                
                
                
// 2) Variable Attribute Injection into JSX
const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
   // Declare new variable here:
const gooseImg = <img src={goose} />
ReactDOM.render(gooseImg, document.getElementById('app2'));




// 3) Event Listeners (Calling a Function)
function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick= {makeDoggy}/> 
);
ReactDOM.render(kitty, document.getElementById('app3'));
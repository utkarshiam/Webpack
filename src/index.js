import React from 'react';
import ReactDOM from 'react-dom';

const friends =['Anne','Bill','Cathy']
console.log(friends);

var double= x =>2*x;
console.log(double(5));

const App= () => <h1>Hello</h1>;
ReactDOM.render(<App/>, document.getElementById('root'))

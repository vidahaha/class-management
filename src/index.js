import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom';

ReactDOM.render((
	<Router>
		<Route path="/" component={App}/>
  	</Router>
), document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

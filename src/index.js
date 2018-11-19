import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './routes';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faEnvelope, faUser, faTag, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faMapMarkerAlt, faEnvelope, faUser, faTag, faCheck);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

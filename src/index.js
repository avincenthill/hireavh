import App from 'routes/routes';
import React from 'react';
import ReactDOM from 'react-dom';
import analytics from './analytics';

analytics.init(new Date());

ReactDOM.render(<App />, document.getElementById('root'));

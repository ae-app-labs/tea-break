var React = require('react')
var ReactDOM = require('react-dom')
var Fire = require('./fire')

var app = document.getElementById('app');
var AppComponent = require('./containers/AppContainer');
ReactDOM.render(<AppComponent />, app);

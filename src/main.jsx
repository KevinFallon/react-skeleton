var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List.jsx");

//generate List and place it where ingredients ID is.
ReactDOM.render(<List />, document.getElementById('ingredients'));

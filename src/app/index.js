var React = require('react');
var ReactDOM = require('react-dom');

//create component
var TodoComponent = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Ninja</h1>
        <p>Helllooooo</p>
      </div>
    );
  }
});

//put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));

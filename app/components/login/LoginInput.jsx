var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className="loginForm">
        <input type="text" className="usernameForm"/>
        <input type="text" className="userPass"/>
      </div>
    );
  }
})

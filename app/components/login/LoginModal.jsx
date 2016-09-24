var React = require('react');
var Modal = require('boron/DropModal');
var LoginInput = require("./LoginInput.jsx");

module.exports = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
        this.refs.modal.hide();
    },

    callback: function(event){
        console.log(event);
    },

    render: function() {
        return (
            <div>
              <button onClick={this.showModal}>Login</button>
              <Modal ref="modal" keyboard={this.callback}>
                <LoginInput />
                <button onClick={this.hideModal}>Close</button>
              </Modal>
            </div>
        );
    }
});

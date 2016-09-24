var React = require('react');
var StudentCard = require("./StudentCard.jsx");

module.exports = React.createClass({
  render:function(){
    return (
      <div>
        <h1> Student List </h1>
        <div>
          {this.props.students.map(function(student, index){
            return(
              <StudentCard student={student} key={"item" + index} />
            )
          })
          }
        </div>
      </div>
    )
  }
})

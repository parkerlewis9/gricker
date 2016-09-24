var React = require('react');
var ReactDOM = require("react-dom");
console.log("Hello from JSX")
var StudentList = require("./components/StudentList.jsx");


var list = [
    {name: "Sally"},
    {name: "Bobby"},
    {name: "Billy Joe"},
    {name: "Satan"}
];

ReactDOM.render(<StudentList students={list} />, app)

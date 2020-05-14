import React, { Component } from 'react';
import './Person.css'
class Person extends Component{
    render() {
        return (
            <div className="person-card">
                <h1>Name : {this.props.name}</h1>
                <h5>Phone: {this.props.phone}</h5>
                <h5>Birth: {this.props.dob}</h5>
                <h5>Gender: {this.props.gender}</h5>
            </div>
        )
    }
}
export default Person;

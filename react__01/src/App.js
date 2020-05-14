import React, {Component} from 'react';
import './App.css';
import Person from './Person';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      persons:[
        { name: 'Hector Hernandez',
      phone: "703-565-8477",
      dob:'September 03,2001',
      gender:'male'},
      { name: 'Chucky E Cheese',
      phone: "1726-172662",
      dob:'October 1 ,2001',
      gender:'Male'},
      { name: 'Steve Rod',
      phone: "172-189-1821",
      dob:'June 21, 2001',
      gender:'Male'},
      { name: 'Mat Sten',
      phone: "8233",
      dob:'July 02, 1725',
      gender:'male'},
      { name: 'Billy',
      phone: "Kelly Sten",
      dob:'Decemeber 25,2917',
      gender:'Female'}
      ]
    };
  }
  render(){
    const person = this.state.persons;
    return(
      <div className="App">
          {person.map(el => <Person name={el.name} phone={el.phone}  dob={el.dob} gender={el.gender}/> )}
      </div>
    )
  }
}
export default App;

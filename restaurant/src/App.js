import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';

// For Calender
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {users: [],
           startDate: new Date()
           };
  
   handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  sendData = date => {

    fetch('http://localhost:3000/reserve', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // sending the current date selected
          dateToSend: date
          
        })
  })
  console.log(this.state.startDate)
}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <Navbar /> {/**Navbar Here */}
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}

      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        onSelect={this.sendData}
        
      />
      </div>
    );
  }
}

export default App;
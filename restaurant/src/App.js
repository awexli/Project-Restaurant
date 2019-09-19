import React, { Component } from 'react';
import './App.css';

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

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}

      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        
      />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    monsters: []
  }

  changeText  = () => {
    const name = this.state.name
    let newName = ''
    if(name === 'Unknown' || name === 'Márk') {
      newName = 'SipZork'
    } else {
      newName = 'Márk'
    }
    this.setState({name: newName});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => 
            <h1 key={monster.id}> {monster.name}</h1>
          )
        }
    </div>
    )
  }
}

export default App;

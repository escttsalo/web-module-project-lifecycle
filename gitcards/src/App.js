import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    gitUsers: '',
    gitName: ''
  }

  // componentDidMount() {
  //   axios.get(`https://api.github.com/users/escttsalo`)
  //   .then( res => {
  //     this.setState({
  //       gitUsers: res.data.message
  //     })
  //   })
  //   .catch( err => {
  //     console.log(err)
  //   })
  // }

  handleChange = e => {
    this.setState({
      gitName: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.gitName}`)
    .then(res => {
      this.setState({
        gitUsers: res.data
      })
    })
    .catch( err => {
      alert(err)
    })
  }

  render (){
    return(
    <div className="App">
      <h1>Github Card</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}/>
        <button>Fetch Data</button>
      </form>
      {
        !!this.state.gitUsers && 
        <div className='User'>
          <img src={this.state.gitUsers.avatar_url} alt=''></img>
          <p>{this.state.gitUsers.login}</p>
          <p>{this.state.gitUsers.name}</p>
          <p>{this.state.gitUsers.bio}</p>
          <p>Public repos: {this.state.gitUsers.public_repos}</p>
        </div>
      }
    </div>)
  };
}

export default App;

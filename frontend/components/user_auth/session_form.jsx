import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class SessionForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processAction(this.state)
}


  //
  render(){
    <div>
      <header>
        
      </header>
      <h2>Log In!</h2>
      <form className="session-form" onSubmit={this.handleSubmit}>
      <label>
        Username 
        <input type="text" value={this.state.username} onChange={this.update('username')} />
      </label>
      <label>
        Password  
        <input type="password" value={this.state.password} onChange={this.update('password')} />
      </label>
      </form>
    </div>
  }


}

export default SessionForm
import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderSwitch = this.renderSwitch.bind(this)
    this.loginDemoUser = this.loginDemoUser.bind(this)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  renderErrors(){
    if (!(this.props.errors.responseJSON)){
      console.log('hit no errors')
      return []; 
    } else {
      //errors log for login, not for signup 
      console.log('hit errors')
      let errors = this.props.errors.responseJSON.map((error, index) => <li key={index}> 
        {error}
      </li>)
      return (
        <div className="Errors">
          <ul>
            {errors}
          </ul>
        </div>
      )
    }
  }
  
  componentDidMount(){
    this.props.clearErrors()
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processAction(this.state).then(
      () => this.props.history.push('/home'))
  }

  loginDemoUser(){
    let demoUser = {
      username: 'demo',
      email: 'demo@demo.com',
      password: 'password'
    } 
    this.props.login(demoUser).then(
      () => this.props.history.push('/home'))
  }

  renderSwitch(){
    if (this.props.formType === 'signup'){
      //return link to login
      return (
        <div>
          <Link to='/login'>Already have an account?</Link>
          <button onClick={this.loginDemoUser}>
            Login as a demo user 
          </button>
        </div>
        
      )
    } else {
      //return link to signup 
      return (
        <div>
          <Link to='/signup'>Don't have an account?</Link>
          <button onClick={this.loginDemoUser}>
            Login as a demo user 
          </button>
        </div>
      )

    }
  }


  //
  render(){
    return (
    <div>
      <header>

      </header>
      <h2>{this.props.formType}</h2>
      <form className="session-form" onSubmit={this.handleSubmit}>
        <label>
          Username 
          <input type="text" value={this.state.username} onChange={this.update('username')} />
        </label>
         <label>
          Email 
          <input type="text" value={this.state.email} onChange={this.update('email')} />
        </label>
        <label>
          Password  
          <input type="password" value={this.state.password} onChange={this.update('password')} />
        </label>
        <label>
          <input className="session-form-continue" type="submit" value="Continue"/>
        </label>
      </form>
      {this.renderSwitch()}
      {this.renderErrors()}
    </div>
    )
  }


}

export default SessionForm
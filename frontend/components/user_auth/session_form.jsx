import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

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
      () => this.props.history.push('/home/notebooks'))
  }

  loginDemoUser(e){
    e.preventDefault();
    let demoUser = {
      username: 'demo',
      email: 'demo@demo.com',
      password: 'password'
    } 
    this.props.login(demoUser).then(
      () => this.props.history.push('/home/notebooks'))
  }

  renderSwitch(){
    if (this.props.formType === 'signup'){
      //return link to login
      return (
        <>
          <div>
          <Link to='/login' className="login-link">Already have an account?</Link>
          </div>
          <div className="button-container">
          <motion.button onClick={(e) => this.loginDemoUser(e)} whileHover={{scale: 1.5}} whileTap={{scale: 0.7}} className="bigGreenButton">
            Login as a demo user 
          </motion.button>
          </div>
        </>

        
      )
    } else {
      //return link to signup 
      return (
        <div>
          <div>
          <Link to='/signup'>Don't have an account?</Link>
          </div>
          <motion.button onClick={(e) => this.loginDemoUser(e)} whileHover={{scale: 1.5}} whileTap={{scale: 0.7}} className="bigGreenButton">
            Login as a demo user 
          </motion.button>
        </div>
      )

    }
  }


  //
  render(){
    return (
    <div className="session-modal">
      <h2>{this.props.formType}</h2>
      <form className="session-form" onSubmit={this.handleSubmit}>
        <label className="session-item">
          Username 
          <input type="text" value={this.state.username} onChange={this.update('username')} className="session-input"/>
        </label>
         <label className="session-item">
          Email 
          <input type="text" value={this.state.email} onChange={this.update('email')} className="session-input"/>
        </label>
        <label className="session-item">
          Password  
          <input type="password" value={this.state.password} onChange={this.update('password')} className="session-input"/>
        </label>
        <label className="session-item">
          <input className="session-form-continue" type="submit" value="Continue"/>
        </label>
        {this.renderSwitch()}
      {this.renderErrors()}
      </form>
    </div>
    )
  }


}

export default SessionForm
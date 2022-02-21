import React from 'react'

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="navBar">
        <div className="links-container">
          <a className="navBar-links" onClick={this.props.logout} href='#'>Logout</a>
          <a className="navBar-links" href='#'>Instructions</a>
        </div>
        <div className="links-container">
          <a className="navBar-links" href="https://github.com/woahwinzeler/Aa_classwork">GitHub</a>
          <a className="navBar-links" href="https://www.linkedin.com/in/owen-winzeler-1a6b22228/">LinkedIn</a>
        </div>
      </div>
    )
  }
}

export default NavBar;

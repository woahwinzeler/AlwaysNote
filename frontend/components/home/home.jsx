import React from 'react'
import UserSymbol from './shelf/user_symbol';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <UserSymbol /> 
      </div>
    )
  }
}

export default Home; 
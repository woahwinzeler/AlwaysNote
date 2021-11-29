import React from 'react'
import NotebookIndex from '../notebooks/notebook_index';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <NotebookIndex /> 
      </div>
    )
  }
}

export default Home; 
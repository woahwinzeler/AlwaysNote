import React from 'react'

class NotebookIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getAllNotebooks(); 
  }

  render(){
    console.log('here')
    console.log(this.props)

    return(
      <div className="notebooks">

      </div>

    )
  }
}

export default NotebookIndex; 
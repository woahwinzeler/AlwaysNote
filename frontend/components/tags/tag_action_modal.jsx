import React from 'react'

class TagActionModal extends React.Component{
  constructor(props){
    super(props)
  }  

  render(){
    if (this.props.modalOpen){
      return (
        <div className="action-tag-modal">
          
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default TagActionModal; 
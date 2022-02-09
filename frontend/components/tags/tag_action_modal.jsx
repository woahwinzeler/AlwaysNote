import React from 'react'
import { motion } from "framer-motion"



class TagActionModal extends React.Component{
  constructor(props){
    super(props)
  }  



  render(){
    if (this.props.modalOpen){
      return (
        <>
        <div className="action-tag-modal">
          {/* <div onClick={this.props.hideModal}> close modal </div> */}
          
        </div>
        <div className="modal-screen" onClick={this.props.hideModal}></div>
        </>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default TagActionModal; 
import React from 'react'
import { motion } from 'framer-motion'

class ConfirmationModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      rendered: false, 
      item: {}
    }
    this.confirmDeletion = this.confirmDeletion.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }  

  handleClose(){
    this.props.hideModal();
    this.setState({rendered: false})
  }


  confirmDeletion(){
    if(this.props.isNote){
      this.props.deleteNote(this.props.id)
    } else {
      this.props.deleteNotebook(this.state.item.id)
    }
    this.handleClose();
  }

  getNoteOrNotebook(){
    if(this.props.isNote){
      let note = this.props.id;
      this.setState({ rendered: true,
        item: note})
    } else{
      let notebook = this.props.notebooks[this.props.id]; 
      this.setState({rendered: true, item: notebook})
    }
  }

  render(){
    if (this.props.modalOpen){
      if(!this.state.rendered){
        this.getNoteOrNotebook()
      }
      return (
        <>
          <div className="confirmation-modal">
            <p> Are you sure you want to delete <strong> {this.state.item.title} </strong> forever? </p>
            <div className="confirmation-modal-buttons">
              <motion.button onClick={() => this.confirmDeletion()} id="delete-button"> Delete </motion.button>
              <motion.button onClick={this.handleClose} >No </motion.button>
            </div>
          </div>
          <div className="modal-screen" onClick={this.props.hideModal}></div>
        </>
      )
    } else {
      return (
        <div>
  
        </div>
      )
    }
  }
}

export default ConfirmationModal; 
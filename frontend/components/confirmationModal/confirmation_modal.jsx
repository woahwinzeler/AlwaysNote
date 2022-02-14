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
  }  


  confirmDeletion(){
    if(this.props.isNote){
      this.props.deleteNote(this.props.id)
    } else {
      console.log()
      this.props.deleteNotebook(this.state.item.id)
    }
    this.props.hideModal();
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
            <motion.button onClick={() => this.confirmDeletion()}> Delete </motion.button>
            <motion.button onClick={this.props.hideModal} >No </motion.button>
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
import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modal/modal'

class NotebookIndex extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      modalOpen: false,
      setModalOpen: false
    }

    this.newNotebookForm = this.newNotebookForm.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount(){
    this.props.getAllNotebooks(); 

    // let ele = document.getElementsByTagName('body')
    // console.log(ele)
    // ele[0].setAttribute('style', 'background-color:black')
  }

  toggleModal(){
    if (this.state.modalOpen){
      this.setState({setModalOpen: false})
    }
    else {
      this.setState({setModalOpen: true, 
        modalOpen: true
      })
    }
  }

  newNotebookForm(){
    return(
      <form>
        <label>
          Title 
          <input type="text" name="title"/>
        </label>
        <label>
          Description
          <input type="text" name="description"/>
        </label>
      </form>
    )
  }

  render(){
    let notebooks = this.props.notebooks.map((notebook, index) => <li key={index}>
      <h5> {notebook.title} </h5>
      <a> {notebook.description} </a>
    </li>)
    if (this.state.modalOpen){console.log('open the modal')}
    return(
      <div className="notebooks">
        <ul className="NotebookIndex">
          {notebooks}
        </ul>
        <motion.button className="newNotebookButton" onClick={this.toggleModal}
        whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Create new notebook</motion.button>
        {/* first argument is a boolean, second is the compenet to render */}
        {this.state.modalOpen && <Modal modalOpen={this.state.modalOpen} handleClose={this.toggleModal} />}
      </div>

    )
  }
}

export default NotebookIndex; 
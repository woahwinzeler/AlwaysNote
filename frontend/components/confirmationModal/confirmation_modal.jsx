import React from 'react'

class ConfirmationModal extends React.Component{
  constructor(props){
    super(props)

    //from props: modalOpen, hideModal, 


  }  

  render(){
    if (this.props.modalOpen){
      return (
        <>
          <div>

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
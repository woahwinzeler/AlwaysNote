import React from 'react'


class NewTagModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id: null,
      note: {
        title: "",
      }
    }

  } 

  componentDidUpdate(){
    if(this.props.selectedNoteId !== this.state.id){
      debugger 
      this.setState({
        id: this.props.selectedNoteId, 
        note: this.props.notes[this.props.selectedNoteId]
      })
    }
  }





  render(){
    if (this.props.modalOpen){
      let header = !!this.state.id ? "Creating a tag for:" + this.state.note.title : "No note selected"
      return (
        <>
        <div className="action-tag-modal">
          {/* <div onClick={this.props.hideModal}> close modal </div> */}
          <div className="note-title"> {header} </div>
          
        </div>
        <div className="modal-screen" onClick={this.props.hideModal}></div>
        </>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default NewTagModal; 
import React from 'react'


class NewTagModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      note_ids: [-1],
      notes: [],
      title: "",
      color: "#4BA541",
      user_id: this.props.userId,

    }

    this.handleSubmit = this.handleSubmit.bind(this);

  } 

  componentDidUpdate(){
    let noteId = parseInt(this.props.selectedNoteId);
    if(!!noteId){
      if( noteId !== this.state.note_ids[0] && this.state.notes.length < 2){
        this.setState({
          note_ids: [noteId], 
          notes: [this.props.notes[this.props.selectedNoteId]]
        }, () => console.log(this.state))
      }
    }
   
  }

  handleInput(type) {
    return e => {
        this.setState({[type]: e.currentTarget.value}, () => console.log(this.state))
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let tag = {
      tag: {
        title: this.state.title,
        color: this.state.color,
        user_id: this.state.userId || this.props.userId, 
        note_ids: this.state.note_ids
      }
    }
    this.props.createTag(tag)
    this.props.hideModal()
  }



  render(){
    if (this.props.modalOpen){
      let header = "Linked notes: "
      if (this.state.notes.length < 1 || this.state.notes[0] === undefined){
        header += "none"
      } else {
        for(let i = 0; i < this.state.notes.length; i++){
          header += this.state.notes[i].title;
        } 
      }

      console.log(this.props.notebooks)

      let notebooks = Object.values(this.props.notebooks).map(notebook => {
        return(
          <div className="create-tag-notebook-index">
            {notebook.title}
            <div className="small-gray-arrow-down"> </div>
          </div>
        )
      })




      return (
        <>
        <div className="action-tag-modal">
          <h2 className="action-tag-modal-header"> Create Tag </h2>
          {/* <div onClick={this.props.hideModal}> close modal </div> */}
          <div className="content-container">
            <div>
              <div className="note-title"> {header} </div>
              <form className="new-tag-modal-form" onSubmit={this.handleSubmit} >
                                <label className="tag-color"> Choose Color {this.state.color}
                                  <input id="color" onChange={this.handleInput("color")} type="color" required="required" />
                                  </label>
                                <div>
                                    <label className="tag-title"> Tag Title 
                                      <input onChange={this.handleInput("title")} type="text" required="required" name="label" />
                                    </label>
                                    <button className="tag-button" type="submit">Create Tag</button>
                                </div>
              </form>
            </div>
            <div className="notebook-index-contianer">
              {notebooks}
            </div>
          </div>
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
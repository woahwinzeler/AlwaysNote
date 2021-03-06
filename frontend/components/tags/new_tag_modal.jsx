import React from 'react'
import NoteListContainer from '../note/note_list_container'


class NewTagModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      note_ids: [],
      notes: [],
      title: "",
      color: "#4BA541",
      user_id: this.props.userId,
      OpenNotebooks: [],

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addOrRemoveNotebook = this.addOrRemoveNotebook.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleLinkNote = this.handleLinkNote.bind(this);

  } 

  componentDidUpdate(){
    let noteId = parseInt(this.props.selectedNoteId);
    if(!!noteId){
      if( noteId !== this.state.note_ids[0] && this.state.notes.length < 2){
        this.setState({
          note_ids: [noteId], 
          notes: [this.props.notes[this.props.selectedNoteId].title]
        })
      }
    }
   
  }

  handleInput(type) {
    return e => {
        this.setState({[type]: e.currentTarget.value}, () => console.log(this.state))
    }
  }

  addOrRemoveNotebook(e){
    let id = parseInt(e.currentTarget.title);
    let index = this.state.OpenNotebooks.indexOf(id)
    if (index === -1){
      this.setState({OpenNotebooks: [...this.state.OpenNotebooks, id]}, () => console.log(this.state))
      this.props.getAllNotes(id);
    } else {
      let notebooks = this.state.OpenNotebooks.slice();
      notebooks.splice(index, 1);
      this.setState({OpenNotebooks: notebooks}, () => console.log(this.state))
    }

  }

  resetState(){
    this.setState({ note_ids: [],
      notes: [],
      title: "",
      color: "#000000",
      user_id: this.props.userId,
      OpenNotebooks: [],})
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
    this.resetState();
  }

  handleLinkNote(note){
    let index = this.state.note_ids.indexOf(note.id);
    if(index === -1 ){
      this.setState({note_ids: [...this.state.note_ids, note.id], notes: [...this.state.notes, note.title]})
    } else {
      let note_ids = this.state.note_ids.slice();
      note_ids.splice(index, 1);
      let titles = this.state.notes; 
      titles.splice(this.state.notes.indexOf(note.title), 1);
      this.setState({note_ids: note_ids, notes: titles})
    }
  }




  render(){
    if (this.props.modalOpen){

      let openNotebooks = this.state.OpenNotebooks;

      let notes = Object.values(this.props.notes); 

      let notebooks = Object.values(this.props.notebooks).map(notebook => {
      let NotebooksNotes; 
        if(openNotebooks.includes(notebook.id)){
          NotebooksNotes = notes.filter(note => note.notebook_id === notebook.id)
          NotebooksNotes = NotebooksNotes.map(note => {
            if(!this.state.note_ids.includes(note.id)){
              return (<div className="NoteItem" key={note.id} onClick={() => this.handleLinkNote(note)}> {note.title} </div>);
            } else {
              let style = {
                background: this.state.color, 
              }
              return (<div className="NoteItem" key={note.id} onClick={() => this.handleLinkNote(note)} style={style}> {note.title} </div>);
            }
           
          }); 
        }
        return(
          <div className="notes-and-Notebooks-container">
            <div className="create-tag-notebook-index" onClick={this.addOrRemoveNotebook} title={notebook.id}>
              {notebook.title}
              <div className="small-gray-arrow-down"> </div>
            </div>
            <div className="notebook-notes">
              { NotebooksNotes}
            </div>
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
            <h3> Link Notes </h3>
              {notebooks}
            </div>
          </div>
        </div>
        <div className="modal-screen" onClick={() => {
          this.props.hideModal();
          this.resetState();
          }}></div>
        </>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default NewTagModal; 
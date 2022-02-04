import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modal/modal'
import TextEditorContainer from '../note/text_editor_container'
import NoteFormContainer from './note_form_container'
import TagsIndexContainer from '../tags/tags_index_container'


class NotebookIndex extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      modalOpen: false,
      setModalOpen: false,
      notes: [],
      noteToOpen: null,
      noteFormToOpen: false,
      note: {
        title: "",
        body: "",
        notebookId: ""
      }
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.deleteNotebook = this.deleteNotebook.bind(this)
    this.showNotesIndex = this.showNotesIndex.bind(this)
    this.showNote = this.showNote.bind(this)
    this.showNoteFromTag = this.showNoteFromTag.bind(this)
  }

  showNote(e){
    let noteId = e.currentTarget.value
    let note = this.props.getNote(this.props.notes[noteId]).then(() =>  this.setState({note: this.props.notes[noteId], 
      noteToOpen: noteId,
      noteFormToOpen: true}))
  }

  showNoteFromTag(){

  }

  showNotesIndex(e){
    let notebookId = e.currentTarget.value; 
    this.setState({note: {notebookId: e.currentTarget.value }})
    this.props.getAllNotes(notebookId)
  }

  componentDidMount(){
    this.props.getAllNotebooks(); 

    let ele = document.getElementById('body')
    ele.setAttribute('style', 'background-color:#525252')
  }

  deleteNotebook(id){
    this.props.removeNotebook(id)
  }

  toggleModal(){
    if (this.state.modalOpen){
      this.setState({setModalOpen: false,
      modalOpen: false})
    }
    else {
      this.setState({setModalOpen: true, 
        modalOpen: true
      })
    }
  }

  render(){
    let notebooks = this.props.notebooks.map((notebook, index) => <li key={index}>
      <button className="Notebooks"onClick={this.showNotesIndex} value={notebook.id}> {notebook.title} </button>
      <br /> 
      <motion.button onClick={() => this.deleteNotebook(notebook.id)} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>-</motion.button>
    </li>)

    let notesArray = Object.values(this.props.notes)
    let notes = notesArray.map((note, index) => {
      if(typeof note.tag === 'undefined' || note.notebook_id === this.state.note.notebookId){
        return <li key={index} onClick={this.showNote} value={note.id} className="NotesItem">{note.title}</li>
      } else {
        return null
      }
    })
    return(
      <div className="notesAndBooks">
        <div className="notebooks">
          <ul className="NotebookIndex">
            {notebooks}
          </ul>
          <motion.button className="newNotebookButton" onClick={this.toggleModal}
          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Create new notebook</motion.button>
          {/* first argument is a boolean, second is the compenet to render */}
          {this.state.modalOpen && <Modal modalOpen={this.state.modalOpen} handleClose={this.toggleModal} />}
        </div>
        <div className="Notes">
          <ul>
            {notes}
           <NoteFormContainer notebookId={this.state.note.notebookId}/>
          </ul>
        </div>
          <TextEditorContainer noteToOpen={this.state.noteToOpen} notebookId={this.state.note.notebookId}  note={this.state.note}/>
          <TagsIndexContainer showNote={(noteId) => this.setState({...this.state,
            noteToOpen: noteId
            })}/>
      </div>

    )
  }
}

export default NotebookIndex; 
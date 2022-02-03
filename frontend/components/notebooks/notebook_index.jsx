import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modal/modal'
import findById from '../../util/find_by_id'
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
  }

  showNote(e){
    let val = e.currentTarget.value
    let note = this.props.getNote(findById(this.props.notes, val)).then(() =>  this.setState({note: note, 
      noteToOpen: val,
      noteFormToOpen: true}))
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


    let notes = this.props.notes.map((note, index) => <li key={index} onClick={this.showNote} value={note.id} className="NotesItem">{note.title}</li>)
    // notes.unshift(<li> <button onClick> Add a new note</button></li>)

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
          <TagsIndexContainer />
      </div>

    )
  }
}

export default NotebookIndex; 
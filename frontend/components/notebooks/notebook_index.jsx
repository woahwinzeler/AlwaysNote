import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modal/modal'
import TextEditorContainer from '../note/text_editor_container'
import NoteFormContainer from './note_form_container'
import TagsIndexContainer from '../tags/tags_index_container'
import Collapsable from '../collapsable/collapsable'


class NotebookIndex extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      modalOpen: false,
      setModalOpen: false,
      notes: [],
      noteToOpen: null,
      noteFormToOpen: false,
      NotebookClass: "NotebookIndex",
      addStyle: true, 
      NoteClass: "Notes",
      ulStyle: {
        background: "rgba(255, 0, 0, 0.4)", 
      },
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
    this.collapseNotebooks = this.collapseNotebooks.bind(this)
    this.collapseNotes = this.collapseNotes.bind(this);
  }

  collapseNotebooks(cssClass){
    this.setState({NotebookClass: cssClass})
  }

  

  collapseNotes(cssClass){
    this.setState({NoteClass: cssClass})
  }

  getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
  }

  showNote(e){
    let noteId = e.currentTarget.title
    this.props.getNote(this.props.notes[noteId]).then(
      () =>  this.setState({note: this.props.notes[noteId], 
                            noteToOpen: noteId,
                            noteFormToOpen: true}))
  }


  showNotesIndex(e, style){
    let notebookId = e.currentTarget.id; 
    this.setState({ulStyle: {
      background: style
    }, 
    note: {notebookId: e.currentTarget.value }})
    this.props.getAllNotes(notebookId)
  }

  componentDidMount(){
    this.props.getAllNotebooks(); 

    //nightmode 
    // let ele = document.getElementById('body')
    // ele.setAttribute('style', 'background-color:#525252')
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
    let notebooks = this.props.notebooks.map((notebook, index) => {

      if(this.state.addStyle){
        let color = this.getColor();

        let color2 = this.getColor();
  
        this.style = {
          background: color
        }
        this.style2 = {
          background: color2
        }
        
        return (
        <li key={index} style={this.style2}>
        <div className="Notebooks"onClick={(e) => this.showNotesIndex(e, this.style)} id={notebook.id} style={this.style}> {notebook.title} </div>
        <motion.button onClick={() => this.deleteNotebook(notebook.id)} whileHover={{scale: 1.5}} whileTap={{scale: 0.7}} id="delete-notebook-button"></motion.button>
      </li>)
      }})
    

    let notesArray = Object.values(this.props.notes)
    let notes = notesArray.map((note, index) => {
      let color = this.getColor();
      let style = {
        background: color, 
      }
      if(typeof note.tag === 'undefined' || note.notebook_id === this.state.note.notebookId){
        return <motion.div key={index} onClick={this.showNote} title={note.id} className="NotesItem" style={style} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} >{note.title}</motion.div>
      } else {
        return null
      }
    })
    return(
      <div className="notesAndBooks">
        <div className="notebooks">
        <Collapsable target="NotebookIndex" changeClass={this.collapseNotebooks}> Notebooks </Collapsable>
          <ul className={this.state.NotebookClass} >
            {notebooks}
            <motion.button className="newNotebookButton" onClick={this.toggleModal}
          whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Create new notebook</motion.button>
          {this.state.modalOpen && <Modal modalOpen={this.state.modalOpen} handleClose={this.toggleModal} />}
          </ul>
        </div>
        <div className="NotesContainer">
        <Collapsable target="Notes" changeClass={this.collapseNotes} />
          <ul className="notes-box">
          <div className={this.state.NoteClass}>
            {notes}
           <NoteFormContainer notebookId={this.state.note.notebookId}/>
          </div>
          </ul>
        </div>
          <TextEditorContainer noteToOpen={this.state.noteToOpen} notebookId={this.state.note.notebookId}  note={this.state.note}/>
          <TagsIndexContainer showNote={(noteId) => this.setState({noteToOpen: noteId})} selectedNoteId={this.state.noteToOpen}/>
      </div>

    )
  }
}

export default NotebookIndex; 
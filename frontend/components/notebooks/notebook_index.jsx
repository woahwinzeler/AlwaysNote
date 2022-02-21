import React from 'react'
import { motion } from 'framer-motion'
import Modal from '../Modal/modal'
import TextEditorContainer from '../note/text_editor_container'
import NoteFormContainer from './note_form_container'
import TagsIndexContainer from '../tags/tags_index_container'
import Collapsable from '../collapsable/collapsable'
import ConfirmationModalContainer from '../confirmationModal/confirmation_modal_container'
import NavBarContainer from '../navBar/navbar_container'


class NotebookIndex extends React.Component{
  constructor(props){
    super(props)

    this.stylingObj = {};

    this.state = {
      modalOpen: false,
      editNotebookTitle: false, 
      setModalOpen: false,
      notes: [],
      noteToOpen: null,
      noteFormToOpen: false,
      openConfirmationModal: false, 
      takeAction: false, 
      NotebookClass: "NotebookIndex",
      addStyle: true, 
      NoteClass: "Notes",
      forceNotesOpen: false, 
      buttonId: "delete-note-button",
      deleteId: -1,
      link: false, 
      linkedTagId: -1,
      tag: {}, 
      isNote: false, 
      ulStyle: {
        background: "rgba(255, 0, 0, 0.4)", 
      },
      note: {
        title: "",
        body: "",
        notebook_id: ""
      }
    }


    this.toggleModal = this.toggleModal.bind(this)
    this.deleteNotebook = this.deleteNotebook.bind(this)
    this.handleNote = this.handleNote.bind(this);
    this.showNotesIndex = this.showNotesIndex.bind(this)
    this.showNote = this.showNote.bind(this)
    this.collapseNotebooks = this.collapseNotebooks.bind(this)
    this.collapseNotes = this.collapseNotes.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(notebook){
    this.props.updateNotebook(notebook);
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
                            noteFormToOpen: true,
                            ...this.state.note,
                          }))
  }


  showNotesIndex(e, style){
    let notebookId = e.currentTarget.id;
    this.setState({ulStyle: {
      background: style
    }, 
    note: {notebook_id:  notebookId},
    forceNotesOpen: true, 
  })
    this.props.getAllNotes(notebookId)
  }

  componentDidMount(){
    this.props.getAllNotebooks(); 

    //nightmode 
    // let ele = document.getElementById('body')
    // ele.setAttribute('style', 'background-color:#525252')
  }

  deleteNotebook(id){
    this.setState({
      openConfirmationModal: true, 
      deleteId: id,
      isNote: false,
    })
  }

  handleNote(note){
    if(this.state.link){
      let tag = this.state.tag; 
      let index = tag.note_ids.indexOf(note.id)
      if(index === - 1){
        tag.note_ids.push(note.id)
        this.props.updateTag(tag);
      } else {
        tag.note_ids.splice(index, 1);
        this.props.updateTag(tag); 
      }
    } else{
      this.setState({
        openConfirmationModal: true, 
        deleteId: note,
        isNote: true,
      })
    }
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

  update(field) {
    return e => this.setState({note: {...this.state.note, [field]: e.currentTarget.value}});
  }

  render(){
    let notebooks = this.props.notebooks.map((notebook, index) => {
      //want to replace lines 151 167 using this.props.style.NotebookItem, that can be changed using this.props.styleNotebookItemDefault(); 
      if(this.state.addStyle){
        let color = this.getColor();

        let color2 = this.getColor();

        this.stylingObj[notebook.id] = {
          background: color2
        }
  
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
      if(note.notebook_id === parseInt(this.state.note.notebook_id)){
        let buttonId = this.state.buttonId; 
        if (typeof this.state.tag.note_ids !== 'undefined'){
          if(this.state.tag.note_ids.includes(note.id) && this.state.link){
            buttonId = "de-" + buttonId; 
          }
        }
        return (
        <div className="NotesItem" style={style} >
        <motion.button onClick={() => this.handleNote(note)} whileHover={{scale: 1.5}} whileTap={{scale: 0.7}} id={buttonId}></motion.button>
        <motion.div key={index} onClick={this.showNote} title={note.id} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} >{note.title}
        </motion.div>
        </div>)
      } else {
        return null
      }
    })



    let notebookHeader;
    if(typeof this.state.note.notebook_id !== ""){
      for(let i = 0; i < this.props.notebooks.length; i++ ){
        if(this.props.notebooks[i].id === parseInt(this.state.note.notebook_id)){
         
          notebookHeader = this.state.editNotebookTitle ? <h3 className="notes-header" style={headerStyling} onDoubleClick={() => this.setState({editNotebookTitle: !this.state.editNotebookTitle})} >{notebookHeader}{this.props.notebooks[i].title}</h3>  :
          <textarea type="text" name="title" onChange={this.update('title')} value={this.props.notebooks[i].title} className="title-input"/>
        }
      }
    }
    
    let headerStyling;
    if(typeof this.stylingObj[this.state.note.notebook_id] !== "undefined"){
      headerStyling = this.stylingObj[this.state.note.notebook_id];
    }

    return(
      <>
      <NavBarContainer />
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
        <Collapsable target="Notes" changeClass={this.collapseNotes} forceOpen={this.state.forceNotesOpen} preventLoop={() => this.setState({forceOpen: !this.state.forceOpen})} />
          <ul className="notes-box">
          <div className={this.state.NoteClass}>
            {/* <h3 className="notes-header" style={headerStyling} onDoubleClick={this.setState({editNotebookTitle: true})}>{notebookHeader}</h3> */}
            {notes}
           <NoteFormContainer notebookId={this.state.note.notebookId}/>
          </div>
          </ul>
        </div>
          <TextEditorContainer noteToOpen={this.state.noteToOpen} notebookId={this.state.note.notebookId}  note={this.state.note}/>
          <TagsIndexContainer showNote={(noteId) => this.setState({noteToOpen: noteId})} selectedNoteId={this.state.noteToOpen} changeMode={(tag) => this.setState({link: !this.state.link, tag: tag, buttonId: !this.state.link  ? "link-notebook-button" : "delete-notebook-button"})}/>
          <ConfirmationModalContainer  modalOpen={this.state.openConfirmationModal} hideModal={() => this.setState({openConfirmationModal: false})} id={this.state.deleteId} isNote={this.state.isNote}/>
      </div>
      </>

    )
  }
}

export default NotebookIndex; 
import React from 'react'
import TagActionModal from './tag_action_modal'
import NewTagModal from './new_tag_modal'
import NewTagModalContainer from './new_tag_modal_container'
import Collapsable from '../collapsable/collapsable'
import {motion} from 'framer-motion'

class TagsIndex extends React.Component{
  //TODO: edit tags
  //TODO: remove tags 
  //TODO: style tags
  //TODO: add tags  
  constructor(props){
    super(props)

    this.state = {
      modalOpen: false,
      editMode: false,
      selectedTag: -1, 
      newTagModalOpen: false, 
      selectedNote: -1, 
      tagClassName: "tag-index",
      notesClassName: "tagged-notes"
    }

    this.getAllTags = this.getAllTags.bind(this)
    this.getTagNotes = this.getTagNotes.bind(this)
    this.showNote = this.showNote.bind(this)
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.showNoteOrEngageModal = this.showNoteOrEngageModal.bind(this); 
    this.showNewTagModal = this.showNewTagModal.bind(this);
    this.hideTags = this.hideTags.bind(this)
    this.hideNotes = this.hideNotes.bind(this)
  }

  changeMode(tag){
    this.props.changeMode(tag)
  }

  hideTags(cssClass){
    this.setState({tagClassName: cssClass})
  }


  getColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' + 
               (85 + 10 * Math.random()) + '%)'
  }


  hideNotes(cssClass){
    this.setState({notesClassName: cssClass})
  }


  getAllTags(e){
    e.preventDefault(); 

    this.props.getAllTags(this.props.userId)
  }

  showNewTagModal(e){
    e.preventDefault();
    this.setState({newTagModalOpen: true})
  }

  showModal(id){
    let tag = this.props.tags[id]; 
    this.setState({ modalOpen: true, tagSelected: tag  })
  }

  showNoteOrEngageModal(id){
    if(this.state.editMode){
      this.showModal(id);
    } else {
      this.getTagNotes(id);
    }
  }

  showNote(note){
    this.props.getNote(note).then(() => this.props.showNote(note.id))
  }

  toggleEditMode(e){
    e.preventDefault();
    if (this.state.editMode){
      this.setState({editMode: false})
    } else {
      this.setState({editMode: true})
    }
   
    //TODO: set classname for styling 


  }



  getTagNotes(id){
    this.props.fetchTagsNotes(id).then(() => this.setState({selectedTag: parseInt(id)}))
  }

  componentDidMount(){
    this.props.getAllTags(this.props.userId)
  }

  render(){

    let tags; 
    let tagKeys = Object.keys(this.props.tags);
    if (tagKeys.length >= 1){
      tags = tagKeys.map((id) => {
        const style = {
          background:  this.props.tags[id].color
        }
        return (
          <div key={id} title={this.props.tags[id].title} color={this.props.tags[id].color} style={style} onClick={() => this.showNoteOrEngageModal(id)} className="tag">
      </div>)
      })
    } 

    
    let notes;
    let noteKeys = Object.keys(this.props.notes);
    if (noteKeys.length > 0 && typeof noteKeys.length !== 'undefined'){
      notes = noteKeys.map(key => {
        let note = this.props.notes[key];
        if (note.tag.includes(this.state.selectedTag)){
          let style3 = {
            background: this.getColor(), 
          }
          return (
              <motion.div key={note.id}  onClick={() => this.showNote(note)} className="tag-note" whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} style={style3}> {note.title}</motion.div>
          )
        } else {
          return null 
        } 
      })
    } else {
      if (typeof this.state.selectedTag === 'undefined'){
        notes = <p className="placeholder"> {this.props.tags[this.state.selectedTag]} has no associated notes. </p>
      } else {
        notes = <p className="placeholder"> Select a tag to see associated notes</p>
      }
    }
  
    let button = this.state.editMode ?   
    <button onClick={this.toggleEditMode}> Show Tags </button> :
    <button onClick={this.toggleEditMode} > Edit Tags </button> 

    let tagHeader; 
    let tag; 
    if(this.state.selectedTag !== -1){
      tag = this.props.tags[this.state.selectedTag];
      tagHeader = tag.title + "'s"
    }
    
    return (
      <>
        <div className="tag-container">
        <Collapsable target="tag-index" changeClass={this.hideTags}/>
          <div className={this.state.tagClassName}>
            <button onClick={this.getAllTags}> See All Tags </button>
            {button}
            <button onClick={this.showNewTagModal}> Create New Tag </button>
            <h3 className="tag-header"> Tags </h3>
            <div className="all-tags">
              {tags}
            </div>
          </div>
          <Collapsable target="tagged-notes" changeClass={this.hideNotes}/>
          <div className={this.state.notesClassName}>
            <h3 className="tag-header" > {tagHeader} Notes </h3>
              <div className="tagged-notes-container">
              {notes}
              <motion.button onClick={() => this.changeMode(tag)}>Link More Notes </motion.button>
              </div>
          </div>
          <TagActionModal tag={this.state.tagSelected} modalOpen={this.state.modalOpen} hideModal={() => this.setState({modalOpen:false})} />
          <NewTagModalContainer modalOpen={this.state.newTagModalOpen} hideModal={() => this.setState({newTagModalOpen:false})} selectedNoteId={this.props.selectedNoteId} />
        </div>
      </>
      
    )
  }

}

export default TagsIndex; 
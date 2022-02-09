import React from 'react'
import TagActionModal from './tag_action_modal'
import NewTagModal from './new_tag_modal'
import NewTagModalContainer from './new_tag_modal_container'

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
      tagSelected: -1, 
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

  hideTags(){
    if (this.state.tagClassName === "tag-index"){
      this.setState({tagClassName: "hidden"})
    } else {
      this.setState({tagClassName: "tag-index"})
    }
  }

  hideNotes(){
    if (this.state.notesClassName === "tagged-notes"){
      this.setState({notesClassName: "hidden"})
    } else {
      this.setState({notesClassName: "tagged-notes"})
    }
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

    

    //TODO: Select a tag to see associated notes never renders 
    let notes;
    let noteKeys = Object.keys(this.props.notes);
    if (noteKeys.length > 0 && typeof noteKeys.length !== 'undefined'){
      notes = noteKeys.map(key => {
        let note = this.props.notes[key];
        if (typeof this.props.notes[key].tag !== 'undefined' && this.props.notes[key].tag === this.state.selectedTag){
          return (
              <div key={note.id}  onClick={() => this.showNote(note)} className="tag-note"> {note.title}</div>
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

    return (
      <>
        <div className="tag-container">
          <div className="collapsable" onClick={this.hideTags}> --- </div> 
          <div className={this.state.tagClassName}>
            <button onClick={this.getAllTags}> See All Tags </button>
            {button}
            <div className="all-tags">
              <h3 className="tag-header"> Tags </h3>
              {tags}
            </div>
            <button onClick={this.showNewTagModal}> Create New Tag </button>
          </div>
          <div className="collapsable" onClick={this.hideNotes}> ----- </div> 
          <div className={this.state.notesClassName}>
            <h3 className="tag-header" > Notes </h3>
            {notes}
          </div>
          <TagActionModal tag={this.state.tagSelected} modalOpen={this.state.modalOpen} hideModal={() => this.setState({modalOpen:false})} />
          <NewTagModalContainer modalOpen={this.state.newTagModalOpen} hideModal={() => this.setState({newTagModalOpen:false})} selectedNoteId={this.props.selectedNoteId} />
        </div>
      </>
      
    )
  }

}

export default TagsIndex; 
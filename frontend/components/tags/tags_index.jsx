import React from 'react'

class TagsIndex extends React.Component{
  //TODO: show note 
  //TODO: edit tags
  //TODO: remove tags 
  //TODO: style tags 
  constructor(props){
    super(props)

    this.state = {
      notes: {}
    }

    this.getAllTags = this.getAllTags.bind(this)
    this.getTagNotes = this.getTagNotes.bind(this)
    this.showNote = this.showNote.bind(this)
  }

  getAllTags(e){
    e.preventDefault(); 

    this.props.getAllTags(this.props.userId)
  }

  showNote(note){
    console.log(note)
    this.props.getNote(note).then(() => this.props.showNote(note.id))
  }

  getTagNotes(id){
    this.props.fetchTagsNotes(id)
  }

  componentDidMount(){
    this.props.getAllTags(this.props.userId)
  }

  render(){

    let tags; 
    let tagKeys = Object.keys(this.props.tags);
    if (tagKeys.length >= 1){
      tags = tagKeys.map((id) => <div key={id} color={this.props.tags[id].color} onClick={() => this.getTagNotes(id)} className="tag">{this.props.tags[id].title}</div>)
    } 

    //TODO add onClick={this.showNote(note)} tp the div with a key of note.id

    let notes;
    let noteKeys = Object.keys(this.props.notes);
    if (noteKeys.length > 0){
      notes = noteKeys.map(key => {
        let note = this.props.notes[key];
        if (typeof this.props.notes[key].tag !== 'undefined'){
          console.log(note)
          return (
              <div key={note.id} className="tag-note"> {note.title}</div>
          )
        } else {
          return null 
        } 
      })
    }  
    
    
    return (
      <div className="tag-container">
      <button onClick={this.getAllTags}> See All Tags </button>
      <div className="all-tags">
        <h3 className="tag-header"> Tags </h3>
        {tags}
      </div>
      <div className="tagged-notes">
        ,<h3 className="tag-header" > Notes </h3>
        {notes}
      </div>
      </div>
    )
  }

}

export default TagsIndex; 
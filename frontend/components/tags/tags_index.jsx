import React from 'react'

class TagsIndex extends React.Component{
  //TODO: add notes list
  //TODO: get all tags button
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
  }

  getAllTags(e){
    e.preventDefault(); 

    this.props.getAllTags(this.props.userId)
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
      tags = tagKeys.map((id) => <div key={id} color={this.props.tags[id].color} onClick={() => this.getTagNotes(id)}>{this.props.tags[id].title}</div>)
    } 
    let notes;
    let noteKeys = Object.keys(this.props.notes);
    if (noteKeys.length > 0){
      notes = noteKeys.map(key => {
        let note = this.props.notes[key];
        if (typeof this.props.notes[key].tag !== 'undefined'){
          return (
            <div className="tag-note">
              <div key={note.id} onClick> {note.title}</div>
            </div>
          )
        } else {
          return null 
        } 
      })
    }   
    return (
      <div className="tag-container">
      <button onClick={this.getAllTags}> See All Tags </button>
        {tags}
      <div className="tagged-notes">
        {notes}
      </div>
      </div>
    )
  }

}

export default TagsIndex; 
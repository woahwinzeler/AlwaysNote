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
    return (
      <div className="tags">
      <button onClick={this.getAllTags}> See All Tags </button>
        {tags}
      </div>
    )
  }

}

export default TagsIndex; 
import React from 'react'

class TagsIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getAllTags(this.props.userId)
  }

  render(){
    let tags = Object.keys(this.props.tags);
    if (tags.length >= 1){
      tags = tags.map((tag) => <div key={tag.id}> </div>)
    } else {
      tags = null;
    }
    return (
      <div className="tags">
        {tags}
      </div>
    )
  }

}

export default TagsIndex; 
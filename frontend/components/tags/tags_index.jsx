import 'react'

class TagsIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getAllTags(this.props.userId)
  }

  render(){
    return (
      <div className="tags">
        {this.props.tags}
      </div>
    )
  }

}

export default TagsIndex; 
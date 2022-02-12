import React from 'react'

class NoteForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: "",
      notebook_id: this.props.notebookId
    }


    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.notebookId)
    if(this.props.notebookId !== undefined){
      this.setState({notebook_id: this.props.notebookId}, () => this.props.createNote(this.state))
    } else {
      this.setState({notebook_id: Object.values(this.props.notes)[0].notebook_id}, () => this.props.createNote(this.state))
    }
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="note[title]" onChange={this.update("title")} />
        </label>
        <input type="submit"/>
      </form>
    )
  }
}

export default NoteForm;